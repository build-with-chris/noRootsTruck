import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    let body
    try {
      body = await request.json()
    } catch (parseError) {
      console.error('Fehler beim Parsen des Request-Bodies:', parseError)
      return NextResponse.json(
        { error: 'Ungültige Anfrage' },
        { status: 400 }
      )
    }

    const { name, email, phone, message, honeypot } = body

    // Honeypot-Check: Wenn das Honeypot-Feld ausgefüllt wurde, ist es ein Bot
    if (honeypot) {
      // Silent fail - wir antworten wie bei einem erfolgreichen Submit
      return NextResponse.json({ success: true }, { status: 200 })
    }

    // Validierung
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name und E-Mail sind erforderlich' },
        { status: 400 }
      )
    }

    // SMTP-Konfiguration aus Umgebungsvariablen
    const smtpHost = process.env.SMTP_HOST
    const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10)
    const smtpUser = process.env.SMTP_USER
    const smtpPassword = process.env.SMTP_PASSWORD
    const smtpFrom = process.env.SMTP_FROM || smtpUser
    const smtpSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465

    // Validierung der SMTP-Konfiguration
    if (!smtpHost || !smtpUser || !smtpPassword) {
      const missingVars = []
      if (!smtpHost) missingVars.push('SMTP_HOST')
      if (!smtpUser) missingVars.push('SMTP_USER')
      if (!smtpPassword) missingVars.push('SMTP_PASSWORD')
      
      console.error('SMTP-Konfiguration fehlt:', missingVars.join(', '))
      return NextResponse.json(
        { 
          error: 'E-Mail-Server ist nicht konfiguriert',
          details: `Fehlende Umgebungsvariablen: ${missingVars.join(', ')}`
        },
        { status: 500 }
      )
    }

    // Nodemailer Transporter erstellen
    // GMX-spezifische Konfiguration
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure, // true für Port 465, false für andere Ports
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
      // GMX erfordert explizite TLS-Konfiguration
      requireTLS: true, // Erzwingt TLS für Port 587
      tls: {
        // Für GMX: Zertifikat-Validierung aktivieren
        rejectUnauthorized: true,
        minVersion: 'TLSv1.2',
      },
      // Debug-Optionen (nur in Development)
      debug: process.env.NODE_ENV === 'development',
      logger: process.env.NODE_ENV === 'development',
    })

    // E-Mail-Inhalt
    const htmlContent = `
      <h2>Neue Kontaktanfrage</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
      ${phone ? `<p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>` : ''}
      ${message ? `<p><strong>Nachricht:</strong></p><p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>` : ''}
    `

    const textContent = `
      Neue Kontaktanfrage
      
      Name: ${name}
      E-Mail: ${email}
      ${phone ? `Telefon: ${phone}` : ''}
      ${message ? `\nNachricht:\n${message}` : ''}
    `

    // E-Mail versenden
    let info
    try {
      info = await transporter.sendMail({
        from: `Kontaktformular <${smtpFrom}>`,
        to: 'chris.hermann1@gmx.de',
        replyTo: email,
        subject: `Neue Kontaktanfrage von ${name}`,
        html: htmlContent,
        text: textContent,
      })
    } catch (smtpError: any) {
      console.error('SMTP-Versandfehler:', {
        message: smtpError.message,
        code: smtpError.code,
        command: smtpError.command,
        response: smtpError.response,
      })
      
      // Detailliertere Fehlermeldung
      let errorMessage = 'Fehler beim Versenden der E-Mail. Bitte versuchen Sie es später erneut.'
      let errorDetails = ''
      
      if (smtpError.code === 'EAUTH') {
        errorMessage = 'Authentifizierungsfehler bei GMX.'
        errorDetails = 'Bitte überprüfen Sie:\n' +
          '1. SMTP_USER muss die vollständige E-Mail-Adresse sein (chris.hermann1@gmx.de)\n' +
          '2. SMTP_PASSWORD muss korrekt sein\n' +
          '3. Für GMX benötigen Sie möglicherweise ein App-Passwort statt des normalen Passworts\n' +
          '4. Überprüfen Sie die GMX-Einstellungen für "Externe Apps"'
        if (smtpError.response) {
          errorDetails += `\nServer-Antwort: ${smtpError.response}`
        }
      } else if (smtpError.code === 'ECONNECTION') {
        errorMessage = 'Verbindungsfehler zum E-Mail-Server.'
        errorDetails = 'Bitte überprüfen Sie:\n' +
          '1. SMTP_HOST ist korrekt (mail.gmx.net)\n' +
          '2. SMTP_PORT ist korrekt (587 für STARTTLS oder 465 für SSL)\n' +
          '3. Firewall/Netzwerk-Einstellungen'
      } else if (smtpError.response) {
        errorMessage = `E-Mail-Server-Fehler: ${smtpError.response}`
        errorDetails = smtpError.message
      } else {
        errorDetails = smtpError.message
      }
      
      return NextResponse.json(
        { 
          error: errorMessage,
          details: process.env.NODE_ENV === 'development' ? errorDetails : (errorDetails || undefined)
        },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, messageId: info.messageId }, { status: 200 })
  } catch (error: any) {
    console.error('Unerwarteter API-Fehler:', {
      message: error?.message,
      stack: error?.stack,
    })
    return NextResponse.json(
      { 
        error: 'Ein unerwarteter Fehler ist aufgetreten',
        details: process.env.NODE_ENV === 'development' ? error?.message : undefined
      },
      { status: 500 }
    )
  }
}

// Hilfsfunktion zum Escapen von HTML
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}

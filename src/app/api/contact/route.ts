import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
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
      console.error('SMTP-Konfiguration fehlt. Bitte setzen Sie SMTP_HOST, SMTP_USER und SMTP_PASSWORD in den Umgebungsvariablen.')
      return NextResponse.json(
        { error: 'E-Mail-Server ist nicht konfiguriert' },
        { status: 500 }
      )
    }

    // Nodemailer Transporter erstellen
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure, // true für Port 465, false für andere Ports
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
      // Für GMX und andere Provider, die TLS erfordern
      tls: {
        rejectUnauthorized: false, // Für selbstsignierte Zertifikate
      },
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
    const info = await transporter.sendMail({
      from: `Kontaktformular <${smtpFrom}>`,
      to: 'chris.hermann1@gmx.de',
      replyTo: email,
      subject: `Neue Kontaktanfrage von ${name}`,
      html: htmlContent,
      text: textContent,
    })

    return NextResponse.json({ success: true, messageId: info.messageId }, { status: 200 })
  } catch (error) {
    console.error('SMTP error:', error)
    return NextResponse.json(
      { error: 'Fehler beim Versenden der E-Mail. Bitte versuchen Sie es später erneut.' },
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

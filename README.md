# NO ROOTS FAMILY TRUCK 🚛

Eine edle Verkaufspräsentation für den einzigartigen Daimler-Benz 1017 S Oldtimer mit luxuriösem Wohntrailer und professionellem Open-Air-Kino System.

## ✨ Features

- **Responsive Design** - Mobile-First Approach
- **Premium Verkaufspräsentation** - 7 detaillierte Kapitel
- **Echte Bilder** - Authentische Fotos des Trucks und Innenausstattung
- **Interactive Elements** - Hover-Effekte und Animationen
- **Grundriss-Visualisierung** - Proportional korrekte Raumaufteilung

## 🏗️ Tech Stack

- **Next.js 15** - React Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **Vercel** - Deployment

## 🚀 Deployment

Diese App ist optimiert für **Vercel Deployment**:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/build-with-chris/noRootsTruck)

## 🏠 Fahrzeug Details

- **Baujahr**: 1980 (Zugmaschine) / 1984 (Trailer)
- **Wohnfläche**: 44 m²
- **Schlafplätze**: 8-12 Personen
- **Besonderheit**: 44 m² Open-Air-Kino System
- **Preis**: 280.000 € (VB)

## 📧 Kontaktformular & SMTP-Konfiguration

Das Kontaktformular verwendet SMTP für den E-Mail-Versand. Für die Konfiguration müssen folgende Umgebungsvariablen gesetzt werden:

### Lokale Entwicklung (.env.local)

```bash
SMTP_HOST=mail.gmx.net
SMTP_PORT=587
SMTP_USER=chris.hermann1@gmx.de
SMTP_PASSWORD=ihr_passwort_hier
SMTP_FROM=chris.hermann1@gmx.de
SMTP_SECURE=false
```

### Vercel/Production

Setzen Sie die Umgebungsvariablen in den Vercel-Projekteinstellungen unter **Settings → Environment Variables**.

### GMX SMTP-Einstellungen

- **Host**: `mail.gmx.net`
- **Port**: `587` (STARTTLS) oder `465` (SSL)
- **SMTP_SECURE**: `false` für Port 587, `true` für Port 465
- **User**: Vollständige GMX-E-Mail-Adresse (z.B. `chris.hermann1@gmx.de`)
- **Password**: **WICHTIG**: GMX erfordert oft ein **App-Passwort** statt des normalen Passworts

#### GMX App-Passwort einrichten:

1. Loggen Sie sich in Ihr GMX-Konto ein
2. Gehen Sie zu **Einstellungen → Sicherheit → App-Passwörter**
3. Erstellen Sie ein neues App-Passwort für "E-Mail-Apps"
4. Verwenden Sie dieses App-Passwort als `SMTP_PASSWORD` in den Umgebungsvariablen

**Hinweis**: Wenn Sie weiterhin Authentifizierungsfehler erhalten, stellen Sie sicher, dass:
- Die E-Mail-Adresse vollständig ist (inkl. @gmx.de)
- Sie ein App-Passwort verwenden (nicht das normale GMX-Passwort)
- Die SMTP-Einstellungen korrekt sind

### Alternative SMTP-Provider

Die Lösung funktioniert auch mit anderen SMTP-Servern (Gmail, Outlook, eigene Server). Passen Sie die Umgebungsvariablen entsprechend an.

## 📞 Kontakt

E-Mail: info@unterwegs-aufatmen.de

---

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>
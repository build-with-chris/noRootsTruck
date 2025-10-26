import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NO ROOTS FAMILY TRUCK - Ein Zuhause auf Rädern',
  description: 'Oldtimer Daimler-Benz 1017 S mit luxuriösem Wohntrailer. Baujahr 1980, 44 m² Wohnraum, Premium-Ausstattung. Preis: 280.000 €',
  keywords: 'Oldtimer, Wohnmobil, Truck, Mobile Home, Daimler-Benz, Luxus, Premium',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
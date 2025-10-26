'use client'

import { useState } from 'react'
import Image from 'next/image'

interface AccordionItem {
  id: string
  title: string
  chapter: string
  preview: string
  content: React.ReactNode
}

export default function MobileAccordion() {
  const [openItem, setOpenItem] = useState<string | null>(null)

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id)
  }

  const accordionItems: AccordionItem[] = [
    {
      id: 'character',
      title: 'Geschichte & Charakter',
      chapter: 'Kapitel 1',
      preview: 'Vom Renntransporter zum Design-Loft',
      content: (
        <div className="space-y-4">
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src="/images/History1.jpg"
              alt="Geschichte des Trucks"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
          </div>
          <p className="text-gray-700">
            Dieser außergewöhnliche Daimler-Benz 1017 S war einst ein treuer Begleiter im Motorsport.
            Heute erstrahlt er als luxuriöses mobiles Zuhause mit höchsten Ansprüchen an Design und Komfort.
          </p>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="text-sm font-semibold text-gray-900">Handarbeit</div>
              <div className="text-xs text-gray-600">Jedes Detail liebevoll gefertigt</div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="text-sm font-semibold text-gray-900">Nachhaltig</div>
              <div className="text-xs text-gray-600">Ressourcenschonend</div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="text-sm font-semibold text-gray-900">Einzigartig</div>
              <div className="text-xs text-gray-600">Unverwechselbares Unikat</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'truck',
      title: 'Zugmaschine',
      chapter: 'Kapitel 2',
      preview: 'Daimler-Benz 1017 S Oldtimer',
      content: (
        <div className="space-y-4">
          <div className="relative rounded-xl overflow-hidden bg-red-600">
            <Image
              src="/images/Overview.jpg"
              alt="Daimler-Benz 1017 S"
              width={400}
              height={200}
              className="w-full h-48 object-contain"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="text-xs text-gray-600">Baujahr</div>
              <div className="font-semibold">1980</div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="text-xs text-gray-600">Motor</div>
              <div className="font-semibold">168 PS Diesel</div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="text-xs text-gray-600">Führerschein</div>
              <div className="font-semibold">Klasse C1E</div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="text-xs text-gray-600">Zulassung</div>
              <div className="font-semibold">H-Kennzeichen</div>
            </div>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="font-semibold text-green-800 mb-1">Wertgutachten 2022</div>
            <div className="text-green-700 text-sm">20.000 € professionell bewertet</div>
          </div>
        </div>
      )
    },
    {
      id: 'trailer',
      title: 'Wohntrailer',
      chapter: 'Kapitel 3',
      preview: '44 m² Luxus-Wohnraum',
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-2">
            <Image src="/images/Furniture1.jpg" alt="Möbel 1" width={120} height={80} className="w-full h-20 object-cover rounded-lg" />
            <Image src="/images/Furniture2.jpg" alt="Möbel 2" width={120} height={80} className="w-full h-20 object-cover rounded-lg" />
            <Image src="/images/Furniture3.jpg" alt="Möbel 3" width={120} height={80} className="w-full h-20 object-cover rounded-lg" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-gray-50 rounded-lg text-center">
              <div className="text-lg font-bold text-primary-600">44 m²</div>
              <div className="text-xs text-gray-600">Wohnfläche</div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg text-center">
              <div className="text-lg font-bold text-accent-600">8-12</div>
              <div className="text-xs text-gray-600">Schlafplätze</div>
            </div>
          </div>
          <p className="text-gray-700 text-sm">
            Hochwertige Naturmaterialien, durchdachte Raumaufteilung und luxuriöse Ausstattung
            schaffen ein einzigartiges Wohngefühl auf Rädern.
          </p>
        </div>
      )
    },
    {
      id: 'equipment',
      title: 'Ausstattung & Technik',
      chapter: 'Kapitel 4',
      preview: 'Autarkes Wohnen der Extraklasse',
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 rounded-lg">
              <div className="font-semibold text-blue-900">Autarkie-System</div>
              <div className="text-blue-700 text-sm">7+ Tage völlig unabhängig</div>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <div className="font-semibold text-green-900">Solar & Batterie</div>
              <div className="text-green-700 text-sm">Nachhaltige Energieversorgung</div>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <div className="font-semibold text-purple-900">Komfort-Ausstattung</div>
              <div className="text-purple-700 text-sm">Vollküche, Bad, Heizung</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'experience',
      title: 'Open-Air-Kino',
      chapter: 'Kapitel 5',
      preview: '44 m² Leinwand für Events',
      content: (
        <div className="space-y-4">
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src="/images/Outdoor Kino.jpg"
              alt="Open-Air-Kino"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="text-lg font-bold text-primary-600">44 m²</div>
              <div className="text-xs text-gray-600">Leinwand</div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="text-lg font-bold text-accent-600">100</div>
              <div className="text-xs text-gray-600">Personen</div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="text-lg font-bold text-primary-600">30 Min</div>
              <div className="text-xs text-gray-600">Aufbau</div>
            </div>
          </div>
          <p className="text-gray-700 text-sm">
            Professionelles 4K-Kino-System mit Surround-Sound für unvergessliche Events
            unter freiem Himmel.
          </p>
        </div>
      )
    },
    {
      id: 'technical',
      title: 'Technische Daten',
      chapter: 'Kapitel 6',
      preview: 'Wartung & Werterhaltung',
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="text-xs text-gray-600">TÜV/AU</div>
              <div className="font-semibold text-green-600">Neu (2024)</div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="text-xs text-gray-600">Versicherung</div>
              <div className="font-semibold">Oldtimer (H)</div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="text-xs text-gray-600">Kfz-Steuer</div>
              <div className="font-semibold">191 €/Jahr</div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="text-xs text-gray-600">Kraftstoff</div>
              <div className="font-semibold">18-22 l/100km</div>
            </div>
          </div>
          <div className="p-4 bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg">
            <div className="font-semibold text-gray-900 mb-2">Gesamtinvestition</div>
            <div className="text-2xl font-bold text-primary-700">€ 470.000</div>
            <div className="text-sm text-gray-600 mt-1">Verkaufspreis: nur € 280.000</div>
          </div>
        </div>
      )
    }
  ]

  return (
    <div className="lg:hidden py-8">
      <div className="section-padding">
        <div className="text-center mb-8">
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-3">
            Entdecke den NO ROOTS FAMILY TRUCK
          </h2>
          <p className="text-gray-600">
            Tippe auf ein Kapitel für weitere Details
          </p>
        </div>

        <div className="space-y-3">
          {accordionItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex-1">
                  <div className="text-xs text-primary-600 font-semibold mb-1">
                    {item.chapter}
                  </div>
                  <div className="font-semibold text-gray-900 mb-1">
                    {item.title}
                  </div>
                  <div className="text-sm text-gray-600">
                    {item.preview}
                  </div>
                </div>
                <div className="ml-4">
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                      openItem === item.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openItem === item.id
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="p-4 pt-0 border-t border-gray-100">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Jetzt Kontakt aufnehmen
          </button>
        </div>
      </div>
    </div>
  )
}
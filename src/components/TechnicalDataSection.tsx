'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function TechnicalDataSection() {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null)
  const vehicleData = [
    { category: 'Fahrzeug', items: [
      { label: 'Gesamtlänge', value: '12,5 m' },
      { label: 'Gesamtbreite', value: '2,5 m' },
      { label: 'Gesamthöhe', value: '4,0 m' },
      { label: 'Zul. Gesamtgewicht', value: '10.000 kg' },
      { label: 'Leergewicht', value: '6.200 kg' },
      { label: 'Nutzlast', value: '3.800 kg' },
    ]},
    { category: 'Motor & Antrieb', items: [
      { label: 'Motor', value: 'OM 366 A Diesel' },
      { label: 'Hubraum', value: '5.958 ccm' },
      { label: 'Leistung', value: '170 PS (125 kW)' },
      { label: 'Drehmoment', value: '520 Nm' },
      { label: 'Getriebe', value: '6-Gang manuell' },
      { label: 'Kraftstoffverbrauch', value: '18-22 l/100km' },
    ]},
    { category: 'Prüfung & Zulassung', items: [
      { label: 'TÜV', value: 'Neu (Anfang November 2025)' },
      { label: 'AU', value: 'Neu (Anfang November 2025)' },
      { label: 'Hauptuntersuchung', value: 'Jährlich' },
      { label: 'Führerschein', value: 'Klasse C1' },
      { label: 'Mautpflicht', value: 'Keine' },
      { label: 'Fahrverbot', value: 'Keine Einschränkungen' },
    ]}
  ]

  return (
    <section id="technical" className="py-20 lg:py-32 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-4">
            Kapitel 6
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Technische Daten
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Detaillierte Fahrzeugdaten und aktuelle Prüfungsangaben
          </p>
        </div>

        {/* Technical Data Grid - Desktop */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 mb-16">
          {vehicleData.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-3 h-3 bg-primary-500 rounded-full mr-3"></div>
                {section.category}
              </h3>
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                    <span className="text-gray-600 font-medium">{item.label}</span>
                    <span className="text-gray-900 font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Data Accordion - Mobile */}
        <div className="lg:hidden space-y-4 mb-16">
          {vehicleData.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setExpandedCategory(expandedCategory === sectionIndex ? null : sectionIndex)
                }}
                className="w-full p-6 text-left flex items-center bg-white hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
              >
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 mr-3 ${
                    expandedCategory === sectionIndex ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <div className="w-3 h-3 bg-primary-500 rounded-full mr-3"></div>
                <h3 className="font-serif text-lg font-bold text-gray-900">{section.category}</h3>
              </button>

              <div className={`transition-all duration-300 ${
                expandedCategory === sectionIndex ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-6 pb-6 space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                      <span className="text-gray-600 font-medium text-sm">{item.label}</span>
                      <span className="text-gray-900 font-semibold text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
'use client'

import Image from 'next/image'

export default function TechnicalDataSection() {
  const vehicleData = [
    { category: 'Fahrzeug', items: [
      { label: 'Gesamtlänge', value: '12,5 m' },
      { label: 'Gesamtbreite', value: '2,5 m' },
      { label: 'Gesamthöhe', value: '3,8 m' },
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
    { category: 'Wartung & Dokumentation', items: [
      { label: 'TÜV', value: 'Neu (2024)' },
      { label: 'AU', value: 'Neu (2024)' },
      { label: 'Hauptuntersuchung', value: 'Alle 2 Jahre' },
      { label: 'Service-Intervall', value: '15.000 km' },
      { label: 'Wertgutachten', value: 'Vorhanden' },
      { label: 'Fahrzeugbrief', value: 'Vorhanden' },
    ]},
    { category: 'Versicherung & Kosten', items: [
      { label: 'Versicherungsklasse', value: 'Oldtimer (H)' },
      { label: 'Kfz-Steuer', value: '191 € / Jahr' },
      { label: 'Versicherung', value: 'ca. 400 € / Jahr' },
      { label: 'Mautpflicht', value: 'Keine' },
      { label: 'Führerschein', value: 'Klasse C1' },
      { label: 'Fahrverbot', value: 'Keine Einschränkungen' },
    ]}
  ]

  const maintenanceHistory = [
    { year: '2024', work: 'Komplette Inspektion, TÜV/AU neu', cost: '€ 2.800' },
    { year: '2023', work: 'Motor-Überholung, Kupplung neu', cost: '€ 8.500' },
    { year: '2022', work: 'Bremssystem komplett erneuert', cost: '€ 3.200' },
    { year: '2021', work: 'Fahrwerk-Überholung, Stoßdämpfer', cost: '€ 2.100' },
  ]

  return (
    <section id="technical" className="py-20 lg:py-32 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-4">
            Kapitel 6
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Technische Daten & Wartung
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Detaillierte Fahrzeugdaten und lückenlose Wartungshistorie
          </p>
        </div>

        {/* Technical Data Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
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

        {/* Maintenance History */}
        <div className="bg-gradient-to-r from-primary-50 via-white to-accent-50 rounded-3xl p-8 lg:p-12 mb-16">
          <h3 className="font-serif text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">
            Wartungshistorie
          </h3>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {maintenanceHistory.map((entry, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center space-x-4 mb-3 sm:mb-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="font-bold text-primary-600">{entry.year}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{entry.work}</h4>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="bg-accent-100 text-accent-800 px-3 py-1 rounded-full text-sm font-medium">
                        {entry.cost}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center space-x-3 bg-green-50 text-green-800 px-6 py-3 rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-semibold">Kontinuierlich gepflegt seit 2017</span>
              </div>
            </div>
          </div>
        </div>

        {/* Value Assessment */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Werterhaltung & Gutachten
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m0 0h2m-2 0v4m0-4V9a2 2 0 012-2h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-2 0V9" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Wertgutachten</h4>
                  <p className="text-gray-600">Offizielles Gutachten bestätigt Fahrzeugwert von € 320.000</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Wertsteigerung</h4>
                  <p className="text-gray-600">Oldtimer-Status garantiert kontinuierliche Wertsteigerung</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Dokumentation</h4>
                  <p className="text-gray-600">Lückenlose Dokumentation aller Arbeiten und Investitionen</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-8">
            <h4 className="font-serif text-xl font-bold text-gray-900 text-center mb-6">
              Kostenzusammenstellung
            </h4>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 flex justify-between items-center">
                <span className="text-gray-700">Fahrzeug-Anschaffung & Restaurierung</span>
                <span className="font-semibold text-gray-900">€ 125.000</span>
              </div>
              <div className="bg-white rounded-lg p-4 flex justify-between items-center">
                <span className="text-gray-700">Trailer & Luxus-Ausbau</span>
                <span className="font-semibold text-gray-900">€ 185.000</span>
              </div>
              <div className="bg-white rounded-lg p-4 flex justify-between items-center">
                <span className="text-gray-700">Profi-Kino-System & Technik</span>
                <span className="font-semibold text-gray-900">€ 65.000</span>
              </div>
              <div className="bg-white rounded-lg p-4 flex justify-between items-center">
                <span className="text-gray-700">Wartung & Premium-Ausstattung</span>
                <span className="font-semibold text-gray-900">€ 45.000</span>
              </div>
              <div className="bg-white rounded-lg p-4 flex justify-between items-center">
                <span className="text-gray-700">Arbeitszeit (800+ Stunden)</span>
                <span className="font-semibold text-gray-900">€ 50.000</span>
              </div>
              <div className="bg-primary-200 rounded-lg p-4 flex justify-between items-center border-2 border-primary-300">
                <span className="font-semibold text-gray-900">Gesamtinvestition</span>
                <span className="font-bold text-xl text-primary-800">€ 470.000</span>
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-gray-700">
              Inklusive: Komplett-Einrichtung, Technik, Wertgutachten <br />
              <span className="text-green-600 font-semibold">Oldtimer-Zulassung + Dokumentation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
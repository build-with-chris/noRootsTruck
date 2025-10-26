'use client'

import Image from 'next/image'

export default function TruckSection() {
  const technicalData = [
    { label: 'Modell', value: 'Daimler-Benz 1017 S' },
    { label: 'Baujahr', value: '1980' },
    { label: 'Farbe', value: 'Rot' },
    { label: 'Motor', value: '6-Zylinder Diesel, 168 PS' },
    { label: 'Hubraum', value: '5.675 cm³' },
    { label: 'Getriebe', value: 'Einscheiben-Trockenkupplung' },
    { label: 'Zul. Gesamtgewicht', value: '21 t (auf 7,49 t abgelastet)' },
    { label: 'Führerschein', value: 'Klasse 3 alt oder C1E' },
    { label: 'Max. Geschwindigkeit', value: '84 km/h' },
    { label: 'Kraftstofftank', value: '135 Liter' },
    { label: 'Verbrauch', value: 'ca. 16 l/100 km' },
    { label: 'Kilometerstand', value: 'ca. 910.000 km' },
  ]

  const features = [
    'Oldtimerzulassung (H-Kennzeichen)',
    'Keine Maut, kein Sonntagsfahrverbot',
    'Keine Umweltzonenbeschränkung',
    'Jährlich gewartet (TÜV im November)',
    'Neue Sattelkupplung',
    'Unterboden erneuert mit Rostschutz',
    'Neue Lenkung, neu lackiert',
    'Technisch einwandfrei',
    'Kabine: 2 Vordersitze + Rückbank',
    'Stockbett für 2 Personen',
    'Originalgetreu restauriert',
    'Versicherung: ca. 170 €/Jahr'
  ]

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-4">
            Kapitel 2
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Zugmaschine
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oldtimer Daimler-Benz 1017 S – Ein Klassiker mit zeitloser Eleganz und bewährter Technik
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
          <div>
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">Technische Daten</h3>
              <div className="space-y-4">
                {technicalData.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                    <span className="text-gray-600 font-medium">{item.label}</span>
                    <span className="text-gray-900 font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <Image
                src="/images/Overview.jpg"
                alt="Daimler-Benz 1017 S Außenansicht - NO ROOTS FAMILY TRUCK"
                width={600}
                height={300}
                className="rounded-2xl shadow-xl object-cover w-full h-72"
              />
              <div className="absolute bottom-4 left-4 glass-effect rounded-lg px-4 py-2">
                <span className="text-white font-semibold">Außenansicht</span>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/Funiture1.jpg"
                alt="Innenraum - Hochwertige Ausstattung"
                width={600}
                height={300}
                className="rounded-2xl shadow-xl object-cover w-full h-72"
              />
              <div className="absolute bottom-4 left-4 glass-effect rounded-lg px-4 py-2">
                <span className="text-white font-semibold">Innenausstattung</span>
              </div>
            </div>
          </div>
        </div>

        {/* Besondere Merkmale - Full Width */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl font-bold text-gray-900 mb-8 text-center">Besondere Merkmale</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="group relative flex items-start space-x-4 p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl hover:shadow-accent-500/20 hover:-translate-y-2 hover:border-accent-300 transition-all duration-300 cursor-pointer min-h-[100px]">
                <div className="w-3 h-3 bg-accent-500 rounded-full flex-shrink-0 mt-1 group-hover:bg-accent-600 transition-colors duration-300 shadow-sm"></div>
                <span className="text-gray-700 font-medium leading-relaxed group-hover:text-gray-900 transition-colors duration-300">{feature}</span>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent-400/20 to-primary-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-accent-50 to-primary-50 rounded-3xl p-8 lg:p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Oldtimer-Charme trifft moderne Zuverlässigkeit
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Der rote Daimler-Benz 1017 S vereint das Beste aus zwei Welten: den unverwechselbaren Charme
              eines echten Oldtimers mit der Zuverlässigkeit kontinuierlicher Wartung.
              Mit 910.000 km Laufleistung und jährlicher Wartung steht er bereit für weitere Abenteuer.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-semibold text-green-800">Wertgutachten 2022: 20.000 €</span>
              </div>
              <p className="text-sm text-green-700">
                Professionell bewerteter Fahrzeugwert bestätigt die Qualität und den Zustand
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
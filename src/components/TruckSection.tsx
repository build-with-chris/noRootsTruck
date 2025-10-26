'use client'

import Image from 'next/image'
import Accordion from './Accordion'
import MobileChapterTransition from './MobileChapterTransition'

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
    <section id="truck" className="py-20 lg:py-32 bg-white">
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

        {/* Technische Daten - Full Width */}
        <div className="mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-8">
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">Technische Daten</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {technicalData.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-md">
                  <div className="flex flex-col space-y-2">
                    <span className="text-gray-600 font-medium text-sm">{item.label}</span>
                    <span className="text-gray-900 font-bold text-lg">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Unser Meisterwerk - Full Width Hero Image */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">Unser Meisterwerk</h3>
            {/* Desktop - with red background */}
            <div className="hidden lg:block relative bg-red-600 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/Overview.jpg"
                alt="Daimler-Benz 1017 S Außenansicht - NO ROOTS FAMILY TRUCK"
                width={1600}
                height={800}
                className="object-contain w-full h-[600px]"
              />
              <div className="absolute bottom-8 left-8 glass-effect rounded-xl px-8 py-4">
                <span className="text-white font-bold text-xl">Daimler-Benz 1017 S - Außenansicht</span>
              </div>
            </div>

            {/* Mobile - without red background */}
            <div className="lg:hidden relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/Overview.jpg"
                alt="Daimler-Benz 1017 S Außenansicht - NO ROOTS FAMILY TRUCK"
                width={1600}
                height={800}
                className="object-cover w-full h-[400px] rounded-3xl"
              />
              <div className="absolute bottom-4 left-4 glass-effect rounded-lg px-4 py-2">
                <span className="text-white font-semibold">Daimler-Benz 1017 S</span>
              </div>
            </div>
          </div>
        </div>

        {/* Besondere Merkmale - Desktop Full Width */}
        <div className="mb-16 hidden lg:block">
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

        {/* Mobile Accordions */}
        <div className="lg:hidden mb-16">
          <Accordion title="Technische Highlights" defaultOpen={true}>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-white rounded-lg border border-gray-200">
                <div className="text-xs text-gray-700 font-medium">Motor</div>
                <div className="font-bold text-gray-900">168 PS Diesel</div>
              </div>
              <div className="p-3 bg-white rounded-lg border border-gray-200">
                <div className="text-xs text-gray-700 font-medium">Hubraum</div>
                <div className="font-bold text-gray-900">5.675 cm³</div>
              </div>
              <div className="p-3 bg-white rounded-lg border border-gray-200">
                <div className="text-xs text-gray-700 font-medium">Führerschein</div>
                <div className="font-bold text-gray-900">Klasse C1E</div>
              </div>
              <div className="p-3 bg-white rounded-lg border border-gray-200">
                <div className="text-xs text-gray-700 font-medium">Max. Speed</div>
                <div className="font-bold text-gray-900">84 km/h</div>
              </div>
            </div>
          </Accordion>

          <Accordion title="Oldtimer-Vorteile">
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">H-Kennzeichen (Oldtimer)</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Keine Maut, kein Sonntagsfahrverbot</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">Keine Umweltzonenbeschränkung</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700">Günstige Versicherung (ca. 170 €/Jahr)</span>
              </div>
            </div>
          </Accordion>

          <Accordion title="Zustand & Wartung">
            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="font-semibold text-green-800 mb-1">TÜV neu (November 2024)</div>
                <div className="text-green-700 text-sm">Technisch einwandfrei</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="font-semibold text-blue-800 mb-1">Restauriert & renoviert</div>
                <div className="text-blue-700 text-sm">Neue Lenkung, neu lackiert, Unterboden erneuert</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div className="font-semibold text-gray-800 mb-1">Wertgutachten 2022</div>
                <div className="text-gray-700 text-sm">Professionell bewertet: 20.000 €</div>
              </div>
            </div>
          </Accordion>
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

      <MobileChapterTransition
        currentChapter="Kapitel 2"
        currentTitle="Zugmaschine"
        nextChapter="Kapitel 3"
        nextTitle="Wohntrailer"
        nextId="trailer"
      />
    </section>
  )
}
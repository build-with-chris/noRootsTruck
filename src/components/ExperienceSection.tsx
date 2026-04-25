'use client'

import ClickableImage from './ClickableImage'

export default function ExperienceSection() {
  const experiences = [
    {
      title: 'Open-Air-Kino',
      size: '44 m² Leinwand',
      description: 'Professionelles Kino-System mit Großbildprojektion für unvergessliche Filmabende unter freiem Himmel'
    },
    {
      title: 'Event-Location',
      size: '100-500 Personen',
      description: 'Mobile Veranstaltungslocation für private Feiern, Firmenevents oder Festivals'
    },
    {
      title: 'Aufbauzeit',
      size: 'Ca. 5 Stunden',
      description: 'Aufbau je nach Standort und Einsatz in etwa 5 Stunden'
    }
  ]

  const eventTypes = [
    'Private Kinoabende',
    'Hochzeiten & Feiern',
    'Corporate Events',
    'Festival-Auftritte',
    'Outdoor-Präsentationen',
    'Community-Events'
  ]

  return (
    <section id="experience" className="py-20 lg:py-32 elegant-gradient">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4">
            Kapitel 5
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Erlebnis & Zusatzfunktionen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mehr als nur Wohnen - das Kino-Paket ist optional zubuchbar
          </p>
        </div>

        {/* Hero Feature - Open Air Cinema */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-80 lg:h-full">
              <ClickableImage
                src="/images/Outdoor Kino.jpg"
                alt="44 m² Open-Air-Kino - NO ROOTS FAMILY TRUCK"
                fill
                className="object-cover"
                caption="Open-Air-Kino"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="glass-effect rounded-lg px-4 py-2">
                  <span className="font-semibold">44 m² Leinwand</span>
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="text-6xl mb-6">🎬</div>
              <h3 className="font-serif text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Open Air Kino
              </h3>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  Optionales Kino-Setup mit 44 m² Leinwand für Veranstaltungen.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>Professioneller HD Projektor</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>Soundsystem mit Floor-Speakern</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>Steuerung aus dem Führerhaus (Video- und Audiotechnik)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="text-2xl">
                  {index === 0 ? '🎭' : index === 1 ? '🎉' : '⚡'}
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">
                {experience.title}
              </h3>
              <div className="text-primary-600 font-semibold mb-4">
                {experience.size}
              </div>
              <p className="text-gray-600">
                {experience.description}
              </p>
            </div>
          ))}
        </div>

        {/* Event Types & Use Cases */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
              Vielseitige Einsatzmöglichkeiten
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {eventTypes.map((eventType, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-md">
                  <div className="w-3 h-3 bg-accent-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{eventType}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-6">
              <h4 className="font-serif text-lg font-bold text-gray-900 mb-3">
                Aufbauzeit
              </h4>
              <p className="text-gray-700">
                Der Aufbau dauert je nach Einsatzort in der Regel rund 5 Stunden.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <ClickableImage
                src="/images/Outdoor Kino epic.jpg"
                alt="Professionelles Open-Air-Kino Setup"
                width={600}
                height={300}
                className="rounded-2xl shadow-xl object-cover w-full h-72"
                caption="Open-Air-Kino Setup"
              />
              <div className="absolute bottom-4 left-4 glass-effect rounded-lg px-4 py-2">
                <span className="text-white font-semibold">Event-Setup</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specs */}
        <div className="mt-16 bg-white rounded-3xl p-8 lg:p-12 shadow-2xl text-center">
          <h3 className="font-serif text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            Kino-System (optional)
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Angaben zur Kinoausstattung auf Anfrage.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="p-4">
              <div className="text-2xl font-bold text-primary-600">44 m²</div>
              <div className="text-sm text-gray-600">Leinwand (22:9)</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-accent-600">100</div>
              <div className="text-sm text-gray-600">Relax-Chairs</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-primary-600">5h</div>
              <div className="text-sm text-gray-600">Aufbauzeit</div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl">
            <h4 className="font-serif text-lg font-bold text-gray-900 mb-3">
              Hinweis
            </h4>
            <p className="text-gray-700">
              Das Kino ist optional und nicht im Basispreis enthalten.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
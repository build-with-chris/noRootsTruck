'use client'

export default function TechSection() {
  const techFeatures = [
    {
      category: 'Strom',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      items: [
        'Dieselaggregat 4 kW',
        'LED-Beleuchtung komplett',
        'Landstromanschluss',
        '12V & 230V System'
      ]
    },
    {
      category: 'Wasser',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12l2 2 4-4M6 3h12l2 2v14l-2 2H6L4 19V5l2-2z" />
        </svg>
      ),
      items: [
        '230 Liter Wassertank',
        'Warmwasseraufbereitung',
        'Druckwassersystem',
        'Abwassertank'
      ]
    },
    {
      category: 'Wärme',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        </svg>
      ),
      items: [
        'Holzofen (gemütlich)',
        'Dieselheizung (effizient)',
        'Fußbodenheizung',
        'Isolierung Premium'
      ]
    },
    {
      category: 'Sicherheit',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      items: [
        'CO₂-Schutz System',
        'Rauchmelder',
        'Feuerlöscher',
        'Gaswarnsystem'
      ]
    }
  ]

  return (
    <section id="equipment" className="py-20 lg:py-32 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-4">
            Kapitel 4
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ausstattung & Technik
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium-Ausstattung für autarkes Wohnen und höchsten Komfort
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {techFeatures.map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mx-auto mb-6">
                <div className="text-primary-600">
                  {feature.icon}
                </div>
              </div>

              <h3 className="font-serif text-xl font-bold text-gray-900 text-center mb-6">
                {feature.category}
              </h3>

              <div className="space-y-3">
                {feature.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Tech Overview */}
        <div className="bg-gradient-to-r from-primary-50 via-white to-accent-50 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Vollautonome Versorgung
              </h3>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  Das durchdachte Techniksystem ermöglicht völlige Unabhängigkeit von externer Infrastruktur.
                  Ob für ein Wochenende in der Natur oder längere Aufenthalte abseits der Zivilisation –
                  der NO ROOTS FAMILY TRUCK bietet allen Komfort eines modernen Zuhauses.
                </p>
                <p>
                  Alle Systeme sind redundant ausgelegt und garantieren maximale Sicherheit und Zuverlässigkeit.
                  Die intelligent vernetzte Technik lässt sich intuitiv bedienen und überwacht sich selbst.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-primary-600">4kW</div>
                  <div className="text-sm text-gray-600">Fischer Panda</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-accent-600">230L</div>
                  <div className="text-sm text-gray-600">Frischwasser</div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-blue-50 rounded-xl">
                <h4 className="font-semibold text-blue-900 mb-2">Photovoltaik-Option</h4>
                <p className="text-sm text-blue-700">Solaranlage leicht nachrüstbar für noch mehr Autarkie</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Autark & Nachhaltig</h4>
                    <p className="text-sm text-gray-600">Unabhängige Versorgung für Wochen</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Smart Control</h4>
                    <p className="text-sm text-gray-600">Intelligente Steuerung aller Systeme</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Maximale Sicherheit</h4>
                    <p className="text-sm text-gray-600">Umfassende Sicherheitssysteme</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
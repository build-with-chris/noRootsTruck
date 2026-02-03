'use client'

export default function ContactSection() {

  return (
    <section id="contact" className="py-20 lg:py-32 pb-24 lg:pb-32 bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-primary-300 uppercase tracking-wider mb-4">
            Kapitel 7
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Preis & Kontakt
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Vereinbaren Sie eine Besichtigung und erleben Sie den NO ROOTS FAMILY TRUCK selbst
          </p>
        </div>

        {/* Price Section */}
        <div className="bg-gradient-to-r from-primary-800/50 to-accent-800/50 rounded-3xl p-8 lg:p-12 mb-16 text-center border border-primary-700/50">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-serif text-3xl lg:text-4xl font-bold mb-8">
              Investition in Freiheit
            </h3>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary-300 mb-2">280.000 €</div>
                <div className="text-lg text-gray-300">Festpreis</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-accent-300 mb-2">44 m²</div>
                <div className="text-lg text-gray-300">Wohnfläche</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary-300 mb-2">1980/84</div>
                <div className="text-lg text-gray-300">Truck/Trailer</div>
              </div>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 mb-8">
              <h4 className="font-serif text-xl font-bold mb-4">Im Preis enthalten:</h4>
              <div className="grid sm:grid-cols-2 gap-3 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  <span>Komplette Möblierung</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  <span>Open-Air-Kino System</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  <span>Gesamte Technik</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  <span>Vollständige Dokumentation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  <span>Oldtimer-Wertgutachten</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  <span>Einweisung & Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl lg:text-3xl font-bold mb-6">
              Jetzt Kontakt aufnehmen
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              Haben Sie Fragen oder möchten Sie eine Besichtigung vereinbaren? Schreiben Sie uns einfach eine E-Mail.
            </p>
            
            <a
              href="mailto:info@werktraum.de?subject=Anfrage%20NO%20ROOTS%20FAMILY%20TRUCK&body=Sehr%20geehrte%20Damen%20und%20Herren%2C%0D%0A%0D%0AIch%20interessiere%20mich%20f%C3%BCr%20den%20NO%20ROOTS%20FAMILY%20TRUCK%20und%20m%C3%B6chte%20gerne%20eine%20Besichtigung%20vereinbaren.%0D%0A%0D%0AMit%20freundlichen%20Gr%C3%BC%C3%9Fen"
              className="group inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl space-x-3"
            >
              <svg className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>E-Mail senden</span>
            </a>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-6">
                Kontaktinformationen
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Telefon</h4>
                    <p className="text-gray-300">Auf Anfrage</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">E-Mail</h4>
                    <a href="mailto:info@werktraum.de" className="text-gray-300 hover:text-primary-300 transition-colors">
                      info@werktraum.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Standort</h4>
                    <p className="text-gray-300">Deutschland<br />Flexible Besichtigung</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-2xl p-6">
              <h4 className="font-serif text-lg font-bold mb-4">Besichtigungshinweise</h4>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                  <span>Besichtigung nach Terminvereinbarung</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                  <span>Probefahrt für ernsthafte Interessenten</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                  <span>Komplette Funktionsvorführung</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                  <span>Finanzierungsmöglichkeiten besprechen</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
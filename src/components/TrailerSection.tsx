'use client'

import Image from 'next/image'

export default function TrailerSection() {
  const roomData = [
    { name: 'Küche', size: '8,5 m²', description: 'Ahorn-Arbeitsplatte, große Eckbank mit Stauraum' },
    { name: 'Esszimmer', size: '9,9 m²', description: 'Esstisch 2,2 × 1,3 m (umklappbar zur Liegefläche)' },
    { name: 'Wohnzimmer', size: '8,5 m²', description: 'Schlafcouch, Schränke, Schiebetür' },
    { name: 'Badezimmer', size: '2,2 m²', description: 'Dusche, antikes Holzgärkorb-Waschbecken, Natursteinboden' },
    { name: 'Schlafzimmer (oben)', size: '7,7 m²', description: 'Bambus-Design, Federkernmatratzen' },
    { name: 'Chill-/Leseraum (oben)', size: '6,6 m²', description: 'Wandposter, Spachteltechnik, Regal' },
  ]

  const materials = [
    { name: 'Birke', usage: 'Hinterlüftete Verkleidung, Möbel', icon: '🌳' },
    { name: 'Eukalyptus', usage: 'Böden und Akzente', icon: '🌿' },
    { name: 'Fichte (200 Jahre alt)', usage: 'Historische Holzelemente', icon: '🪵' },
    { name: 'Naturwachs', usage: 'Oberflächenbehandlung', icon: '✨' },
  ]

  return (
    <section className="py-20 lg:py-32 elegant-gradient">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4">
            Kapitel 3
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Wohntrailer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Spier 1984 Aluaufbau – Nachhaltig umgebaut 2017-2020 mit 200 Jahre altem Holz
          </p>
        </div>

        {/* Grundriss Visualization */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 mb-16">
          <h3 className="font-serif text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">
            Grundriss & Raumaufteilung
          </h3>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              {/* Simplified Floor Plan Visualization */}
              <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                <div className="grid grid-cols-10 gap-2 h-80">
                  {/* Row 1 - Upper Level + Bathroom */}
                  {/* Schlafzimmer 7,7m² */}
                  <div className="col-span-4 bg-primary-100 rounded-lg p-3 flex items-center justify-center text-center">
                    <div>
                      <div className="font-semibold text-primary-800 text-sm">Schlafzimmer (oben)</div>
                      <div className="text-xs text-primary-600">7,7 m²</div>
                    </div>
                  </div>
                  {/* Chill-/Leseraum 6,6m² */}
                  <div className="col-span-3 bg-accent-100 rounded-lg p-3 flex items-center justify-center text-center">
                    <div>
                      <div className="font-semibold text-accent-800 text-sm">Chill-/Leseraum (oben)</div>
                      <div className="text-xs text-accent-600">6,6 m²</div>
                    </div>
                  </div>
                  {/* Badezimmer 2,2m² - kleinster Raum */}
                  <div className="col-span-3 bg-orange-100 rounded-lg p-3 flex items-center justify-center text-center">
                    <div>
                      <div className="font-semibold text-orange-800 text-sm">Badezimmer</div>
                      <div className="text-xs text-orange-600">2,2 m²</div>
                    </div>
                  </div>

                  {/* Row 2 - Main Level */}
                  {/* Esszimmer 9,9m² - größter Raum */}
                  <div className="col-span-5 bg-green-100 rounded-lg p-3 flex items-center justify-center text-center">
                    <div>
                      <div className="font-semibold text-green-800 text-sm">Esszimmer</div>
                      <div className="text-xs text-green-600">9,9 m²</div>
                      <div className="text-xs text-green-500 italic">größter Raum</div>
                    </div>
                  </div>
                  {/* Küche 8,5m² */}
                  <div className="col-span-3 bg-blue-100 rounded-lg p-3 flex items-center justify-center text-center">
                    <div>
                      <div className="font-semibold text-blue-800 text-sm">Küche</div>
                      <div className="text-xs text-blue-600">8,5 m²</div>
                    </div>
                  </div>
                  {/* Spacer */}
                  <div className="col-span-2"></div>

                  {/* Row 3 */}
                  {/* Wohnzimmer 8,5m² */}
                  <div className="col-span-3 bg-purple-100 rounded-lg p-3 flex items-center justify-center text-center">
                    <div>
                      <div className="font-semibold text-purple-800 text-sm">Wohnzimmer</div>
                      <div className="text-xs text-purple-600">8,5 m²</div>
                    </div>
                  </div>
                  {/* Spacer */}
                  <div className="col-span-7"></div>
                </div>
                <div className="text-center mt-4 space-y-1">
                  <div className="text-sm font-semibold text-gray-800">Gesamtfläche: 44 m²</div>
                  <div className="text-xs text-gray-600">Raumhöhe: 2,0–2,9 m</div>
                  <div className="text-xs text-gray-600">Schlafplätze: 8–12 Personen</div>
                  <div className="text-xs text-gray-600">11 große Lichtöffnungen</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="font-serif text-xl font-bold text-gray-900">Raumdetails</h4>
              {roomData.map((room, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex justify-between items-start mb-3">
                    <h5 className="font-semibold text-lg text-gray-900">{room.name}</h5>
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                      {room.size}
                    </span>
                  </div>
                  <p className="text-gray-600">{room.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Materials Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
              Hochwertige Materialien
            </h3>
            <div className="space-y-6">
              {materials.map((material, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md">
                  <div className="text-3xl">{material.icon}</div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900">{material.name}</h4>
                    <p className="text-gray-600">{material.usage}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl">
              <h4 className="font-serif text-lg font-bold text-gray-900 mb-3">
                Atmosphäre & Ambiente
              </h4>
              <p className="text-gray-700">
                Komplettumbau 2017–2020 mit nachhaltigen Materialien: Armaflex-Dämmung,
                hinterlüftete Birkenholzverkleidung. Verwendung von Birke, Eukalyptus und
                200 Jahre alter Fichte. Holz mit Naturwachs behandelt – keine Kunststoffe.
                11 große Fenster sorgen für optimale Lichtverhältnisse.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <Image
                src="/images/Funiture2.jpg"
                alt="Wohnbereich mit hochwertigen Materialien"
                width={600}
                height={300}
                className="rounded-2xl shadow-xl object-cover w-full h-72"
              />
              <div className="absolute bottom-4 left-4 glass-effect rounded-lg px-4 py-2">
                <span className="text-white font-semibold">Wohnbereich</span>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/Funiture3.jpg"
                alt="Küche mit Ahorn-Arbeitsplatte"
                width={600}
                height={300}
                className="rounded-2xl shadow-xl object-cover w-full h-72"
              />
              <div className="absolute bottom-4 left-4 glass-effect rounded-lg px-4 py-2">
                <span className="text-white font-semibold">Küche & Esszimmer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
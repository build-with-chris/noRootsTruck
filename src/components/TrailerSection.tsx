'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function TrailerSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    { src: '/images/Gallery/20200806_181933.webp', alt: 'Trailer Innenansicht 1' },
    { src: '/images/Gallery/20200806_181938.webp', alt: 'Trailer Innenansicht 2' },
    { src: '/images/Gallery/20200806_182016.webp', alt: 'Trailer Innenansicht 3' },
    { src: '/images/Gallery/20200806_182021.webp', alt: 'Trailer Innenansicht 4' },
    { src: '/images/Gallery/20200806_182059.webp', alt: 'Trailer Innenansicht 5' },
    { src: '/images/Gallery/20200806_182134.webp', alt: 'Trailer Innenansicht 6' },
    { src: '/images/Gallery/20201004_161007.webp', alt: 'Trailer Innenansicht 7' },
    { src: '/images/Gallery/20201004_170347.webp', alt: 'Trailer Innenansicht 8' },
  ]

  const roomData = [
    { name: 'Küche', size: '8,5 m²', description: 'Küchenzeile mit Unterschränken, Gläserboard und Holzbackofen' },
    { name: 'Esszimmer', size: '9,9 m²', description: 'Hochklappbarer Tisch für 12 Personen mit großzügiger Eckbank. Raumteiler mit Vorrats- und Technikschrank' },
    { name: 'Wohnzimmer', size: '8,5 m²', description: 'Treppenschrank, Stauraum, Schrank und Hängeschränke. Schlafcouch mit Sitzgruppe und Tischchen, abtrennbar mit Schiebetüre' },
    { name: 'Badezimmer', size: '2,2 m²', description: 'Dusche mit Glaskabine, Holzwaschbecken mit Unterschrank, Armaturen aus Messing antik, Fensterspiegel mit Utensilien-Halterungen, Flusskiesel-Boden, Strand-Poster, Schiebetüre, Chemietoilette' },
    { name: 'Schlafzimmer (oben)', size: '7,7 m²', description: 'Echter Bambus-Deko, Design-Nachttischbeleuchtung, Bett aus Fichte-Altholz, Taschenfederkernmatratzen' },
    { name: 'Chill-/Leseraum (oben)', size: '6,6 m²', description: 'Offenes Einbauregal, Design-Leseleuchten, klappbarer Stauraumschrank, schwarz-weiß Wandposter, handgefertigte Dekokissen, auberginenfarbiger Fichtenboden' },
  ]

  const materials = [
    { name: 'Eukalyptusholz-Decke', usage: 'Hinterlüftete Lamellendecke aus Eukalyptusholz', icon: '🌿' },
    { name: 'Birke Vorsatzwände', usage: 'Hinterlüftete Vorsatzwände aus Birke mit Struktur- und Design-Tapeten im Retro-Look', icon: '🌳' },
    { name: 'Fichte (200 Jahre alt)', usage: '200 Jahre alter antiker Fichtendielenboden, gebürstet und gewachst', icon: '🪵' },
    { name: 'Schrankfronten', usage: 'Birke mit individuell gestalteter Oberfläche mit antiker Risslack-Struktur. Beschläge in Messing mit drehbarer Einrastfunktion', icon: '✨' },
  ]

  return (
    <section id="trailer" className="py-20 lg:py-32 elegant-gradient">
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

          {/* Video Section */}
          <div className="mb-16 bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-8 lg:p-12 border border-primary-200">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="font-serif text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  Erleben Sie den NO ROOTS FAMILY TRUCK in Aktion
                </h4>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Sehen Sie sich dieses Video an, während Sie die Raumaufteilung und Grundriss studieren. 
                  Lassen Sie sich von der Qualität und den Möglichkeiten überzeugen.
                </p>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>Professionelle Ausstattung und Handwerkskunst</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>44 m² intelligente Raumaufteilung</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>Einzigartiges mobiles Zuhause mit Event-Technik</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
                  <video
                    className="w-full h-auto"
                    controls
                    playsInline
                    preload="metadata"
                    poster="/images/Hero.jpg"
                  >
                    <source src="/images/Family-Truck-Trailer-small.mp4" type="video/mp4" />
                    Ihr Browser unterstützt das Video-Tag nicht.
                  </video>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Floor Plan */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
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

          {/* Mobile Floor Plan - Larger Boxes */}
          <div className="lg:hidden">
            <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
              <div className="space-y-6">
                {/* Upper Level */}
                <div className="border-b border-gray-300 pb-4">
                  <div className="text-sm font-semibold text-gray-700 mb-3 text-center">Obere Ebene</div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-primary-100 rounded-lg p-4 text-center">
                      <div className="font-semibold text-primary-800">Schlafzimmer</div>
                      <div className="text-sm text-primary-600">7,7 m²</div>
                    </div>
                    <div className="bg-accent-100 rounded-lg p-4 text-center">
                      <div className="font-semibold text-accent-800">Leseraum</div>
                      <div className="text-sm text-accent-600">6,6 m²</div>
                    </div>
                  </div>
                </div>

                {/* Main Level */}
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3 text-center">Hauptebene</div>
                  <div className="space-y-3">
                    {/* Largest room first */}
                    <div className="bg-green-100 rounded-lg p-4 text-center">
                      <div className="font-semibold text-green-800">Esszimmer</div>
                      <div className="text-sm text-green-600">9,9 m²</div>
                      <div className="text-xs text-green-500 italic">größter Raum</div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-blue-100 rounded-lg p-4 text-center">
                        <div className="font-semibold text-blue-800">Küche</div>
                        <div className="text-sm text-blue-600">8,5 m²</div>
                      </div>
                      <div className="bg-purple-100 rounded-lg p-4 text-center">
                        <div className="font-semibold text-purple-800">Wohnzimmer</div>
                        <div className="text-sm text-purple-600">8,5 m²</div>
                      </div>
                    </div>

                    <div className="bg-orange-100 rounded-lg p-4 text-center">
                      <div className="font-semibold text-orange-800">Badezimmer</div>
                      <div className="text-sm text-orange-600">2,2 m²</div>
                      <div className="text-xs text-orange-500 italic">kleinster Raum</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center border-t border-gray-300 pt-4">
                <div className="text-sm font-semibold text-gray-800">44 m² Gesamtwohnfläche</div>
                <div className="text-xs text-gray-600 mt-1">8–12 Schlafplätze • 11 Lichtöffnungen</div>
              </div>
            </div>

            {/* Mobile Room Details */}
            <div className="mt-8 space-y-4">
              <h4 className="font-serif text-xl font-bold text-gray-900 text-center">Raumdetails</h4>
              {roomData.map((room, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-semibold text-gray-900">{room.name}</h5>
                    <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-xs font-medium">
                      {room.size}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{room.description}</p>
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
                Atmosphäre und Ambiente vorwiegend mit natürlichen Materialien: Hinterlüftete Lamellendecke aus Eukalyptusholz,
                hinterlüftete Vorsatzwände aus Birke mit Struktur- und Design-Tapeten im Retro-Look.
                200 Jahre alter antiker Fichtendielenboden, gebürstet und gewachst.
                Schrankfronten aus Birke mit individuell gestalteter Oberfläche mit antiker Risslack-Struktur.
                Beschläge in Messing mit drehbarer Einrastfunktion.
                11 große Fenster sorgen für optimale Lichtverhältnisse und Frischluftzirkulation.
              </p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/Materials.webp"
              alt="Küche mit hochwertigen Materialien - Backsteinwand, Holzarbeitsplatte und Kaminofen"
              width={800}
              height={1200}
              className="rounded-2xl shadow-xl object-contain w-full max-h-[calc(100%-5rem)]"
            />
            <div className="absolute bottom-4 left-4 glass-effect rounded-lg px-4 py-2">
              <span className="text-white font-semibold">Küche & Materialien</span>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Impressionen aus dem Trailer
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Entdecken Sie die liebevoll gestalteten Räume und die einzigartige Atmosphäre unseres Wohntrailers
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white bg-opacity-90 rounded-full p-3">
                      <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <Image
                src={selectedImage}
                alt="Enlarged trailer view"
                width={800}
                height={600}
                className="rounded-lg object-contain max-w-full max-h-full"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
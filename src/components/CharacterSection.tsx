'use client'

import ClickableImage from './ClickableImage'

export default function CharacterSection() {
  const chapterImages = [
    { src: '/images/newImages/20231028_155419.jpg', alt: 'NO ROOTS FAMILY TRUCK Außenansicht' },
    { src: '/images/newImages/Sattelzug 04.jpg', alt: 'NO ROOTS FAMILY TRUCK Sattelzug' },
    { src: '/images/newImages/DSC07952.jpg', alt: 'NO ROOTS FAMILY TRUCK Detailansicht' },
    { src: '/images/newImages/Grundriss.-2.jpg', alt: 'NO ROOTS FAMILY TRUCK Grundriss' },
  ]

  return (
    <section id="character" className="py-20 lg:py-32 elegant-gradient">
      <div className="container-max section-padding">
        <div className="mb-20">
          <div className="text-center mb-8">
            <div className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4">
              Kapitel 1
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Charakter & Geschichte
            </h2>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-200 to-accent-200 rounded-3xl opacity-20 blur-xl"></div>
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {chapterImages.map((image) => (
                <div key={image.src} className="rounded-2xl overflow-hidden shadow-2xl bg-white">
                  <ClickableImage
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={800}
                    className="object-cover w-full h-[260px] lg:h-[320px]"
                    caption={image.alt}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Video Preview - How the Truck Looks Today */}
        <div className="mt-20 bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-8 lg:p-12 border border-primary-200">
          <h3 className="font-serif text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center lg:mb-12">
            So sieht der NO ROOTS FAMILY TRUCK heute aus
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Video groß links - 2 Spalten */}
            <div className="lg:col-span-2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
                <video
                  className="w-full h-auto"
                  controls
                  playsInline
                  autoPlay
                  muted
                  loop
                  preload="auto"
                  poster="/images/Hero.jpg"
                >
                  <source src="/images/Family-Truck-Trailer-small.mp4" type="video/mp4" />
                  Ihr Browser unterstützt das Video-Tag nicht.
                </video>
              </div>
            </div>

            {/* Text rechts - 1 Spalte */}
            <div className="lg:col-span-1 space-y-6 text-gray-700">
              <div>
                <p className="text-lg leading-relaxed mb-4">
                  Erleben Sie einen ersten Eindruck von diesem außergewöhnlichen Fahrzeug.
                </p>
                <p className="text-lg leading-relaxed">
                  Vom Renntransporter zum luxuriösen mobilen Zuhause – sehen Sie das Ergebnis der liebevollen Transformation.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Luxuriöses mobiles Zuhause auf 44 m²</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Professionelle Ausstattung und Handwerkskunst</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Einzigartiges Event- und Wohnfahrzeug</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
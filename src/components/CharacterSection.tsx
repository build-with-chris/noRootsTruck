'use client'

import Image from 'next/image'
import MobileChapterTransition from './MobileChapterTransition'

export default function CharacterSection() {
  return (
    <section id="character" className="py-20 lg:py-32 elegant-gradient">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4">
              Kapitel 1
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Charakter & Geschichte
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-6">
              <p className="text-xl leading-relaxed">
                Vom Renntransporter zum nachhaltigen Design-Loft – eine einzigartige Transformation,
                die Geschichte atmet und Zukunft verkörpert.
              </p>
              <p>
                Dieser außergewöhnliche Daimler-Benz 1017 S war einst ein treuer Begleiter im Motorsport.
                Heute erstrahlt er als luxuriöses mobiles Zuhause, das höchste Ansprüche an Design,
                Komfort und Nachhaltigkeit erfüllt.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Handarbeit</h3>
                  <p className="text-sm text-gray-600">Jedes Detail in liebevoller Handarbeit gefertigt</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Nachhaltigkeit</h3>
                  <p className="text-sm text-gray-600">Ressourcenschonend und umweltbewusst</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Einzigartigkeit</h3>
                  <p className="text-sm text-gray-600">Ein unverwechselbares Unikat</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-200 to-accent-200 rounded-3xl opacity-20 blur-xl"></div>
              <Image
                src="/images/History1.jpg"
                alt="Motorsport-Vergangenheit - Vom Renntransporter zum Design-Loft"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-2xl object-cover w-full h-96"
              />
            </div>
          </div>
        </div>
      </div>

      <MobileChapterTransition
        currentChapter="Kapitel 1"
        currentTitle="Charakter & Geschichte"
        nextChapter="Kapitel 2"
        nextTitle="Zugmaschine"
        nextId="truck"
      />
    </section>
  )
}
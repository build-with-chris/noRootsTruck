'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Hero.jpg"
          alt="NO ROOTS FAMILY TRUCK - Ein Zuhause auf Rädern"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Desktop Layout */}
      <div className={`hidden lg:block relative z-10 text-center text-white section-padding transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="container-max">
          {/* Überschrift höher positioniert */}
          <div className="pt-20">
            <h1 className="font-serif text-5xl xl:text-7xl font-bold mb-4 text-balance leading-tight">
              Ein Zuhause auf Rädern
            </h1>
            <div className="text-2xl xl:text-3xl font-light mb-8 text-balance">
              Der NO ROOTS FAMILY TRUCK
            </div>
          </div>
        </div>
      </div>

      {/* Content tiefer positioniert - Desktop */}
      <div className={`hidden lg:block relative z-10 text-center text-white section-padding mt-auto pb-32 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="container-max">
          <div className="glass-effect rounded-2xl p-6 sm:p-8 mb-8 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm sm:text-base">
              <div className="text-center">
                <div className="font-semibold text-primary-200">Baujahr</div>
                <div className="text-lg font-bold">1980 / 1984</div>
                <div className="text-xs text-primary-300">Truck / Trailer</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-primary-200">Wohnfläche</div>
                <div className="text-lg font-bold">44 m²</div>
                <div className="text-xs text-primary-300">8-12 Schlafplätze</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-primary-200">Oldtimer</div>
                <div className="text-lg font-bold">H-Zulassung</div>
                <div className="text-xs text-primary-300">Keine Maut</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-primary-200">Preis</div>
                <div className="text-lg font-bold">280.000 €</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl">
              Exposé anfordern
            </button>
            <button className="glass-effect text-white border border-white/30 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-white/20">
              Besichtigung vereinbaren
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Überschrift höher */}
      <div className={`lg:hidden relative z-10 text-center text-white section-padding transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="container-max">
          {/* Überschrift höher positioniert */}
          <div className="pt-16">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6 text-balance leading-tight">
              Ein Zuhause auf Rädern
            </h1>
          </div>
        </div>
      </div>

      {/* Mobile Content tiefer positioniert */}
      <div className={`lg:hidden relative z-10 text-center text-white section-padding mt-auto pb-24 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="container-max">
          <div className="glass-effect rounded-2xl p-6 mb-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="font-light text-primary-200 mb-2">Deine Investition in</div>
              <div className="text-xl font-bold mb-4">maximale Freiheit</div>
              <div className="text-2xl font-bold text-primary-300">280.000 €</div>
            </div>
          </div>

          <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl">
            Mehr erfahren
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70">
        <div className="animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
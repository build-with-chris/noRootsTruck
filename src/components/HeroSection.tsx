'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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

      <div className={`relative z-10 text-center text-white section-padding transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="container-max">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
            Ein Zuhause auf Rädern
          </h1>
          <div className="text-xl sm:text-2xl lg:text-3xl font-light mb-4 text-balance">
            Der NO ROOTS FAMILY TRUCK
          </div>

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
                <div className="text-xs text-primary-300">VB</div>
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
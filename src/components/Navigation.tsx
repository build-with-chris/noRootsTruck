'use client'

import { useState, useEffect, useMemo } from 'react'
import MobileNavigation from './MobileNavigation'

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const sections = useMemo(() => [
    { id: 'hero', label: 'Start', chapter: 'Willkommen' },
    { id: 'character', label: 'Geschichte', chapter: 'Kapitel 1' },
    { id: 'truck', label: 'Zugmaschine', chapter: 'Kapitel 2' },
    { id: 'trailer', label: 'Wohntrailer', chapter: 'Kapitel 3' },
    { id: 'equipment', label: 'Ausstattung', chapter: 'Kapitel 4' },
    { id: 'experience', label: 'Open-Air-Kino', chapter: 'Kapitel 5' },
    { id: 'technical', label: 'Technische Daten', chapter: 'Kapitel 6' },
    { id: 'contact', label: 'Preis & Kontakt', chapter: 'Kapitel 7' }
  ], [])

  useEffect(() => {
    const handleScroll = () => {
      // Show navigation after scrolling past hero
      setIsVisible(window.scrollY > 300)

      // Calculate scroll progress
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollHeight > 0 ? Math.min(100, (window.scrollY / scrollHeight) * 100) : 0
      setScrollProgress(progress)

      // Update active section based on scroll position
      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id)
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Fixed Navigation - Desktop Only */}
      <nav className={`hidden lg:block fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="container-max section-padding">
          <div className="flex items-center justify-between py-4">
            {/* Logo/Brand */}
            <div className="font-serif text-xl font-bold text-gray-900">
              NO ROOTS FAMILY TRUCK
            </div>

            {/* Desktop Navigation */}
            <div className="flex items-center space-x-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === section.id
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <div className="text-xs text-gray-500">{section.chapter}</div>
                  <div>{section.label}</div>
                </button>
              ))}

              {/* Desktop Inspection Button */}
              <button
                onClick={() => scrollToSection('contact')}
                className="ml-4 bg-gradient-to-r from-accent-500 to-primary-600 hover:from-accent-600 hover:to-primary-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Besichtigung</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Progress Indicator */}
      <div className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="h-1 bg-gray-200">
          <div
            className="h-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300"
            style={{
              width: `${scrollProgress}%`
            }}
          />
        </div>
      </div>

      {/* Chapter Navigation Sidebar (Desktop) */}
      <div className={`fixed left-8 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block transition-all duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="space-y-3">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`group flex items-center space-x-3 transition-all duration-200 ${
                activeSection === section.id ? 'scale-110' : 'hover:scale-105'
              }`}
            >
              <div className={`w-3 h-3 rounded-full transition-all duration-200 ${
                activeSection === section.id
                  ? 'bg-primary-500 shadow-lg shadow-primary-500/50'
                  : 'bg-gray-300 group-hover:bg-gray-400'
              }`} />
              <div className={`bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg transition-all duration-200 ${
                activeSection === section.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}>
                <div className="text-xs text-gray-500">{section.chapter}</div>
                <div className="text-sm font-medium text-gray-900">{section.label}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNavigation isVisible={isVisible} />
    </>
  )
}
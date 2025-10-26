'use client'

import { useState } from 'react'

interface MobileNavigationProps {
  isVisible: boolean
}

export default function MobileNavigation({ isVisible }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const sections = [
    { id: 'hero', label: 'Start', chapter: 'Willkommen' },
    { id: 'character', label: 'Geschichte', chapter: 'Kapitel 1' },
    { id: 'truck', label: 'Zugmaschine', chapter: 'Kapitel 2' },
    { id: 'trailer', label: 'Wohntrailer', chapter: 'Kapitel 3' },
    { id: 'equipment', label: 'Ausstattung', chapter: 'Kapitel 4' },
    { id: 'experience', label: 'Open-Air-Kino', chapter: 'Kapitel 5' },
    { id: 'technical', label: 'Technische Daten', chapter: 'Kapitel 6' },
    { id: 'contact', label: 'Preis & Kontakt', chapter: 'Kapitel 7' }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Mobile Menu Button - Right Side */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`lg:hidden fixed bottom-8 right-8 z-50 bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <svg className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Chapter Menu - Similar to Desktop */}
      <div className={`lg:hidden fixed bottom-24 right-8 z-50 bg-white rounded-2xl shadow-2xl border border-gray-200 transition-all duration-300 transform origin-bottom-right ${
        isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
      }`}>
        <div className="p-4 w-64">
          <div className="text-sm font-semibold text-gray-500 mb-4 text-center">Navigation</div>
          <div className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 border border-gray-100"
              >
                <div className="text-xs text-gray-500">{section.chapter}</div>
                <div className="font-medium text-gray-900">{section.label}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
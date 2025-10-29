'use client'

import { useState } from 'react'

interface MobileNavigationProps {
  isVisible: boolean
}

export default function MobileNavigation({ isVisible }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showInspectionForm, setShowInspectionForm] = useState(false)

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
      {/* Persistent Inspection Button - Appears after hero on mobile */}
      <button
        onClick={() => setShowInspectionForm(true)}
        className={`lg:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-accent-500 to-primary-600 hover:from-accent-600 hover:to-primary-700 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 font-semibold text-sm flex items-center space-x-2 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span>Besichtigung vereinbaren</span>
      </button>

      {/* Mobile Menu Button - Compact Top Bar */}
      <div className={`lg:hidden fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="flex items-center justify-between px-4 py-3">
          <div className="font-serif text-lg font-bold text-gray-900">
            NO ROOTS TRUCK
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
          >
            <svg className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-30 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Chapter Menu - Full Screen Friendly */}
      <div className={`lg:hidden fixed top-0 left-0 right-0 z-40 bg-white transition-all duration-300 transform ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="pt-16 pb-6 px-4 max-h-screen overflow-y-auto">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Kapitelübersicht</h3>
            <p className="text-sm text-gray-600">Entdecken Sie die Geschichte des NO ROOTS TRUCK</p>
          </div>

          <div className="space-y-3 mb-6">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="w-full text-left p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white hover:from-primary-50 hover:to-accent-50 transition-all duration-200 border border-gray-100 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-500 font-medium">{section.chapter}</div>
                    <div className="font-semibold text-gray-900">{section.label}</div>
                  </div>
                  <div className="text-2xl font-bold text-primary-400">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-4">
            <button
              onClick={() => {
                setIsOpen(false)
                setShowInspectionForm(true)
              }}
              className="w-full bg-gradient-to-r from-accent-500 to-primary-600 hover:from-accent-600 hover:to-primary-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Besichtigung vereinbaren</span>
            </button>
          </div>
        </div>
      </div>

      {/* Inspection Form Modal */}
      {showInspectionForm && (
        <>
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" onClick={() => setShowInspectionForm(false)} />
          <div className="fixed inset-x-4 top-1/2 transform -translate-y-1/2 z-50 bg-white rounded-2xl shadow-2xl max-w-md mx-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Besichtigung vereinbaren</h3>
                <button
                  onClick={() => setShowInspectionForm(false)}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ihr Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Vorname Nachname"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-Mail</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="ihre@email.de"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="+49 123 456789"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Wunschtermin</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nachricht (optional)</label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Besondere Fragen oder Wünsche..."
                  />
                </div>

                <button
                  className="w-full bg-gradient-to-r from-accent-500 to-primary-600 hover:from-accent-600 hover:to-primary-700 text-white py-4 rounded-lg font-semibold transition-all duration-200"
                >
                  Anfrage senden
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
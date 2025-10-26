'use client'

import { useState, useEffect } from 'react'

export default function MobileProgressIndicator() {
  const [currentChapter, setCurrentChapter] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  const chapters = [
    { id: 'hero', title: 'Start', number: 0 },
    { id: 'character', title: 'Geschichte', number: 1 },
    { id: 'truck', title: 'Zugmaschine', number: 2 },
    { id: 'trailer', title: 'Wohntrailer', number: 3 },
    { id: 'equipment', title: 'Ausstattung', number: 4 },
    { id: 'experience', title: 'Open-Air-Kino', number: 5 },
    { id: 'technical', title: 'Technische Daten', number: 6 },
    { id: 'contact', title: 'Preis & Kontakt', number: 7 }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(100, (scrollTop / docHeight) * 100)
      setScrollProgress(progress)

      // Find current chapter based on scroll position
      let current = 0
      for (let i = chapters.length - 1; i >= 0; i--) {
        const element = document.getElementById(chapters[i].id)
        if (element && element.offsetTop <= scrollTop + 200) {
          current = chapters[i].number
          break
        }
      }
      setCurrentChapter(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [chapters])

  return (
    <>
      {/* Fixed Progress Bar at Top */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-semibold text-gray-800">
              {currentChapter === 0 ? 'Willkommen' : `Kapitel ${currentChapter}`}
            </div>
            <div className="text-xs text-gray-600">
              {currentChapter + 1} von {chapters.length}
            </div>
          </div>

          <div className="flex items-center justify-between mb-2">
            <div className="text-xs text-gray-600 font-medium">
              {chapters[currentChapter]?.title}
            </div>
            <div className="text-xs text-gray-500">
              {Math.round(scrollProgress)}%
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div
              className="bg-gradient-to-r from-primary-500 to-accent-500 h-1.5 rounded-full transition-all duration-300"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Chapter Dots Navigation - Dezenter */}
      <div className="lg:hidden fixed right-3 top-1/2 transform -translate-y-1/2 z-30">
        <div className="flex flex-col space-y-3">
          {chapters.map((chapter, index) => (
            <button
              key={chapter.id}
              onClick={() => {
                const element = document.getElementById(chapter.id)
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className={`group relative w-2 h-2 rounded-full transition-all duration-300 ${
                currentChapter === index
                  ? 'bg-primary-400 scale-150 shadow-sm'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {/* Tooltip on hover - nur bei Hover sichtbar */}
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap backdrop-blur-sm">
                {chapter.number === 0 ? chapter.title : `${chapter.number}. ${chapter.title}`}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="lg:hidden h-20" />
    </>
  )
}
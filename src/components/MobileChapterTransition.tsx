'use client'

interface MobileChapterTransitionProps {
  currentChapter: string
  currentTitle: string
  nextChapter: string
  nextTitle: string
  nextId: string
}

export default function MobileChapterTransition({
  currentChapter,
  currentTitle,
  nextChapter,
  nextTitle,
  nextId
}: MobileChapterTransitionProps) {
  const scrollToNext = () => {
    const element = document.getElementById(nextId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="lg:hidden my-8">
      <div className="bg-gradient-to-r from-gray-50 to-primary-50 rounded-xl p-4 mx-4 border border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="text-xs text-gray-500 mb-1">
              {currentChapter} abgeschlossen ✓
            </div>
            <div className="text-sm font-medium text-gray-700 mb-2">
              {currentTitle}
            </div>
            <div className="flex items-center text-xs text-gray-600">
              <span>Als nächstes:</span>
              <span className="ml-1 font-semibold text-primary-600">
                {nextChapter}
              </span>
            </div>
          </div>

          <button
            onClick={scrollToNext}
            className="ml-4 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>

        <div className="mt-3 text-xs text-gray-600 bg-white/50 rounded px-2 py-1">
          Weiter zu: {nextTitle}
        </div>
      </div>
    </div>
  )
}
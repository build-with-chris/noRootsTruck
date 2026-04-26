'use client'

import Image, { type ImageProps } from 'next/image'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface ClickableImageProps extends ImageProps {
  caption?: string
}

export default function ClickableImage({ caption, alt, ...imageProps }: ClickableImageProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const usesFill = imageProps.fill === true

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  return (
    <>
      <button
        type="button"
        className={`group relative block w-full text-left ${usesFill ? 'h-full' : ''}`}
        onClick={() => setIsOpen(true)}
        aria-label={`${alt} groß anzeigen`}
      >
        <Image {...imageProps} alt={alt} />
        <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          Vergrößern
        </span>
      </button>

      {isMounted && isOpen
        ? createPortal(
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 sm:p-6"
              onClick={() => setIsOpen(false)}
              role="dialog"
              aria-modal="true"
              aria-label={`${alt} Vollansicht`}
            >
              <button
                type="button"
                className="absolute right-3 top-3 rounded-full bg-white/20 p-2 text-white backdrop-blur hover:bg-white/30"
                onClick={() => setIsOpen(false)}
                aria-label="Bild schließen"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="max-h-full w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
                <div className="relative mx-auto h-[min(82vh,900px)] w-[min(92vw,1200px)]">
                  <Image
                    src={imageProps.src}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 92vw, 1200px"
                    className="rounded-xl object-contain"
                  />
                </div>
                {caption && (
                  <p className="mt-3 text-center text-sm text-white/90">{caption}</p>
                )}
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  )
}

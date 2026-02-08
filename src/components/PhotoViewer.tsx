import { useEffect } from 'react'

interface PhotoViewerProps {
  open: boolean
  onClose: () => void
  src: string | null
  alt?: string
}

export function PhotoViewer({ open, onClose, src, alt = '' }: PhotoViewerProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (open) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-500 flex items-center justify-center p-4 bg-black/80"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 rounded-full bg-white/90 p-2 text-black hover:bg-white shadow-md"
        aria-label="Close"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
      {src && (
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />
      )}
    </div>
  )
}

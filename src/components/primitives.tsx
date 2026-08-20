import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

const NavLock = createContext<{
  locked: boolean
  setLocked: (value: boolean) => void
}>({ locked: false, setLocked: () => undefined })

export function NavLockProvider({ children }: { children: ReactNode }) {
  const [locked, setLocked] = useState(false)
  return <NavLock.Provider value={{ locked, setLocked }}>{children}</NavLock.Provider>
}

export function useNavLock() {
  return useContext(NavLock)
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-gold">
      {children}
    </p>
  )
}

export function Title({ children }: { children: ReactNode }) {
  return (
    <h1 className="font-display text-[clamp(2.1rem,4.6vw,3.6rem)] leading-[1.05] font-semibold text-cream">
      {children}
    </h1>
  )
}

export function Badge({
  kind,
}: {
  kind: 'dato' | 'analisis' | 'recomendacion'
}) {
  const map = {
    dato: { label: 'Dato', className: 'bg-fa/20 text-leaf border-fa/40' },
    analisis: { label: 'Análisis', className: 'bg-gold/15 text-gold border-gold/35' },
    recomendacion: {
      label: 'Recomendación',
      className: 'bg-cream/10 text-cream border-cream/20',
    },
  }
  const item = map[kind]
  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-0.5 text-[0.65rem] font-semibold tracking-[0.14em] uppercase ${item.className}`}
    >
      {item.label}
    </span>
  )
}

export function PhotoCard({
  src,
  caption,
  className = '',
  onClick,
}: {
  src: string
  caption?: string
  className?: string
  onClick?: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`photo-frame group relative overflow-hidden rounded-xl bg-pine text-left ${className}`}
    >
      <img src={src} alt={caption ?? ''} className="transition duration-500 group-hover:scale-[1.03]" />
      <span className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink/80 via-transparent to-transparent opacity-90" />
      {caption ? (
        <span className="absolute right-3 bottom-3 left-3 text-left text-[0.72rem] leading-snug text-cream/95">
          {caption}
        </span>
      ) : null}
    </button>
  )
}

export function Lightbox({
  photos,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  photos: { src: string; caption: string }[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  const photo = photos[index]
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') {
        e.stopPropagation()
        onPrev()
      }
      if (e.key === 'ArrowRight') {
        e.stopPropagation()
        onNext()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, onNext, onPrev])

  if (!photo) return null
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/92 px-6 py-10"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-full max-w-6xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.src}
          alt={photo.caption}
          className="max-h-[78vh] max-w-[92vw] rounded-lg object-contain"
        />
        <p className="mt-4 max-w-3xl text-center text-sm text-cream/85">{photo.caption}</p>
        <p className="mt-1 text-xs text-mute">
          {index + 1} / {photos.length} · clic fuera para cerrar
        </p>
        <button
          type="button"
          onClick={onPrev}
          className="absolute top-1/2 left-[-3.2rem] hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream/20 bg-pine/80 text-cream lg:flex"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={onNext}
          className="absolute top-1/2 right-[-3.2rem] hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream/20 bg-pine/80 text-cream lg:flex"
        >
          ›
        </button>
      </div>
    </div>
  )
}

export function useLightbox(count: number) {
  const [index, setIndex] = useState<number | null>(null)
  const { setLocked } = useNavLock()
  useEffect(() => {
    setLocked(index !== null)
    return () => setLocked(false)
  }, [index, setLocked])
  const open = (i: number) => setIndex(i)
  const close = () => setIndex(null)
  const prev = () => {
    if (index === null) return
    setIndex((index + count - 1) % count)
  }
  const next = () => {
    if (index === null) return
    setIndex((index + 1) % count)
  }
  return { index, open, close, prev, next }
}

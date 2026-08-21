import { useRef, useState } from 'react'
import { Pause, Play, Volume2, VolumeX } from 'lucide-react'
import { ACTIVITIES, AGENDA, META, asset } from '../data/content'
import { Kicker, Lightbox, PhotoCard, Title, useLightbox } from './primitives'

type GoTo = (index: number) => void

export function CoverSlide() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <img
        src={asset('photos/5/01.jpg')}
        alt="Equipo Farmacias del Ahorro en zona Tela"
        className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
      />
      <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/80 to-ink/30" />
      <div className="absolute inset-0 bg-linear-to-t from-ink/90 via-transparent to-ink/25" />
      <div className="slide-safe relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-center gap-3">
          <img src={asset('logo-fa.png')} alt="Farmacias del Ahorro" className="h-12 w-12 rounded-md" />
          <div>
            <p className="text-sm font-medium tracking-[0.22em] text-leaf uppercase">
              {META.pharmacy}
            </p>
            <p className="text-xs text-mute">
              {META.zone} · {META.stores.join(' y ')}
            </p>
          </div>
        </div>
        <div className="max-w-3xl">
          <p className="text-[0.78rem] font-medium tracking-[0.32em] text-gold uppercase">
            Presentación ejecutiva
          </p>
          <h1 className="font-display mt-3 text-[clamp(3.2rem,7vw,6.1rem)] leading-[0.92] font-semibold">
            Informe de
            <br />
            actividades
          </h1>
          <p className="font-display mt-4 text-4xl text-leaf italic">Julio 2026</p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80">
            Cinco actividades en sucursal y comunidad para acercar Farmacias del Ahorro a las familias de Tela.
          </p>
        </div>
        <p className="text-xs tracking-[0.18em] text-mute uppercase">
          FA {META.stores.join(' · ')} · Tela, Honduras
        </p>
      </div>
    </div>
  )
}

export function AgendaSlide({ goTo }: { goTo: GoTo }) {
  return (
    <div className="slide-safe flex h-full flex-col">
      <Kicker>Julio 2026</Kicker>
      <Title>Agenda</Title>
      <p className="mt-3 max-w-2xl text-cream/70">
        Un recorrido por las actividades del mes. Pulse cualquier bloque para saltar.
      </p>
      <div className="mt-8 grid flex-1 grid-cols-2 gap-4 lg:grid-cols-3">
        {AGENDA.map((item, i) => (
          <button
            key={item.label}
            type="button"
            onClick={() => goTo(item.index)}
            className="group flex flex-col justify-between rounded-2xl border border-cream/10 bg-pine/70 p-6 text-left transition hover:border-leaf/50 hover:bg-forest"
          >
            <span className="font-display text-4xl text-gold/80">0{i + 1}</span>
            <span className="mt-8 text-xl font-medium text-cream group-hover:text-leaf">
              {item.label}
            </span>
          </button>
        ))}
      </div>
      <p className="mt-6 text-xs text-mute">
        Teclado: ← → espacio · F pantalla completa · M menú
      </p>
    </div>
  )
}

export function SummarySlide({ goTo }: { goTo: GoTo }) {
  return (
    <div className="slide-safe flex h-full flex-col">
      <Kicker>Resumen ejecutivo</Kicker>
      <Title>Cinco actividades, un mes de presencia</Title>
      <p className="mt-3 max-w-2xl text-cream/70">
        Sucursal y comunidad: degustación, café, sorteo y volanteo en las aldeas de la zona.
      </p>
      <div className="mt-6 grid flex-1 grid-cols-1 gap-4 lg:grid-cols-5">
        {ACTIVITIES.map((activity) => (
          <button
            key={activity.id}
            type="button"
            onClick={() => goTo(activity.slideIndex)}
            className="flex flex-col rounded-2xl border border-cream/10 bg-forest/80 p-5 text-left transition hover:border-leaf/40"
          >
            <p className="text-[0.65rem] tracking-[0.18em] text-gold uppercase">{activity.kicker}</p>
            <h2 className="font-display mt-3 text-2xl leading-tight">{activity.title}</h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-cream/70">{activity.subtitle}</p>
            <p className="mt-4 text-sm text-leaf">Ver actividad →</p>
          </button>
        ))}
      </div>
    </div>
  )
}

export function DegustacionSlide() {
  const activity = ACTIVITIES[0]
  const box = useLightbox(activity.photos.length)
  return (
    <div className="slide-safe flex h-full flex-col">
      <Kicker>{activity.kicker}</Kicker>
      <Title>{activity.title}</Title>
      <p className="mt-2 text-lg text-gold/90">{activity.subtitle}</p>
      <p className="mt-3 max-w-3xl text-cream/75">{activity.description}</p>
      <div className="mt-5 grid min-h-0 flex-1 grid-cols-3 gap-2">
        {activity.photos.map((photo, i) => (
          <PhotoCard
            key={photo.src}
            src={photo.src}
            caption={photo.caption}
            onClick={() => box.open(i)}
          />
        ))}
      </div>
      {box.index !== null ? (
        <Lightbox
          photos={[...activity.photos]}
          index={box.index}
          onClose={box.close}
          onPrev={box.prev}
          onNext={box.next}
        />
      ) : null}
    </div>
  )
}

export function TerencioStorySlide({ goTo }: { goTo: GoTo }) {
  const activity = ACTIVITIES[1]
  const featured = activity.photos.filter((_, i) => [3, 0, 4, 12].includes(i))
  return (
    <div className="grid h-full grid-cols-1 lg:grid-cols-2">
      <div className="relative hidden overflow-hidden lg:block">
        <img src={activity.photos[3]?.src} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-r from-transparent to-ink/35" />
      </div>
      <div className="slide-safe flex flex-col justify-center">
        <Kicker>{activity.kicker}</Kicker>
        <Title>{activity.title}</Title>
        <p className="mt-2 text-lg text-gold/90">{activity.subtitle}</p>
        <p className="mt-5 text-lg leading-relaxed text-cream/75">{activity.description}</p>
        <div className="mt-8 grid grid-cols-2 gap-2">
          {featured.map((photo) => (
            <div key={photo.src} className="photo-frame h-28 overflow-hidden rounded-xl">
              <img src={photo.src} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => goTo(5)}
          className="mt-6 self-start rounded-full border border-leaf/40 px-5 py-2 text-sm text-leaf hover:bg-fa/20"
        >
          Ver galería
        </button>
      </div>
    </div>
  )
}

export function TerencioGallerySlide() {
  const photos = [...ACTIVITIES[1].photos]
  const box = useLightbox(photos.length)
  return (
    <div className="slide-safe flex h-full flex-col">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <Kicker>Actividad 02</Kicker>
          <h2 className="font-display text-4xl">Terencio Sierra e Hilandcreek</h2>
        </div>
        <p className="text-sm text-mute">Clic para ampliar</p>
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-5 gap-2">
        {photos.map((photo, i) => (
          <PhotoCard
            key={photo.src}
            src={photo.src}
            caption={i < 5 ? photo.caption : undefined}
            onClick={() => box.open(i)}
          />
        ))}
      </div>
      {box.index !== null ? (
        <Lightbox
          photos={photos}
          index={box.index}
          onClose={box.close}
          onPrev={box.prev}
          onNext={box.next}
        />
      ) : null}
    </div>
  )
}

export function SorteoSlide() {
  const activity = ACTIVITIES[2]
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const box = useLightbox(activity.photos.length)

  const toggle = () => {
    const el = ref.current
    if (!el) return
    if (el.paused) void el.play()
    else el.pause()
  }

  return (
    <div className="slide-safe grid h-full grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="flex min-h-0 flex-col">
        <Kicker>{activity.kicker}</Kicker>
        <Title>{activity.title}</Title>
        <p className="mt-2 text-gold/90">{activity.subtitle}</p>
        <p className="mt-3 text-cream/75">{activity.description}</p>
        <div className="relative mt-5 min-h-0 flex-1 overflow-hidden rounded-2xl bg-pine">
          <video
            ref={ref}
            src={activity.video}
            poster={activity.photos[0]?.src}
            className="h-full w-full bg-ink object-contain"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            playsInline
          />
          <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between">
            <button
              type="button"
              onClick={toggle}
              className="flex items-center gap-2 rounded-full bg-fa px-5 py-2.5 text-sm font-medium text-white"
            >
              {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              {playing ? 'Pausar' : 'Reproducir'}
            </button>
            <button
              type="button"
              onClick={() => {
                const el = ref.current
                if (!el) return
                el.muted = !el.muted
                setMuted(el.muted)
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-ink/70"
            >
              {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>
      <div className="grid min-h-0 grid-rows-3 gap-3">
        {activity.photos.map((photo, i) => (
          <PhotoCard
            key={photo.src}
            src={photo.src}
            caption={photo.caption}
            onClick={() => box.open(i)}
          />
        ))}
      </div>
      {box.index !== null ? (
        <Lightbox
          photos={[...activity.photos]}
          index={box.index}
          onClose={box.close}
          onPrev={box.prev}
          onNext={box.next}
        />
      ) : null}
    </div>
  )
}

export function GuanoSlide() {
  const activity = ACTIVITIES[3]
  const box = useLightbox(activity.photos.length)
  return (
    <div className="slide-safe flex h-full flex-col">
      <Kicker>{activity.kicker}</Kicker>
      <Title>{activity.title}</Title>
      <p className="mt-2 text-lg text-gold/90">{activity.subtitle}</p>
      <p className="mt-3 max-w-3xl text-cream/75">{activity.description}</p>
      <div className="mt-5 grid min-h-0 flex-1 grid-cols-3 grid-rows-2 gap-2">
        {activity.photos.map((photo, i) => (
          <PhotoCard
            key={photo.src}
            src={photo.src}
            caption={photo.caption}
            onClick={() => box.open(i)}
          />
        ))}
      </div>
      {box.index !== null ? (
        <Lightbox
          photos={[...activity.photos]}
          index={box.index}
          onClose={box.close}
          onPrev={box.prev}
          onNext={box.next}
        />
      ) : null}
    </div>
  )
}

export function HicaqueSlide() {
  const activity = ACTIVITIES[4]
  const box = useLightbox(activity.photos.length)
  return (
    <div className="slide-safe flex h-full flex-col">
      <Kicker>{activity.kicker}</Kicker>
      <Title>{activity.title}</Title>
      <p className="mt-2 text-lg text-gold/90">{activity.subtitle}</p>
      <p className="mt-3 max-w-3xl text-cream/75">{activity.description}</p>
      <div className="mt-5 grid min-h-0 flex-1 grid-cols-4 grid-rows-2 gap-2">
        {activity.photos.map((photo, i) => (
          <PhotoCard
            key={photo.src}
            src={photo.src}
            caption={photo.caption}
            onClick={() => box.open(i)}
          />
        ))}
      </div>
      {box.index !== null ? (
        <Lightbox
          photos={[...activity.photos]}
          index={box.index}
          onClose={box.close}
          onPrev={box.prev}
          onNext={box.next}
        />
      ) : null}
    </div>
  )
}

export function ClosingSlide({ goTo }: { goTo: GoTo }) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <img
        src={asset('photos/3/01.jpg')}
        alt="Cliente ganadora del sorteo"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/78" />
      <div className="slide-safe relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-center gap-3">
          <img src={asset('logo-fa.png')} alt="" className="h-11 w-11 rounded-md" />
          <p className="tracking-[0.22em] text-leaf uppercase">{META.pharmacy}</p>
        </div>
        <div>
          <p className="text-[0.75rem] tracking-[0.28em] text-gold uppercase">Julio 2026</p>
          <h1 className="font-display mt-3 max-w-4xl text-[clamp(2.4rem,5vw,4.4rem)] leading-[1.05]">
            Zona Tela presente: sucursal, aldeas y comunidad.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-cream/80">
            Degustación Adiuvo, Miércoles de tercera, sorteo de vitaminas y volanteo en Terencio Sierra,
            Hilandcreek, El Guano y Hicaque.
          </p>
          <div className="mt-8 flex gap-3">
            <button
              type="button"
              onClick={() => goTo(0)}
              className="rounded-full bg-fa px-6 py-2.5 text-sm font-medium"
            >
              Volver al inicio
            </button>
            <button
              type="button"
              onClick={() => goTo(1)}
              className="rounded-full border border-cream/25 px-6 py-2.5 text-sm"
            >
              Menú
            </button>
          </div>
        </div>
        <p className="text-xs text-mute">
          {META.zone} · {META.stores.join(' y ')} · {META.website}
        </p>
      </div>
    </div>
  )
}

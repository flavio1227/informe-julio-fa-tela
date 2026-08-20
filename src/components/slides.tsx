import { useRef, useState } from 'react'
import {
  Camera,
  Clapperboard,
  FileSpreadsheet,
  MapPin,
  Pause,
  Play,
  Store,
  Truck,
  Users,
  Volume2,
  VolumeX,
} from 'lucide-react'
import {
  AGENDA,
  COMMUNITY_PHOTOS,
  DELIVERY_PHOTOS,
  EVIDENCE_COUNTS,
  FINDINGS,
  MAY_STRUCTURE,
  META,
  PILLARS,
  RECOMMENDATIONS,
  SOURCES,
  STORE_PHOTOS,
  TEAM_PHOTOS,
  asset,
} from '../data/content'
import { Badge, Kicker, Lightbox, PhotoCard, Title, useLightbox } from './primitives'

type GoTo = (index: number) => void

function EvidenceBar({
  label,
  value,
  max,
  color,
}: {
  label: string
  value: number
  max: number
  color: string
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between text-sm">
        <span className="text-cream/85">{label}</span>
        <span className="kpi-number text-xl text-cream">{value}</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-cream/10">
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${(value / max) * 100}%` }}
        />
      </div>
    </div>
  )
}

export function CoverSlide() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <img
        src={asset('photos/com-03.jpg')}
        alt="Colaboradoras recorriendo comunidad en zona Tela"
        className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
      />
      <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/78 to-ink/25" />
      <div className="absolute inset-0 bg-linear-to-t from-ink/90 via-transparent to-ink/30" />
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
          <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/75">
            Evidencia de trabajo en comunidad, servicio a domicilio y activación en sucursal.
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
      <Kicker>Navegación</Kicker>
      <Title>Agenda</Title>
      <p className="mt-3 max-w-2xl text-cream/70">
        Cada bloque es un frente documentado con fotografías o video reales de julio. Pulse para saltar.
      </p>
      <div className="mt-8 grid flex-1 grid-cols-2 gap-4 lg:grid-cols-4">
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
        Teclado: ← → espacio · F pantalla completa · M menú · Esc cerrar
      </p>
    </div>
  )
}

export function ScopeSlide() {
  return (
    <div className="slide-safe grid h-full grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="flex flex-col">
        <Kicker>Transparencia</Kicker>
        <Title>Qué hay — y qué no hay</Title>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-cream/75">
          La presentación de mayo era un reporte de actividades con fotos y un video. Julio llega
          con la misma lógica: evidencia operativa, no un tablero de ventas.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-cream/10 bg-pine p-5">
            <Camera className="mb-3 h-5 w-5 text-leaf" />
            <p className="text-sm text-mute">Fotografías recibidas</p>
            <p className="kpi-number text-4xl">{SOURCES.photosReceived}</p>
            <p className="mt-2 text-xs text-mute">{SOURCES.photosUnique} únicas · 1 duplicado</p>
          </div>
          <div className="rounded-2xl border border-cream/10 bg-pine p-5">
            <Clapperboard className="mb-3 h-5 w-5 text-leaf" />
            <p className="text-sm text-mute">Video recibido</p>
            <p className="kpi-number text-4xl">1</p>
            <p className="mt-2 text-xs text-mute">MP4 · se reproduce en esta presentación</p>
          </div>
          <div className="col-span-2 rounded-2xl border border-gold/25 bg-gold/10 p-5">
            <FileSpreadsheet className="mb-3 h-5 w-5 text-gold" />
            <p className="text-sm text-gold">Excel de julio</p>
            <p className="kpi-number mt-1 text-3xl">No disponible</p>
            <p className="mt-2 text-sm text-cream/70">
              No se recibió archivo de ventas. No se muestran cifras comerciales inventadas.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center rounded-3xl border border-cream/10 bg-pine/60 p-7">
        <p className="text-[0.7rem] tracking-[0.22em] text-gold uppercase">Referencia de mayo</p>
        <p className="font-display mt-2 text-3xl">10 diapositivas</p>
        <p className="mt-1 text-sm text-mute">{MAY_STRUCTURE.slides[0]?.subtitle}</p>
        <ul className="mt-6 space-y-2.5 text-sm text-cream/80">
          <li>Recetarios y entrega a clínicas</li>
          <li>Día de las Madres · Canal 24 Tele Mar</li>
          <li>Ganadores del sorteo</li>
          <li>Consintiendo a las madres de FA42</li>
        </ul>
        <p className="mt-6 text-xs leading-relaxed text-mute">
          Mayo no tenía gráficas ni KPIs de venta. Una tabla de productos del sorteo aparece como
          imagen; pertenece a mayo y no se reutiliza como dato de julio.
        </p>
      </div>
    </div>
  )
}

export function SummarySlide({ goTo }: { goTo: GoTo }) {
  return (
    <div className="slide-safe flex h-full flex-col">
      <div className="flex items-end justify-between gap-6">
        <div>
          <Kicker>Resumen ejecutivo</Kicker>
          <Title>Julio en tres frentes</Title>
        </div>
        <p className="hidden max-w-sm text-right text-sm text-mute lg:block">
          Conteos derivados de la evidencia fotográfica. No son ventas ni visitas auditadas.
        </p>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {[
          { n: EVIDENCE_COUNTS.fronts, l: 'Frentes de acción' },
          { n: EVIDENCE_COUNTS.uniquePhotos, l: 'Fotos únicas' },
          { n: EVIDENCE_COUNTS.video, l: 'Video' },
          { n: META.stores.length, l: 'Sucursales de zona' },
        ].map((item) => (
          <div key={item.l} className="rounded-2xl border border-cream/10 bg-pine/70 px-5 py-4">
            <p className="kpi-number text-5xl text-leaf">{item.n}</p>
            <p className="mt-1 text-sm text-cream/70">{item.l}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 grid flex-1 grid-cols-1 gap-4 lg:grid-cols-3">
        {PILLARS.map((pillar) => (
          <button
            key={pillar.id}
            type="button"
            onClick={() => goTo(pillar.slideIndex)}
            className="flex flex-col rounded-2xl border border-cream/10 bg-forest/80 p-6 text-left transition hover:border-leaf/40"
          >
            <p className="text-[0.68rem] tracking-[0.2em] text-gold uppercase">{pillar.kicker}</p>
            <h2 className="font-display mt-2 text-3xl">{pillar.title}</h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-cream/70">{pillar.description}</p>
            <p className="mt-4 text-sm text-leaf">{pillar.countLabel} →</p>
          </button>
        ))}
      </div>
    </div>
  )
}

export function CommunityStorySlide({ goTo }: { goTo: GoTo }) {
  return (
    <div className="grid h-full grid-cols-1 lg:grid-cols-2">
      <div className="relative hidden overflow-hidden lg:block">
        <img src={asset('photos/com-01.jpg')} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-r from-transparent to-ink/40" />
      </div>
      <div className="slide-safe flex flex-col justify-center">
        <Kicker>Frente 1</Kicker>
        <Title>La farmacia sale a la comunidad</Title>
        <p className="mt-5 text-lg leading-relaxed text-cream/75">
          El equipo recorrió viviendas, pulperías y caminos vecinales para entregar material
          impreso y conversar con vecinos. Es trabajo de campo, no una campaña de vitrina.
        </p>
        <div className="mt-8 grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-pine p-4">
            <p className="kpi-number text-3xl text-leaf">{EVIDENCE_COUNTS.community}</p>
            <p className="mt-1 text-xs text-mute">Fotos de recorrido</p>
          </div>
          <div className="rounded-xl bg-pine p-4">
            <MapPin className="h-5 w-5 text-gold" />
            <p className="mt-2 text-xs text-mute">Casas, pulperías y vías</p>
          </div>
          <div className="rounded-xl bg-pine p-4">
            <Users className="h-5 w-5 text-gold" />
            <p className="mt-2 text-xs text-mute">Contacto persona a persona</p>
          </div>
        </div>
        <p className="mt-6 text-sm text-mute">
          Análisis: las fotos no nombran colonia ni sucursal de origen. El conteo es de evidencias,
          no de viviendas visitadas.
        </p>
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

const COMMUNITY_MOSAIC = [0, 2, 6, 9, 10]

export function CommunityGallerySlide() {
  const box = useLightbox(COMMUNITY_PHOTOS.length)
  const mosaic = COMMUNITY_MOSAIC.map((i) => ({ photo: COMMUNITY_PHOTOS[i], i }))
  return (
    <div className="slide-safe flex h-full flex-col">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <Kicker>Frente 1 · Evidencia</Kicker>
          <h2 className="font-display text-4xl">Recorrido comunitario</h2>
        </div>
        <p className="text-sm text-mute">
          {COMMUNITY_PHOTOS.length} fotografías · clic abre la galería completa
        </p>
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-4 grid-rows-2 gap-2">
        {mosaic.map(({ photo, i }, pos) =>
          photo ? (
            <PhotoCard
              key={photo.src}
              src={photo.src}
              caption={photo.caption}
              className={pos === 0 ? 'col-span-2 row-span-2' : ''}
              onClick={() => box.open(i)}
            />
          ) : null,
        )}
      </div>
      {box.index !== null ? (
        <Lightbox
          photos={COMMUNITY_PHOTOS}
          index={box.index}
          onClose={box.close}
          onPrev={box.prev}
          onNext={box.next}
        />
      ) : null}
    </div>
  )
}

export function DeliveryStorySlide({ goTo }: { goTo: GoTo }) {
  return (
    <div className="grid h-full grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="slide-safe flex flex-col justify-center">
        <Kicker>Frente 2</Kicker>
        <Title>El domicilio se hace visible</Title>
        <p className="mt-5 text-lg leading-relaxed text-cream/75">
          Se colocó señalética verde de servicio a domicilio en pulperías y un mototaxi. La pieza
          lleva la marca FA y dos teléfonos de pedido.
        </p>
        <div className="mt-8 space-y-3">
          <div className="flex items-center justify-between rounded-xl bg-pine px-5 py-4">
            <span className="text-cream/70">Teléfono visible</span>
            <span className="text-xl font-medium text-leaf">{META.phonesVisibleInJuly.domicilio}</span>
          </div>
          <div className="flex items-center justify-between rounded-xl bg-pine px-5 py-4">
            <span className="text-cream/70">WhatsApp visible</span>
            <span className="text-xl font-medium text-leaf">{META.phonesVisibleInJuly.whatsapp}</span>
          </div>
        </div>
        <p className="mt-5 text-sm text-gold/90">
          Inconsistencia: el recetario de mayo muestra WhatsApp {META.phonesFromMayMaterial.whatsappMay}.
          En julio la pieza muestra {META.phonesVisibleInJuly.whatsapp}. No se corrige: se reporta.
        </p>
        <button
          type="button"
          onClick={() => goTo(7)}
          className="mt-6 self-start rounded-full border border-leaf/40 px-5 py-2 text-sm text-leaf hover:bg-fa/20"
        >
          Ver puntos documentados
        </button>
      </div>
      <div className="relative hidden overflow-hidden lg:block">
        <img src={asset('photos/dom-04.jpg')} alt="" className="h-full w-full object-cover object-top" />
        <div className="absolute inset-0 bg-linear-to-l from-transparent to-ink/50" />
      </div>
    </div>
  )
}

export function DeliveryGallerySlide() {
  const box = useLightbox(DELIVERY_PHOTOS.length)
  return (
    <div className="slide-safe flex h-full flex-col">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <Kicker>Frente 2 · Evidencia</Kicker>
          <h2 className="font-display text-4xl">Señalética de domicilio</h2>
        </div>
        <div className="flex items-center gap-2 text-sm text-mute">
          <Truck className="h-4 w-4" />
          {DELIVERY_PHOTOS.length} puntos fotografiados
        </div>
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-3 grid-rows-2 gap-3">
        {DELIVERY_PHOTOS.map((photo, i) => (
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
          photos={DELIVERY_PHOTOS}
          index={box.index}
          onClose={box.close}
          onPrev={box.prev}
          onNext={box.next}
        />
      ) : null}
    </div>
  )
}

export function StoreStorySlide({ goTo }: { goTo: GoTo }) {
  return (
    <div className="grid h-full grid-cols-1 lg:grid-cols-2">
      <div className="relative hidden overflow-hidden lg:block">
        <img src={asset('photos/suc-01.jpg')} alt="" className="h-full w-full object-cover object-top" />
      </div>
      <div className="slide-safe flex flex-col justify-center">
        <Kicker>Frente 3</Kicker>
        <Title>La sucursal recibe y activa</Title>
        <p className="mt-5 text-lg leading-relaxed text-cream/75">
          En piso de venta se documentó café para clientes, afluencia junto a Medica Hogar y un
          módulo ADIUVO con Colágeno 10, EnQiovit, DermaGuard y premios en exhibición.
        </p>
        <ul className="mt-7 space-y-3 text-cream/80">
          <li className="flex gap-3">
            <Store className="mt-0.5 h-5 w-5 shrink-0 text-leaf" />
            Hospitalidad: café y galleta en el acceso.
          </li>
          <li className="flex gap-3">
            <Store className="mt-0.5 h-5 w-5 shrink-0 text-leaf" />
            Marca visible: ADIUVO y Medica Hogar.
          </li>
          <li className="flex gap-3">
            <Store className="mt-0.5 h-5 w-5 shrink-0 text-leaf" />
            Productos en stand: Colágeno 10, EnQiovit, DermaGuard.
          </li>
        </ul>
        <p className="mt-6 text-sm text-mute">
          Dato: no hay cantidades vendidas ni presupuesto de la activación. Análisis: la pieza
          conecta experiencia de cliente con marca de nutrición/dermocosmética.
        </p>
        <button
          type="button"
          onClick={() => goTo(9)}
          className="mt-6 self-start rounded-full border border-leaf/40 px-5 py-2 text-sm text-leaf hover:bg-fa/20"
        >
          Ver activación
        </button>
      </div>
    </div>
  )
}

export function StoreGallerySlide() {
  const box = useLightbox(STORE_PHOTOS.length)
  return (
    <div className="slide-safe flex h-full flex-col">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <Kicker>Frente 3 · Evidencia</Kicker>
          <h2 className="font-display text-4xl">Activación ADIUVO y piso de venta</h2>
        </div>
        <p className="text-sm text-mute">{STORE_PHOTOS.length} fotografías</p>
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-6 grid-rows-2 gap-3">
        <PhotoCard
          src={STORE_PHOTOS[0].src}
          caption={STORE_PHOTOS[0].caption}
          className="col-span-2 row-span-2"
          onClick={() => box.open(0)}
        />
        <PhotoCard
          src={STORE_PHOTOS[3].src}
          caption={STORE_PHOTOS[3].caption}
          className="col-span-2 row-span-2"
          onClick={() => box.open(3)}
        />
        <PhotoCard
          src={STORE_PHOTOS[1].src}
          caption={STORE_PHOTOS[1].caption}
          className="col-span-2"
          onClick={() => box.open(1)}
        />
        <PhotoCard
          src={STORE_PHOTOS[4].src}
          caption={STORE_PHOTOS[4].caption}
          className="col-span-1"
          onClick={() => box.open(4)}
        />
        <PhotoCard
          src={STORE_PHOTOS[2].src}
          caption={STORE_PHOTOS[2].caption}
          className="col-span-1"
          onClick={() => box.open(2)}
        />
      </div>
      {box.index !== null ? (
        <Lightbox
          photos={STORE_PHOTOS}
          index={box.index}
          onClose={box.close}
          onPrev={box.prev}
          onNext={box.next}
        />
      ) : null}
    </div>
  )
}

export function VideoSlide() {
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)

  const toggle = () => {
    const el = ref.current
    if (!el) return
    if (el.paused) {
      void el.play()
    } else {
      el.pause()
    }
  }

  return (
    <div className="slide-safe grid h-full grid-cols-1 gap-8 lg:grid-cols-[1.35fr_0.65fr]">
      <div className="relative flex min-h-0 items-center">
        <div className="relative w-full overflow-hidden rounded-2xl bg-pine">
          <video
            ref={ref}
            src={asset('video/julio.mp4')}
            poster={asset('photos/eq-02.jpg')}
            className="aspect-video w-full bg-ink object-contain"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            controls={false}
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
      <div className="flex flex-col justify-center">
        <Kicker>Registro en movimiento</Kicker>
        <Title>Video de julio</Title>
        <p className="mt-4 leading-relaxed text-cream/75">
          Video original recibido en la carpeta de evidencia. Se reproduce aquí; no se sustituye
          por una captura fija.
        </p>
        <p className="mt-6 text-sm text-mute">
          Archivo: {SOURCES.video}
        </p>
        <p className="mt-3 text-sm text-mute">
          Dato: el archivo no incluye título ni locación escrita. El poster es una foto del equipo
          del mismo mes, no un fotograma extraído.
        </p>
      </div>
    </div>
  )
}

export function TeamSlide() {
  const box = useLightbox(TEAM_PHOTOS.length)
  return (
    <div className="slide-safe flex h-full flex-col">
      <Kicker>Las personas</Kicker>
      <Title>El equipo en campo</Title>
      <p className="mt-3 max-w-2xl text-cream/70">
        Uniforme FA, gafete y material impreso. En una de las fotos se lee el rótulo FA Autoservicio.
        No hay lista de nombres en los archivos.
      </p>
      <div className="mt-6 grid min-h-0 flex-1 grid-cols-2 gap-4">
        {TEAM_PHOTOS.map((photo, i) => (
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
          photos={TEAM_PHOTOS}
          index={box.index}
          onClose={box.close}
          onPrev={box.prev}
          onNext={box.next}
        />
      ) : null}
    </div>
  )
}

export function FindingsSlide() {
  const max = Math.max(
    EVIDENCE_COUNTS.community,
    EVIDENCE_COUNTS.delivery,
    EVIDENCE_COUNTS.store,
    EVIDENCE_COUNTS.team,
  )
  return (
    <div className="slide-safe grid h-full grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <Kicker>Lectura de la evidencia</Kicker>
        <Title>Hallazgos</Title>
        <p className="mt-3 text-sm text-mute">
          La barra es análisis: distribución de fotografías únicas, no de ventas.
        </p>
        <div className="mt-8 space-y-5">
          <EvidenceBar label="Comunidad" value={EVIDENCE_COUNTS.community} max={max} color="bg-leaf" />
          <EvidenceBar label="Domicilio" value={EVIDENCE_COUNTS.delivery} max={max} color="bg-gold" />
          <EvidenceBar label="Sucursal" value={EVIDENCE_COUNTS.store} max={max} color="bg-fa" />
          <EvidenceBar label="Equipo" value={EVIDENCE_COUNTS.team} max={max} color="bg-sand" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 overflow-auto pr-1">
        {FINDINGS.map((item) => (
          <div key={item.title} className="rounded-2xl border border-cream/10 bg-pine/70 p-4">
            <Badge kind={item.kind} />
            <h3 className="mt-2 text-base font-medium">{item.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-cream/70">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function NextStepsSlide() {
  return (
    <div className="slide-safe flex h-full flex-col">
      <Kicker>Cierre operativo</Kicker>
      <Title>Próximos pasos</Title>
      <p className="mt-3 max-w-2xl text-cream/70">
        Recomendaciones a partir de lo observado. No son órdenes ya acordadas ni metas numéricas.
      </p>
      <div className="mt-8 grid flex-1 grid-cols-1 gap-4 lg:grid-cols-2">
        {RECOMMENDATIONS.map((item, i) => (
          <div key={item.title} className="rounded-2xl border border-cream/10 bg-pine/70 p-6">
            <div className="flex items-start justify-between">
              <Badge kind="recomendacion" />
              <span className="font-display text-3xl text-gold/50">0{i + 1}</span>
            </div>
            <h3 className="font-display mt-4 text-2xl">{item.title}</h3>
            <p className="mt-3 leading-relaxed text-cream/70">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ClosingSlide({ goTo }: { goTo: GoTo }) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <img src={asset('photos/eq-01.jpg')} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-ink/78" />
      <div className="slide-safe relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-center gap-3">
          <img src={asset('logo-fa.png')} alt="" className="h-11 w-11 rounded-md" />
          <p className="tracking-[0.22em] text-leaf uppercase">{META.pharmacy}</p>
        </div>
        <div>
          <p className="text-[0.75rem] tracking-[0.28em] text-gold uppercase">Julio 2026</p>
          <h1 className="font-display mt-3 max-w-4xl text-[clamp(2.4rem,5vw,4.4rem)] leading-[1.05]">
            Campo, domicilio y sucursal: tres maneras de hacerse presente en Tela.
          </h1>
          <p className="mt-5 max-w-xl text-cream/75">
            Cuando exista el Excel de julio, esta presentación puede incorporar ventas. Hasta entonces,
            el resultado que sí está documentado es la ejecución en terreno.
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

export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export type Photo = {
  src: string
  caption: string
}

export type EvidenceKind = 'dato' | 'analisis' | 'recomendacion'

export const META = {
  pharmacy: 'Farmacias del Ahorro',
  zone: 'Zona Tela',
  stores: ['FA42', 'FA59'],
  month: 'Julio',
  year: 2026,
  website: 'www.farmaciasdelahorro.hn',
  phonesVisibleInJuly: {
    domicilio: '2276-4747',
    whatsapp: '3307-3543',
  },
  phonesFromMayMaterial: {
    fa42: '+504 9692-1078',
    fa59: '+504 9683-9699',
    central: '2276-4747',
    whatsappMay: '9439-1717',
  },
}

export const SOURCES = {
  powerpointMayo: 'Actividades Mayo-Zona Tela.pptx',
  excelJulio: null as string | null,
  photosReceived: 33,
  photosUnique: 32,
  duplicateNote:
    'WhatsApp Image 2026-08-20 at 09.07.40 (1).jpeg y 09.07.41 (1).jpeg son el mismo archivo (hash MD5 idéntico). Se usa una sola vez.',
  video: 'WhatsApp Video 2026-08-20 at 09.07.44.mp4',
}

export const MAY_STRUCTURE = {
  slideCount: 10,
  slides: [
    { n: 1, title: 'Actividades Mes de mayo', subtitle: 'Tela Fa42 y Fa59', type: 'Portada + logo FA' },
    { n: 2, title: 'Recetarios', subtitle: null, type: 'Galería fotográfica (4 imágenes)' },
    { n: 3, title: 'Recetarios', subtitle: null, type: 'Galería fotográfica (3 imágenes)' },
    { n: 4, title: 'Entrega de Recetarios', subtitle: null, type: 'Galería fotográfica (3 imágenes)' },
    { n: 5, title: 'Entrega de Recetarios', subtitle: null, type: 'Galería fotográfica (2 imágenes)' },
    { n: 6, title: 'Actividad Día de las Madres', subtitle: 'Canal 24 Tele Mar', type: 'Fotos + tabla de productos del sorteo' },
    { n: 7, title: 'Ganadores del sorteo', subtitle: null, type: 'Galería fotográfica' },
    { n: 8, title: 'Ganadores del Sorteo', subtitle: null, type: 'Galería fotográfica' },
    { n: 9, title: null, subtitle: null, type: 'Video embebido (sorteo Tele Mar)' },
    { n: 10, title: 'Consintiendo a las madres de Fa42', subtitle: null, type: 'Galería fotográfica (4 imágenes)' },
  ],
  charts: 0,
  tablesInXml: 0,
  tableAsImage:
    'Una tabla aparece como imagen en la actividad de Día de las Madres (productos, precios y cantidades del sorteo). Es dato de MAYO, no de julio.',
  kpis: [] as string[],
}

export const COMMUNITY_PHOTOS: Photo[] = [
  { src: asset('photos/com-01.jpg'), caption: 'Entrega de material impreso a vecina en vía pública.' },
  { src: asset('photos/com-02.jpg'), caption: 'Conversación con motociclista en camino vecinal.' },
  { src: asset('photos/com-03.jpg'), caption: 'Recorrido a pie por comunidad de la zona.' },
  { src: asset('photos/com-04.jpg'), caption: 'Visita en pulpería junto a punto de venta de agua.' },
  { src: asset('photos/com-05.jpg'), caption: 'Contacto en reja de vivienda-comercio.' },
  { src: asset('photos/com-06.jpg'), caption: 'Entrega de material a vecino en predio residencial.' },
  { src: asset('photos/com-07.jpg'), caption: 'Entrega de material a motociclista en calle residencial.' },
  { src: asset('photos/com-08.jpg'), caption: 'Visita puerta a puerta en vivienda.' },
  { src: asset('photos/com-09.jpg'), caption: 'Visita en portón de vivienda.' },
  { src: asset('photos/com-10.jpg'), caption: 'Conversación con grupo de vecinos en predio.' },
  { src: asset('photos/com-11.jpg'), caption: 'Visita en corredor de vivienda.' },
  { src: asset('photos/com-12.jpg'), caption: 'Entrega de material a jóvenes en comunidad.' },
  { src: asset('photos/com-13.jpg'), caption: 'Visita en predio con entrega de piezas impresas.' },
  { src: asset('photos/com-14.jpg'), caption: 'Contacto en portón de vivienda-comercio.' },
  { src: asset('photos/com-15.jpg'), caption: 'Entrega de material en portón de vivienda.' },
  { src: asset('photos/com-16.jpg'), caption: 'Visita a pulpería / ventana de comercio local.' },
  { src: asset('photos/com-17.jpg'), caption: 'Entrega de volantes en reja residencial.' },
  { src: asset('photos/com-18.jpg'), caption: 'Acercamiento a vecinos en acera comunitaria.' },
  { src: asset('photos/com-19.jpg'), caption: 'Conversación con vecina en porche.' },
]

export const DELIVERY_PHOTOS: Photo[] = [
  { src: asset('photos/dom-01.jpg'), caption: 'Colocación de pieza “Servicio a Domicilio” en mototaxi. Teléfonos visibles: 2276-4747 y 3307-3543.' },
  { src: asset('photos/dom-02.jpg'), caption: 'Pieza verde de Farmacias del Ahorro colocada en fachada de comercio.' },
  { src: asset('photos/dom-03.jpg'), caption: 'Instalación de señalética de servicio a domicilio en pulpería.' },
  { src: asset('photos/dom-04.jpg'), caption: 'Señalética “Servicio a Domicilio” en ventana de pulpería. Teléfonos: 2276-4747 y 3307-3543.' },
  { src: asset('photos/dom-05.jpg'), caption: 'Registro de pieza instalada en punto de comercio local.' },
  { src: asset('photos/dom-06.jpg'), caption: 'Pieza de servicio a domicilio visible en fachada de pulpería.' },
]

export const STORE_PHOTOS: Photo[] = [
  { src: asset('photos/suc-01.jpg'), caption: 'Atención a clienta en sucursal con café y galleta. Se observa identidad FA y ADIUVO.' },
  { src: asset('photos/suc-02.jpg'), caption: 'Clientes en sucursal. Se observa módulo Medica Hogar y afluencia en piso de venta.' },
  { src: asset('photos/suc-03.jpg'), caption: 'Estación de café para clientes en el acceso de la sucursal.' },
  { src: asset('photos/suc-04.jpg'), caption: 'Módulo ADIUVO: protector solar DermaGuard, Colágeno 10, EnQiovit y premios en exhibición.' },
  { src: asset('photos/suc-05.jpg'), caption: 'Colaboradora junto al módulo ADIUVO sosteniendo Colágeno 10 Hidrolizado.' },
]

export const TEAM_PHOTOS: Photo[] = [
  { src: asset('photos/eq-01.jpg'), caption: 'Equipo en exterior. Se observa rótulo FA Autoservicio.' },
  { src: asset('photos/eq-02.jpg'), caption: 'Equipo en uniforme FA durante recorrido comunitario, con material impreso.' },
]

export const EVIDENCE_COUNTS = {
  community: COMMUNITY_PHOTOS.length,
  delivery: DELIVERY_PHOTOS.length,
  store: STORE_PHOTOS.length,
  team: TEAM_PHOTOS.length,
  uniquePhotos: 32,
  video: 1,
  fronts: 3,
}

export const PILLARS = [
  {
    id: 'comunidad',
    kicker: 'Frente 1',
    title: 'Presencia en comunidad',
    description:
      'Recorridos casa por casa y en comercios de barrio: entrega de material impreso y conversación directa con vecinos.',
    countLabel: `${EVIDENCE_COUNTS.community} evidencias fotográficas`,
    slideIndex: 4,
  },
  {
    id: 'domicilio',
    kicker: 'Frente 2',
    title: 'Servicio a domicilio',
    description:
      'Colocación de señalética verde de Farmacias del Ahorro en pulperías y mototaxi, con teléfonos de pedido.',
    countLabel: `${EVIDENCE_COUNTS.delivery} puntos documentados`,
    slideIndex: 6,
  },
  {
    id: 'sucursal',
    kicker: 'Frente 3',
    title: 'Activación en sucursal',
    description:
      'Experiencia en piso de venta: café para clientes y módulo ADIUVO (Colágeno 10, EnQiovit, DermaGuard).',
    countLabel: `${EVIDENCE_COUNTS.store} evidencias en sucursal`,
    slideIndex: 8,
  },
] as const

export const FINDINGS = [
  {
    kind: 'dato' as EvidenceKind,
    title: 'No hay Excel de julio',
    text: 'En la carpeta entregada no existe un archivo Excel de julio. No hay cifras de ventas, tickets, clientes, cumplimiento ni objetivos.',
  },
  {
    kind: 'dato' as EvidenceKind,
    title: 'La evidencia de julio es operativa',
    text: 'Se recibieron 33 fotografías (32 únicas) y 1 video. El informe de mayo también fue de actividades, no de indicadores comerciales.',
  },
  {
    kind: 'analisis' as EvidenceKind,
    title: 'Tres frentes distintos al de mayo',
    text: 'Mayo se concentró en recetarios, sorteo de Día de las Madres (Canal 24 Tele Mar) y atención a madres en FA42. Julio documenta comunidad, señalética de domicilio y activación ADIUVO en sucursal.',
  },
  {
    kind: 'analisis' as EvidenceKind,
    title: 'El domicilio se empuja en el comercio informal',
    text: 'Las 6 fotos de señalética muestran pulperías, fachadas y un mototaxi — no solo la sucursal. El teléfono 2276-4747 coincide con el material de mayo; el WhatsApp 3307-3543 es distinto al 9439-1717 del recetario de mayo.',
  },
  {
    kind: 'analisis' as EvidenceKind,
    title: 'La sucursal combina hospitalidad y marca ADIUVO',
    text: 'Se observa café para clientes, afluencia en piso de venta, módulo Medica Hogar y exhibición de Colágeno 10, EnQiovit y DermaGuard, con premios en el stand.',
  },
  {
    kind: 'analisis' as EvidenceKind,
    title: 'Equipo visible de al menos cinco personas',
    text: 'En las fotos de equipo aparecen cinco colaboradores con uniforme o identificador FA. No hay padrón ni lista de nombres en los archivos.',
  },
]

export const RECOMMENDATIONS = [
  {
    title: 'Cuantificar cada frente el próximo mes',
    text: 'Registrar casas visitadas, piezas colocadas y clientes atendidos en sucursal. Julio tiene evidencia visual, no un conteo operativo.',
  },
  {
    title: 'Unificar el WhatsApp de domicilio',
    text: 'En mayo el recetario muestra 9439-1717; en julio la señalética muestra 3307-3543. Conviene confirmar cuál debe usarse en zona Tela.',
  },
  {
    title: 'Nombrar colonias y sucursal en cada evidencia',
    text: 'Las fotos no identifican colonia ni si corresponden a FA42 o FA59, salvo el rótulo FA Autoservicio. Eso limita el seguimiento territorial.',
  },
  {
    title: 'Cruzar actividad con ventas cuando exista el Excel',
    text: 'Sin el archivo de julio no es posible afirmar impacto en venta, domicilio o ADIUVO. Si se entrega el Excel, se puede añadir esa capa.',
  },
]

export const AGENDA = [
  { label: 'Resumen', index: 3 },
  { label: 'Comunidad', index: 4 },
  { label: 'Domicilio', index: 6 },
  { label: 'Sucursal', index: 8 },
  { label: 'Video', index: 10 },
  { label: 'Equipo', index: 11 },
  { label: 'Hallazgos', index: 12 },
  { label: 'Siguientes pasos', index: 13 },
]

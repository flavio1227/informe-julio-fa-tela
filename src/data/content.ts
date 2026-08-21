export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export type Photo = {
  src: string
  caption: string
}

const numbered = (folder: string, captions: string[]): Photo[] =>
  captions.map((caption, i) => ({
    src: asset(`photos/${folder}/${String(i + 1).padStart(2, '0')}.jpg`),
    caption,
  }))

export const META = {
  pharmacy: 'Farmacias del Ahorro',
  zone: 'Zona Tela',
  stores: ['FA42', 'FA59'],
  month: 'Julio',
  year: 2026,
  website: 'www.farmaciasdelahorro.hn',
}

export const ACTIVITIES = [
  {
    id: 'degustacion',
    kicker: 'Actividad 01',
    title: 'Degustación de Colágeno Adiuvo',
    subtitle: 'Miércoles de tercera · café para los clientes',
    description:
      'En sucursal recibimos a nuestros clientes con café, galleta y degustación de Colágeno Adiuvo. Una mañana para consentir, especialmente a nuestros clientes de la tercera edad.',
    photos: [
      {
        src: asset('photos/1/afluencia.jpg'),
        caption: 'Excelente afluencia durante la actividad.',
      },
      {
        src: asset('photos/1/cliente.jpg'),
        caption: 'Clientes disfrutando el café en sucursal.',
      },
      {
        src: asset('photos/1/estacion.jpg'),
        caption: 'Estación de café para el Miércoles de tercera.',
      },
    ],
    slideIndex: 3,
  },
  {
    id: 'terencio',
    kicker: 'Actividad 02',
    title: 'Volanteo Terencio Sierra',
    subtitle: 'Hilandcreek',
    description:
      'El equipo salió a la comunidad de Terencio Sierra e Hilandcreek: volanteo casa por casa, pulperías y colocación de señalética de servicio a domicilio.',
    photos: numbered('2', [
      'Señalética de servicio a domicilio en mototaxi.',
      'Presencia de marca en comercio local.',
      'Colocación de pieza de servicio a domicilio.',
      'Recorrido de volanteo en la comunidad.',
      'Servicio a domicilio en pulpería.',
      'Volanteo en pulpería.',
      'Entrega de volantes a vecinos.',
      'Contacto casa por casa.',
      'Entrega de material en la comunidad.',
      'Volanteo en calle residencial.',
      'Visita en vivienda.',
      'Visita puerta a puerta.',
      'Equipo FA en Terencio Sierra e Hilandcreek.',
    ]),
    slideIndex: 4,
  },
  {
    id: 'sorteo',
    kicker: 'Actividad 03',
    title: 'Sorteo por compra de vitaminas',
    subtitle: 'Stand ADIUVO en sucursal',
    description:
      'Promovimos la compra de vitaminas con stand ADIUVO, exhibición de Colágeno 10 y entrega de premios a clientes ganadores.',
    photos: numbered('3', [
      'Entrega de premio del sorteo por compra de vitaminas.',
      'Stand ADIUVO en sucursal.',
      'Degustación y exhibición de Colágeno 10 Adiuvo.',
    ]),
    video: asset('video/sorteo.mp4'),
    slideIndex: 6,
  },
  {
    id: 'guano',
    kicker: 'Actividad 04',
    title: 'Volanteo Aldea El Guano',
    subtitle: 'Presencia en comunidad',
    description:
      'Recorrimos Aldea El Guano para acercar Farmacias del Ahorro a las familias: volantes, conversación directa y servicio a domicilio.',
    photos: numbered('4', [
      'Entrega de volantes en Aldea El Guano.',
      'Conversación con vecinos.',
      'Señalética de servicio a domicilio.',
      'Visita en vivienda.',
      'Entrega de material a la comunidad.',
      'Volanteo en camino vecinal.',
    ]),
    slideIndex: 7,
  },
  {
    id: 'hicaque',
    kicker: 'Actividad 05',
    title: 'Volanteo Aldea Hicaque',
    subtitle: 'Presencia en comunidad',
    description:
      'Cerramos el mes con volanteo en Aldea Hicaque: el equipo en uniforme FA recorrió viviendas y pulperías para llevar la marca hasta la aldea.',
    photos: numbered('5', [
      'Equipo FA en Aldea Hicaque.',
      'Volanteo en la aldea.',
      'Contacto en vivienda.',
      'Entrega de volantes.',
      'Visita a pulpería.',
      'Entrega de material.',
      'Acercamiento a vecinos.',
      'Volanteo en la comunidad.',
    ]),
    slideIndex: 8,
  },
] as const

export const AGENDA = [
  { label: 'Resumen', index: 2 },
  { label: 'Degustación y café', index: 3 },
  { label: 'Terencio Sierra', index: 4 },
  { label: 'Sorteo', index: 6 },
  { label: 'El Guano', index: 7 },
  { label: 'Hicaque', index: 8 },
]

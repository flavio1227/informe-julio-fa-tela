# Informe de Actividades · Julio 2026

Presentación ejecutiva interactiva para **Farmacias del Ahorro · Zona Tela (FA42 y FA59)**.

No es un PowerPoint. Es una aplicación 16:9 para proyectar en reunión, con fotos y video reales de julio.

## Cómo presentarla

En una terminal, dentro de esta carpeta:

```bash
cd presentacion-julio
npm install
npm run dev
```

Se abre en `http://localhost:5173`.

En GitHub Pages (después del despliegue):

https://flavio1227.github.io/informe-julio-fa-tela/

Pantalla completa: tecla **F** o el botón superior derecho.

### Teclado

| Tecla | Acción |
| --- | --- |
| ← → o Espacio | Diapositiva anterior / siguiente |
| Home / End | Portada / cierre |
| F | Pantalla completa |
| M | Menú |
| Esc | Cerrar menú o galería |

## Fuente de los datos

Regla usada: **no se inventó ninguna cifra comercial**.

| Archivo | Uso |
| --- | --- |
| `Actividades Mayo-Zona Tela.pptx` | Estructura narrativa de mayo (10 diapositivas, sin KPIs de venta) |
| 33 fotografías de WhatsApp (32 únicas) | Evidencia de julio |
| `WhatsApp Video 2026-08-20 at 09.07.44.mp4` | Video de julio, embebido |
| Excel de julio | **No se encontró en la carpeta** |

Un duplicado se excluyó: `09.07.40 (1).jpeg` y `09.07.41 (1).jpeg` son el mismo archivo.

Los conteos de la presentación (19 / 6 / 5 / 2 fotos) son **análisis**: clasificación visual de los archivos, no visitas auditadas ni ventas.

## Qué había en mayo (referencia)

1. Portada: Actividades mes de mayo · Tela Fa42 y Fa59  
2–5. Recetarios y entrega de recetarios  
6. Día de las Madres · Canal 24 Tele Mar (incluye tabla de productos del sorteo, **dato de mayo**)  
7–8. Ganadores del sorteo  
9. Video  
10. Consintiendo a las madres de FA42  

Sin gráficas, sin tablas nativas, sin ventas.

## Qué muestra julio

Tres frentes documentados con evidencia:

1. **Comunidad** — recorrido casa por casa y pulperías  
2. **Servicio a domicilio** — señalética en comercios y mototaxi (teléfonos 2276-4747 y 3307-3543)  
3. **Sucursal** — café para clientes y módulo ADIUVO (Colágeno 10, EnQiovit, DermaGuard)

**Inconsistencia reportada, no corregida:** el recetario de mayo muestra WhatsApp 9439-1717; las piezas de julio muestran 3307-3543.

## Estructura de la app

```
presentacion-julio/
  public/
    logo-fa.png          Logo tomado del PowerPoint de mayo
    photos/              32 fotos únicas de julio, con nombres cortos
    video/julio.mp4      Video original
  src/
    data/content.ts      Textos, conteos y metadatos
    components/          Diapositivas y controles
    App.tsx              Navegación, teclado, pantalla completa
```

El mapeo archivo original → nombre en `public/photos` está en el script de copiado y en `src/data/content.ts`.

## Si más adelante llega el Excel

No complete ventas, crecimiento, tickets ni cumplimiento. Cuando exista el archivo, se pueden añadir diapositivas de indicadores **sin sustituir** la evidencia operativa de julio.

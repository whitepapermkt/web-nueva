# 03 — UX/UI · Home de Whitepaper.mx
Agente UX/UI · 5 de noviembre de 2026 · Insumo directo para quien construye HTML/CSS/JS.
Fuentes: BRIEF-WHITEPAPER-HOME.md, user-personas-2026-wp.md, problem-wp.md, growth-marketing-wp-2026.md, markup real de thefp.com (fetch/fp.html).

Convenciones de este documento
- Medidas en px salvo que se indique. Baseline 8 px. Todos los tamaños de texto en rem en el código (1 rem = 16 px).
- `[VERIFICAR]` = dato de producto no confirmado por el equipo; el diseño funciona igual si cambia.
- Tokens que se usan abajo (nómbralos igual en CSS):
  `--paper #faf9f7` · `--ink #141414` · `--ink-2 #3a3a3a` (texto secundario) · `--ink-3 #6b6b6b` (metadatos; 5.06:1, el gris más claro permitido para texto) · `--rule #d6d2cc` (filetes; decorativo, no texto) · `--red #ee4d3a` (filetes, firma, cifras ≥24 px, estados) · `--red-text #c93a28` (único rojo permitido para texto pequeño/botones con texto blanco: 4.84:1 sobre papel, 5.1:1 blanco sobre él).
- Fuentes locales: Instrument Serif (display), Spectral (cuerpo, decks, listas), Inter (kickers, folios, UI, botones).

---

## 1. Objetivos UX y jobs-to-be-done

### 1.1 Objetivos UX del home (en orden de prioridad)
1. **Que en 5 segundos se entienda qué es Whitepaper y qué incluye la suscripción** (texto diario + audio diario + podcasts + video + fin de semana + eventos). Hoy el home de Substack muestra un hero y una lista indistinta de posts; nadie entiende el catálogo.
2. **Que audio y video se vean y se oigan desde el home.** No basta un enlace a "Podcasts": debe haber un botón de play visible arriba del doblez y un reproductor que funcione sin salir de la página.
3. **Que cada producto tenga casa propia y nombre** (modelo Bulwark): una tarjeta por producto con frecuencia, formato y para quién, enlazada a su sección de Substack (`/s/…`, `/podcast`).
4. **Convertir sin engañar.** El home debe fijar expectativas exactas (qué recibes, cuándo, en qué formato, qué NO es) para bajar la cancelación temprana, que el memo de negocio identifica como problema de expectativa/activación.
5. **Sentirse impreso.** Jerarquía de periódico: masthead, folio, kickers, filetes, columnas, capitular. Nada de "tarjetas flotantes con sombra"; todo se separa con filetes, no con cajas.
6. **Servir a Álvaro (70) y a Santiago (25) con la misma página.** Álvaro: texto grande, contraste alto, pocas decisiones, botones evidentes, nada que parpadee. Santiago: velocidad, play inmediato, 1.5x, llegar al contenido sin fricción. Las dos cosas se logran con la misma regla: menos elementos, más grandes, orden predecible.

### 1.2 Tres jobs-to-be-done y su ruta en ≤3 clics

**JTBD A — Visitante nuevo que viene del podcast (Whitepaper 10)**
"Escuché a René y Karla, quiero ver qué más hay y si vale la pena pagar."
- Llega con `?utm_source=podcast` (o desde Spotify/Apple show notes). Ve arriba del doblez: masthead, nota líder y la banda **Escuchar / Ver** con el episodio de hoy de Whitepaper 10 (play inline).
- Ruta ideal (2 clics):
  1. Clic en ▶ del episodio (reproduce sin salir; se abre mini-reproductor persistente).
  2. Mientras escucha baja; en la sección **Qué incluye tu suscripción** entiende el catálogo; clic en **Suscribirse (anual)** → Substack checkout.
- Ruta alternativa (3 clics): tarjeta de producto "Whitepaper Hoy" → `/s/…` o post muestra en Substack → Subscribe.
- Variante de copy cuando `utm_source=podcast`: el kicker del bloque de suscripción cambia a "Si ya escuchas Whitepaper 10, esto es lo que te falta" (ver §5.4).

**JTBD B — Suscriptor gratuito que no sabe qué hay detrás del muro**
"Recibo correos de Whitepaper pero no sé qué me estoy perdiendo."
- Es el visitante más común (135,000 gratuitos vs 14,500 pagados) y el que peor convierte hoy. Su problema es información, no precio.
- Ruta ideal (2 clics):
  1. Desde el home, la sección **Qué incluye tu suscripción** (7 tarjetas de producto con frecuencia/formato) y los **extractos** (una edición real de Whitepaper Hoy abierta como muestra, 60–90 s de audio de muestra, un fragmento de Principales).
  2. **Suscribirse** → Substack.
- Ruta de exploración (3 clics): tarjeta "Principales" → sección en Substack → post (ve el muro de pago a mitad del artículo) → Subscribe. Para que este camino funcione, cada tarjeta enlaza a la sección, no a la home de Substack.

**JTBD C — Suscriptor pagado que quiere llegar rápido al contenido de hoy**
"Son las 7:10 am, quiero leer o escuchar la edición de hoy."
- Ruta ideal (1 clic): en la barra utilitaria, **Edición de hoy** (texto) y **▶ Escuchar hoy** (audio) siempre visibles, incluso con la barra pegada al scroll. El enlace apunta al post más reciente de `/s/whitepaper-hoy` [VERIFICAR slug] y al episodio más reciente de `/s/whitepaper-audio`.
- Si está logueado en Substack, la cookie de Substack hace que al llegar vea el contenido; nuestro sitio estático no puede leer esa sesión, así que **no** mostramos estado "sesión iniciada"; mostramos "Iniciar sesión" siempre, discreto (ver §3.3).
- Nunca le ponemos a este usuario el bloque de precios en la cara: va después del contenido, no antes.

### 1.3 Decisión de arquitectura que afecta todo lo demás
El home es **sitio estático propio** (HTML/CSS/JS) con datos de contenido alimentados por un JSON (`content.json`) que un script genera a partir de los RSS públicos de Substack (`/feed`, `/s/<sección>/feed`, feed de podcast). Si el JSON falla, la página debe renderizar igual con los textos estáticos del HTML (progressive enhancement). Esto permite "episodio de hoy", "edición de hoy" y duraciones reales sin backend.

---

## 2. Wireframe del home

### 2.1 Retícula
- Desktop: contenedor máx. **1240 px**, 12 columnas, gutter 24, márgenes laterales 32 (en ≥1280 el contenedor se centra). Columna = ~81 px.
- Altura del doblez de referencia: **~760 px** visibles (1440×900 con barras de navegador). En 1280×720: ~620 px. Todo lo marcado como "ADD" (above the fold) debe caber en 620.
- Mobile 390: contenedor 390 − 2×20 = **350 px** útiles, 1 columna; retícula de 4 columnas sólo para pares de tarjetas.
- Filetes: 1 px `--rule` para separar; 2 px `--ink` para encabezados de sección (regla doble = 2 px + 1 px con 3 px de separación, uso en masthead y footer); 3 px `--red` sólo para "Comentario Whitepaper" y el bloque de suscripción.

### 2.2 Orden de secciones (desktop) y qué va arriba del doblez

```
 #  Sección                                  Alto aprox.  ADD
 1  Barra utilitaria (sticky)                 40          sí
 2  Masthead (wordmark + folio + regla)       120         sí
 3  Nav principal (se pega bajo la util.)     48          sí
 4  Portada: nota líder + columna lateral     440–520     sí (headline + play visibles)
 5  Banda ESCUCHAR / VER (fondo tinta)        300         parcial (el borde superior asoma)
 6  Lo último (lista con filetes * * *)       420
 7  Qué incluye tu suscripción (7 productos)  620
 8  Principales (módulo por sección)          480
 9  Podcasts (grid 4 shows, "Escuchar")       520
10  Video (grid 16:9, "Ver")                  420
11  Suscripción (precios, toggle, expect.)    560
12  Testimonios + cifras                      320
13  Overview / fin de semana + Eventos        360
14  Footer (index completo, legal)            380
```
En mobile el orden es el mismo salvo que la **banda Escuchar/Ver sube a posición 4.5** (justo después del headline líder, antes del deck largo), porque el visitante del podcast en móvil debe ver el play sin scroll.

### 2.3 Wireframe desktop (1240)

```
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│ [1] BARRA UTILITARIA  h40  fondo --paper, filete inferior 1px                                 │
│  Miércoles 5 de noviembre de 2026 · Núm. 1,842     Edición de hoy  ▶ Escuchar hoy (6 min)      │
│                                                     Iniciar sesión   [ Suscribirse ]         │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ [2] MASTHEAD h120                                                                            │
│   Lo que la comunidad empresarial necesita saber         (kicker Inter 12/upper, tracking .14em)│
│                                                                                              │
│            W H I T E P A P E R                            (logo.png o SVG, alto 44, centrado) │
│   Monterrey · Ciudad de México        Fundado por René Lankenau        14,500 suscriptores    │
│ ═══════════════════════════════════════════════════════════════════════════════════════════ │  regla doble
│ [3] NAV PRINCIPAL h48  Inter 14 semibold upper tracking .06em                                 │
│   Hoy   Principales   Audio   Podcasts   Video   Overview   Eventos   Directorio   Cursos   Store  ⌕ │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ [4] PORTADA  grid 12 col                                                                     │
│ ┌─────────────────────── col 1–8 ────────────────────────┐ ┌──── col 9–12 (filete izq) ────┐ │
│ │ PRINCIPALES · 4 nov                        (kicker rojo) │ │ EN AUDIO HOY                 │ │
│ │ Los outliers de la inclusión: por qué Stori y Aviva      │ │ ┌──┐ Whitepaper, hoy          │ │
│ │ se parecen más a BanCoppel que a Nu                      │ │ │▶ │ Ternium; todos son…      │ │
│ │  (Instrument Serif 56/60, −0.01em, máx 3 líneas)         │ │ └──┘ 7:12 · Suscriptores 🔒  │ │
│ │ Deck: Spectral 20/30, --ink-2, 2–3 líneas                │ │ ──────────────────────────── │ │
│ │ Por Daniela Dib · 12 min de lectura · Suscriptores       │ │ WHITEPAPER 10 · GRATIS       │ │
│ │ ┌──────────────────────────────────────────────────────┐ │ │ ┌──┐ Ep. 214 · Kavak y el   │ │
│ │ │ imagen 16:10 (ilustración pluma/tinta o collage)     │ │ │ │▶ │ precio de valer 4 mil… │ │
│ │ │ ancho col 1–8 ≈ 800 × 500, alt obligatorio           │ │ │ └──┘ 38:40 · René y Karla   │ │
│ │ └──────────────────────────────────────────────────────┘ │ │ ──────────────────────────── │ │
│ │ pie de foto Inter 12 --ink-3                              │ │ HOY EN WHITEPAPER (lista)    │ │
│ └──────────────────────────────────────────────────────────┘ │ • NBA en México              │ │
│                                                              │ • Flying Tiger               │ │
│                                                              │ • Wegovy                     │ │
│                                                              │ Leer la edición →            │ │
│                                                              └──────────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ [5] BANDA ESCUCHAR / VER   fondo --ink, texto --paper, h≈300, full-bleed                     │
│  ESCUCHAR / VER                                            Todos los podcasts →  Todo el video → │
│ ┌────────────┬────────────────────────────┬────────────────────────────┬────────────────────┐ │
│ │ ▶ EPISODIO │ Whitepaper, hoy (audio)    │ Whitepaper 10 (gratis)     │ ▶ VIDEO            │ │
│ │ DE HOY     │ arte 96×96 · 7:12          │ arte 96×96 · 38:40         │ thumb 16:9         │ │
│ │ (grande)   │ Edición del 5 nov          │ Ep. 214 Kavak…             │ "La conversación   │ │
│ │ 240×240    │ [▶ Escuchar]  1x           │ [▶ Escuchar]  Spotify Apple│  que los CEOs…"    │ │
│ │ arte       │ Suscriptores 🔒 · muestra 90s│                            │ 42 min · Suscript. │ │
│ └────────────┴────────────────────────────┴────────────────────────────┴────────────────────┘ │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ [6] LO ÚLTIMO                      ═══ regla 2px ═══                              Archivo →   │
│  ┌─ col 1–8 lista ───────────────────────────────────────────┐ ┌─ col 9–12 ──────────────┐   │
│  │ HOY · 5 nov        Titular 24/30 Spectral SemiBold         │ │ CONOCE A… (lunes)        │   │
│  │ [thumb 16:9 160]   deck 16/24 · Byline · 6 min · 🔒        │ │ retrato ilustrado 1:1    │   │
│  │            * * *                                           │ │ Nombre · cargo · empresa │   │
│  │ PRINCIPALES        Titular…                                │ │ ──────────────────────── │   │
│  │            * * *                                           │ │ MOVIMIENTOS CLAVE        │   │
│  │ OVERVIEW · sáb     Titular…                                │ │ 3 líneas de RH           │   │
│  │            * * *                                           │ │ ──────────────────────── │   │
│  │ HOY · 4 nov        Titular…                                │ │ GRÁFICA DE LA SEMANA     │   │
│  │ (5 ítems)                                                  │ │ imagen B/N 4:3           │   │
│  └────────────────────────────────────────────────────────────┘ └──────────────────────────┘   │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ [7] QUÉ INCLUYE TU SUSCRIPCIÓN    ═══ regla 2px ═══                                           │
│  Intro Spectral 20: "Una suscripción. Siete formas de estar al día."                         │
│  ┌──────────┬──────────┬──────────┬──────────┐   fila 1 (4 col × 3)                           │
│  │ TEXTO    │ TEXTO    │ TEXTO    │ AUDIO    │  cada tarjeta: kicker formato (Inter 11)       │
│  │ Whitepaper│Principales│ Overview │Whitepaper│  nombre (Instrument Serif 28)                 │
│  │ Hoy      │          │          │ , hoy    │  qué es (Spectral 16, 2 líneas)                │
│  │ Lun–Vie  │ Semanal* │ Sábados  │ Lun–Vie  │  frecuencia · duración (Inter 12)              │
│  │ 7:00 am  │          │          │ 6–8 min  │  → Ver sección (enlace)                        │
│  │ 🔒       │ 🔒       │ 🔒       │ 🔒       │  * [VERIFICAR frecuencia]                     │
│  ├──────────┼──────────┼──────────┼──────────┤                                                │
│  │ AUDIO    │ AUDIO    │ VIDEO    │ EN VIVO  │  fila 2                                        │
│  │ Whitepaper│Dark Side │ Video    │ Eventos  │                                                │
│  │ 10 GRATIS│ of the Rd│ Whitepaper│ exclusivos│                                               │
│  │ + Arquitectura de Negocios (la celda 2 agrupa 2 podcasts privados) [VERIFICAR]            │
│  └──────────┴──────────┴──────────┴──────────┘                                                │
│  Pie: "Gratis: Whitepaper 10 y correos ocasionales. Todo lo demás es para suscriptores."     │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ [8] PRINCIPALES  (módulo por sección, estilo FP /t/)   ═══ regla ═══        Ver todos →       │
│  ┌─ col 1–6: nota con imagen 4:3, titular 32, deck, byline ─┐ ┌─ col 7–12: lista 4 titulares ┐ │
│  │                                                           │ │ 1. ¿Cómo es que Kavak…      │ │
│  │                                                           │ │ 2. El crecimiento de Nowports│ │
│  │                                                           │ │ 3. …  (numerales rojos 24)   │ │
│  └───────────────────────────────────────────────────────────┘ └──────────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ [9] PODCASTS   ═══ regla ═══                                       Todos los episodios →      │
│  ┌──────────────┬──────────────┬──────────────┬──────────────┐  4 col, arte cuadrado 1:1     │
│  │ arte 1:1 ▶   │ arte 1:1 ▶   │ arte 1:1 ▶   │ arte 1:1 ▶   │  kicker = nombre del show      │
│  │ WHITEPAPER 10│ WHITEPAPER,  │ DARK SIDE OF │ ARQUITECTURA │  título episodio Spectral 20   │
│  │ GRATIS       │ HOY (AUDIO)  │ THE ROAD     │ DE NEGOCIOS  │  deck 15, 2 líneas             │
│  │ Ep. 214 …    │ 5 nov …      │ Ep. …        │ Ep. …        │  [▶ Escuchar]  38:40           │
│  │ René y Karla │ Voces prof.  │ 🔒           │ 🔒           │  Ver episodios → (secundario)  │
│  └──────────────┴──────────────┴──────────────┴──────────────┘                                │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ [10] VIDEO   ═══ regla ═══                                              Todo el video →       │
│  ┌──────────────────────────────┬───────────────┬───────────────┐  1 grande (col 1–6) + 2 (col 7–12 apilados) │
│  │ thumb 16:9 con ▶ 64px centrado│ thumb 16:9 ▶  │ thumb 16:9 ▶  │  duración en esquina         │
│  │ kicker SERIE · título 28      │ título 18     │ título 18     │  "Ver" en texto                │
│  └──────────────────────────────┴───────────────┴───────────────┘                                │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ [11] SUSCRIPCIÓN  filete superior 3px --red                                                   │
│  ┌─ col 1–6 ──────────────────────────────────┐ ┌─ col 7–12 ────────────────────────────────┐ │
│  │ "Menos ruido y más criterio, cada mañana."  │ │  Mensual ○  ● Anual  (ahorras 30%)        │ │
│  │ (Instrument Serif 40)                        │ │  $1,590 MXN / año  (= $133 al mes)        │ │
│  │ Qué recibes y cuándo (lista con horas):      │ │  Instrument Serif 56 para la cifra        │ │
│  │  Lun–Vie 7:00 am  Whitepaper Hoy + audio     │ │  [ Suscribirse — plan anual ]  (h56 ink)  │ │
│  │  Semana          Principales                 │ │  Pago seguro en Substack · Cancela cuando │ │
│  │  Sábado          Overview                    │ │  quieras · Factura disponible [VERIFICAR] │ │
│  │  Siempre         Podcasts privados y video   │ │  ───────────────────────────────────────  │ │
│  │  Varias al año   Eventos                     │ │  ¿Para tu equipo? Suscripción corporativa →│ │
│  │ Qué NO es: noticias de último minuto, política│ │  ¿Ya eres suscriptor? Iniciar sesión      │ │
│  └─────────────────────────────────────────────┘ └───────────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ [12] LO QUE DICEN LOS SUSCRIPTORES   ═══ regla ═══                                            │
│  ┌──── 3 columnas (col 1–4 / 5–8 / 9–12) con comillas tipográficas Instrument Serif 96 ─────┐ │
│  │ cita Spectral 18 italic · — Nombre, Empresa (Inter 12)                                    │ │
│  └───────────────────────────────────────────────────────────────────────────────────────────┘ │
│  Cifras: 14,500+ pagados · 135,000+ lectores · >65% apertura diaria  (cifras en --red 40)      │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ [13] OVERVIEW (fin de semana) col 1–7  |  EVENTOS col 8–12 (próximo evento, ciudad, "Solo suscriptores") │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ [14] FOOTER  regla doble arriba                                                               │
│  WHITEPAPER (wordmark 28)  "Lo que la comunidad empresarial necesita saber."                   │
│  Leer: Hoy · Principales · Overview · Archivo     Escuchar: Whitepaper 10 · Whitepaper, hoy · Dark Side · Arquitectura │
│  Ver: Video      Más: Eventos · Directorio · Cursos · Store · Suscripción corporativa · Soporte · About │
│  Spotify · Apple Podcasts · YouTube · LinkedIn · X · Instagram      [ Suscribirse ]           │
│  © 2026 Whitepaper · Privacidad · Términos · Publicado con Substack                            │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
│ MINI-REPRODUCTOR PERSISTENTE (aparece sólo tras un play) h64, fijo abajo, fondo --ink        │
│  [arte 48] Whitepaper 10 · Ep. 214 Kavak…   ◀15  ▶  15▶   ━━━━━●━━━━━ 12:04 / 38:40  1x  ✕    │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```

Notas de la portada [4]:
- La nota líder NO lleva imagen arriba del titular (al revés que FP). En 620 px de alto el orden titular → deck → byline → imagen garantiza que el headline y los dos botones ▶ de la columna lateral queden arriba del doblez. La imagen asoma recortada, lo cual invita al scroll.
- Columna lateral (col 9–12) = **"la radio del día"**: dos tarjetas de audio compactas (una suscriptores, una gratis) y el sumario de la edición de hoy. Es lo que da protagonismo real al audio sin esperar a la banda.
- Si no hay un Principales reciente (<7 días), la nota líder es la edición de Whitepaper Hoy del día, con kicker "HOY".

Notas de la banda [5]:
- Es el único bloque con fondo tinta. Contraste invertido = "sección de radio/TV" dentro del periódico. Full-bleed; el contenido respeta el contenedor.
- La celda 1 ("Episodio de hoy", arte 240×240 con ▶ 72 px encima) muestra Whitepaper 10 si el visitante NO es suscriptor conocido (default, porque no podemos saberlo) — es el producto gratis y la puerta de entrada. Las celdas 2–3 son tarjetas de podcast en estado compacto; la celda 4 es la tarjeta de video.
- "Muestra 90 s": para los audios de suscriptores, el ▶ reproduce un clip de 60–90 s hospedado en nuestro servidor (`/media/muestras/whitepaper-hoy-2026-11-05.mp3`); al terminar, el reproductor muestra "Escucha la edición completa — Suscribirse". Ver §4.5.

### 2.4 Wireframe mobile (390)

```
┌────────────────────────────────┐
│ ≡   WHITEPAPER   ▶  [Suscribirse]│ h56 sticky. ≡ = menú; ▶ = "Escuchar hoy" (icono 44×44); botón h40
├────────────────────────────────┤
│ Mié 5 nov 2026 · Núm. 1,842     │ folio 12px, filete abajo
├────────────────────────────────┤
│ PRINCIPALES · 4 NOV             │ kicker rojo
│ Los outliers de la inclusión:  │ Instrument Serif 36/40, máx 4 líneas
│ por qué Stori y Aviva se       │
│ parecen más a BanCoppel que    │
│ a Nu                           │
│ Por Daniela Dib · 12 min · 🔒  │ Inter 13
├────────────────────────────────┤  ← la banda sube aquí en móvil
│ ████ ESCUCHAR HOY ███████████  │ fondo tinta, padding 20
│ ┌────┐ WHITEPAPER 10 · GRATIS   │ arte 72×72
│ │ ▶  │ Ep. 214 · Kavak y el     │ título Spectral 17, 2 líneas
│ └────┘ precio… 38:40  [▶ Escuchar]│ botón h44 ancho completo debajo
│ ┌────┐ WHITEPAPER, HOY · 🔒     │
│ │ ▶  │ Edición 5 nov · 7:12     │
│ └────┘ [▶ Muestra 90 s]         │
│ ▶ Video: La conversación… 42 min│ fila de texto con icono
│ Todos los podcasts →  Video →   │
├────────────────────────────────┤
│ [imagen líder 350×219 16:10]    │
│ deck Spectral 18/27             │
│ Leer →                         │
├────────────────────────────────┤
│ HOY EN WHITEPAPER              │ sumario de la edición (3 bullets) + "Leer la edición →"
├────────────────────────────────┤
│ ═══ LO ÚLTIMO ═══              │
│ ┌──────┐ HOY · 5 NOV            │ fila: thumb 96×96 izq, texto der
│ │thumb │ Titular Spectral 19/25 │
│ └──────┘ 6 min · 🔒             │
│         * * *                  │
│ (5 ítems)          Archivo →    │
├────────────────────────────────┤
│ ═══ QUÉ INCLUYE TU SUSCRIPCIÓN │
│ "Una suscripción. Siete formas │
│  de estar al día."             │
│ ┌──────────────┬──────────────┐ │ grid 2 col × 4 filas, tarjetas 165 px ancho
│ │ TEXTO        │ TEXTO        │ │
│ │ Whitepaper   │ Principales  │ │
│ │ Hoy          │              │ │
│ │ Lun–Vie 7 am │ Semanal      │ │
│ ├──────────────┼──────────────┤ │
│ │ … 8 tarjetas │              │ │
│ └──────────────┴──────────────┘ │
├────────────────────────────────┤
│ ═══ PRINCIPALES ═══  Ver todos │
│ nota con imagen + lista 1–4    │
├────────────────────────────────┤
│ ═══ PODCASTS ═══               │
│ ‹ carrusel horizontal, scroll-snap, tarjetas 280 px › │
│ (4 shows; el borde de la 2ª asoma 40 px para indicar scroll) │
├────────────────────────────────┤
│ ═══ VIDEO ═══                  │
│ thumb 16:9 grande con ▶ 56     │
│ + 2 filas thumb 120×68 + título│
├────────────────────────────────┤
│ ━━━ SUSCRIPCIÓN (filete rojo)  │
│ "Menos ruido y más criterio…"  │
│ [ Mensual | Anual ● ]  (segmented, h44) │
│ $1,590 MXN / año               │ Instrument Serif 48
│ = $133 al mes · ahorras 30%    │
│ [ Suscribirse — plan anual ]   │ h56, ancho completo
│ Pago en Substack · cancela cuando quieras │
│ Qué recibes y cuándo (lista)   │
│ Qué no es                      │
│ ¿Ya eres suscriptor? Iniciar sesión │
├────────────────────────────────┤
│ TESTIMONIOS: 1 visible + puntos (3) │
│ CIFRAS en 3 filas              │
├────────────────────────────────┤
│ OVERVIEW · EVENTOS (apilados)  │
├────────────────────────────────┤
│ FOOTER: 4 acordeones (Leer, Escuchar, Ver, Más) │
│ redes · [Suscribirse] · legal  │
└────────────────────────────────┘
│ MINI-REPRODUCTOR h64 fijo abajo (sobre el safe-area) │
│ [arte 40] título 1 línea  ▶  ━━━━●━━  12:04  1x  ✕ │
```

Decisiones móviles:
- El header móvil tiene **4 cosas y nada más**: menú, wordmark, play, suscribirse. Cada target ≥44×44.
- La banda sube arriba de la imagen líder: en 390×844, con header 56 + folio 28 + titular 4 líneas (160) + byline (24), la banda empieza en ~290 px → el primer ▶ queda visible sin scroll.
- Podcasts en carrusel con `scroll-snap-type: x mandatory`, pero **también** accesibles con botones ‹ › (44 px) para quien no hace swipe (Álvaro). El carrusel nunca es la única forma: "Todos los podcasts →" lista todo.
- Nada de hover-only: todo estado se muestra con tap/focus.

---

## 3. Navegación

### 3.1 Barra utilitaria (desktop, h40, sticky)
```
izq:  Miércoles 5 de noviembre de 2026 · Núm. 1,842          (Inter 12, --ink-3)
cen:  Edición de hoy  |  ▶ Escuchar hoy · 6 min              (Inter 13 semibold, --ink; ▶ en --red)
der:  Iniciar sesión   [ Suscribirse ]                        (texto 13 / botón h32 ink)
```
- Comportamiento sticky: la barra utilitaria queda fija (`position: sticky; top: 0`) **siempre**. Al pasar el masthead (scroll > 170 px), la barra crece a h48 y el centro cambia a: wordmark 20 px a la izquierda + los enlaces de nav principal comprimidos (Hoy · Principales · Audio · Podcasts · Video · Overview · Más ▾) + "Suscribirse" a la derecha. Transición 150 ms de opacidad; sin animación de altura (evita saltos de layout: reservar h48 desde el inicio y centrar el contenido de 40).
- "Edición de hoy" → URL del post más reciente de `/s/whitepaper-hoy` [VERIFICAR slug] tomado de `content.json`; fallback `https://www.whitepaper.mx/archive?sort=new`.
- "▶ Escuchar hoy" → NO navega: abre el mini-reproductor con la muestra de 90 s de Whitepaper, hoy (si el episodio es de suscriptores) o el episodio completo de Whitepaper 10 (si el feed de Whitepaper, hoy no tiene episodio del día). Un `aria-label="Escuchar la edición de hoy, 6 minutos"`.
- El folio con número de edición es decorativo-editorial; si no se puede calcular, mostrar sólo la fecha. Nunca mostrar "Núm. 0" ni fecha de ayer: la fecha se renderiza en el servidor/build y se corrige por JS con `Intl.DateTimeFormat('es-MX')`.

### 3.2 Nav principal (desktop, h48)
Orden y destino (los `/s/` son secciones de Substack; verificar slugs reales en la configuración de secciones):
```
Hoy          → https://www.whitepaper.mx/s/whitepaper-hoy        [VERIFICAR slug]
Principales  → https://www.whitepaper.mx/s/principales            [VERIFICAR]
Audio        → https://www.whitepaper.mx/s/whitepaper-audio       (confirmado en brief)
Podcasts     → https://www.whitepaper.mx/podcast                  (pestaña podcast de Substack) o /#podcasts si preferimos ancla interna
Video        → https://www.whitepaper.mx/s/video                  [VERIFICAR; si no existe, ancla #video]
Overview     → https://www.whitepaper.mx/s/overview               [VERIFICAR]
Eventos      → /#eventos (ancla) hasta que exista página
Directorio   → https://directorio.whitepaper.mx
Cursos       → https://learning.whitepaper.mx
Store        → https://hq.whitepaper.mx
⌕ Buscar     → https://www.whitepaper.mx/search  [VERIFICAR; Substack expone /search en publicaciones]
```
- Agrupación visual: los seis primeros son **productos editoriales** (texto/audio/video); los cuatro siguientes son **servicios**. Separarlos con un `|` tipográfico de 1 px `--rule` y 24 px de aire. Los enlaces externos (Directorio, Cursos, Store) llevan un ↗ pequeño (Inter, 10 px) y `rel="noopener"`.
- Estilo: Inter 14 semibold, mayúsculas, tracking .06em, color `--ink`. Hover: subrayado 2 px `--red` con `text-underline-offset: 6px`. Activo (página actual): mismo subrayado permanente (en el home, ninguno está activo). Focus visible: outline 2 px `--ink` offset 2 px (ver §6).
- About y Soporte NO van en la nav principal: van en la barra utilitaria no, van en el footer. Menos decisiones.

### 3.3 Dónde van "Suscribirse" e "Iniciar sesión"
- **Suscribirse**: botón ink (fondo `--ink`, texto `--paper`) h32 en la barra utilitaria; siempre visible en desktop y móvil. Es el ÚNICO botón relleno arriba del doblez además de los ▶. URL: ver §5.2.
- **Iniciar sesión**: enlace de texto (Inter 13, `--ink-2`, subrayado al hover) a la izquierda del botón. Nunca botón, nunca rojo. URL: `https://www.whitepaper.mx/account/login?redirect=%2F&email=` [VERIFICAR; alternativa `https://substack.com/sign-in?redirect=%2F&for_pub=whitepaper`]. Repetido como "¿Ya eres suscriptor? Iniciar sesión" dentro del bloque de suscripción, para que el pagado que llegó por error a los precios tenga salida inmediata.
- No intentamos detectar sesión. No mostramos avatar ni "Hola, X".

### 3.4 Menú móvil
- Icono ≡ (44×44) abre un panel **a pantalla completa** (no drawer lateral angosto): fondo `--paper`, wordmark arriba, ✕ (44×44) arriba a la derecha, `role="dialog" aria-modal="true"`, foco atrapado, cierra con Esc y con ✕.
- Contenido del panel, en este orden, Instrument Serif 28/36 para los ítems principales:
  ```
  LEER        Hoy · Principales · Overview · Archivo
  ESCUCHAR    Whitepaper 10 (gratis) · Whitepaper, hoy · Dark Side of the Road · Arquitectura de Negocios
  VER         Video
  MÁS         Eventos · Directorio ↗ · Cursos ↗ · Store ↗ · Suscripción corporativa · Soporte · About
  ─────────────────────────────
  [ Suscribirse — $1,590/año ]  (h56, ancho completo)
  Iniciar sesión (texto, centrado, h44)
  ```
  Las etiquetas LEER / ESCUCHAR / VER son kickers Inter 11 `--ink-3`; cada ítem es una fila de h48 con filete inferior 1 px.
- El botón "Suscribirse" del header móvil permanece visible con el menú abierto (el panel empieza debajo del header).

### 3.5 Cómo se marca el contenido para suscriptores sin castigar al lector
Principio: la marca es **información editorial** (como "Opinión" o "Patrocinado" en un periódico), no una barrera roja ni un candado gris de "no puedes".
- **Etiqueta tipográfica** `Suscriptores` en Inter 11, mayúsculas, tracking .1em, color `--ink-3`, precedida por un glifo de candado delineado de 10 px (SVG inline, `aria-hidden`), con `<span class="sr-only">Contenido para suscriptores</span>`. Se coloca al final de la línea de metadatos (byline · duración · Suscriptores), nunca sobre la imagen ni sobre el título.
- Lo gratis se marca en positivo con `Gratis` en `--red-text` (misma tipografía), porque es la excepción y es lo que queremos que el visitante pruebe.
- En las tarjetas de audio para suscriptores, el ▶ **sigue siendo activo**: reproduce la muestra. El castigo sería un ▶ deshabilitado; aquí el visitante siempre puede oír algo.
- En el hover/focus de un ítem "Suscriptores", no cambiar el cursor ni mostrar tooltip de "bloqueado"; el enlace lleva al post en Substack donde el muro de pago aparece a mitad de lectura (así el visitante lee el arranque del texto, que es la mejor demostración).
- Nunca usar el emoji 🔒 en producción (lo uso arriba como abreviatura en wireframes); usar el SVG para controlar tamaño y color.

---

## 4. Componentes (especificación funcional)

Todos los componentes: tap target mínimo 44×44 (en desktop los enlaces de texto pueden ser más bajos visualmente pero el área clicable, vía padding, llega a 44 de alto o el `<a>` envuelve el bloque completo). Hover sólo en `@media (hover: hover)`. Focus con `:focus-visible` outline 2 px `--ink`, offset 2 px; sobre fondo tinta, outline `--paper`.

### 4.1 Nota líder (`.lead`)
- Contenido: kicker (sección · fecha), titular, deck, byline (autor con enlace a su página de Substack `/@autor` o `/s/…`), duración de lectura, etiqueta Suscriptores, imagen 16:10 con `alt` descriptivo y pie.
- Tipografía: kicker Inter 12 semibold upper `--red-text`; titular Instrument Serif 56/60 (desktop), 36/40 (mobile), `text-wrap: balance`, máx 3 líneas desktop (clamp con `-webkit-line-clamp` NO: dejamos que el titular fluya; el editor controla longitud ≤110 caracteres); deck Spectral 20/30 `--ink-2`; byline Inter 13 `--ink-3`.
- Todo el bloque es un enlace: `<a class="lead__link" href=…>` envuelve titular + deck; imagen es otro `<a>` con el mismo href y `tabindex="-1"` para no duplicar paradas de teclado.
- Hover: titular subrayado 2 px `--red` offset 6 px; imagen sin zoom (nada de `scale`, es print).
- Capitular: la nota líder no lleva capitular (no hay cuerpo). La capitular se usa en el extracto de Whitepaper Hoy de la sección "Lo último" si decidimos mostrar 2–3 líneas de cuerpo: `::first-letter` Instrument Serif 3 líneas de alto, `float: left`, color `--ink`.

### 4.2 Lista de notas (`.list`, usada en Lo último, Principales, sumario de hoy)
- Ítem: `<article>` con grid `[thumb 160×90] [texto]` en desktop, `[thumb 96×96] [texto]` en mobile (recorte 1:1 con `object-fit: cover`, `object-position` configurable). Texto: kicker (sección · fecha), titular Spectral SemiBold 24/30 (desktop) / 19/25 (mobile), deck Spectral 16/24 (oculto en mobile para ítems 3–5), meta Inter 12.
- Separador entre ítems: `* * *` centrado (Inter 14 `--ink-3`, letter-spacing .5em) con 24 px de aire arriba y abajo. Es el filete "de asteriscos" de FP, pero en nuestra tipografía. Implementar con `::after` y `content: "* * *"`; `aria-hidden` implícito al ser pseudo-elemento.
- El ítem completo es clicable (enlace en titular + `a::after { position:absolute; inset:0 }` para extender el área); thumbnail `alt=""` si es decorativo y el titular ya describe.
- Hover: titular subrayado. Focus: outline del `<a>`; como el área está extendida por pseudo-elemento, el outline debe dibujarse en el `<article>` con `:focus-within`.
- Lista numerada (Principales): numerales Instrument Serif 32 en `--red`, alineados a la derecha de una columna de 48 px, baseline con la primera línea del titular.

### 4.3 Tarjeta de podcast (`.pod`)
Variantes: `--full` (grid de Podcasts, 4 columnas), `--compact` (columna lateral y banda), `--hero` (celda "Episodio de hoy").
- Anatomía (`--full`): arte cuadrado 1:1 (ancho de columna, ~280) con ▶ 56 px superpuesto en la esquina inferior izquierda (círculo `--paper` con borde 1 px `--ink`, triángulo `--ink`); kicker nombre del show (Inter 11 upper, `--ink-3`) + etiqueta Gratis/Suscriptores; título del episodio Spectral SemiBold 20/26 (2 líneas, clamp); deck Spectral 15/22 (2 líneas); meta: duración `38:40` + fecha + hosts (Inter 12); botón primario **▶ Escuchar** (h44, ink, ancho natural, mín 120); enlace secundario **Ver episodios →** (al `/s/` o `/podcast` del show); iconos Spotify / Apple sólo en Whitepaper 10 (SVG 20 px, enlaces externos, `aria-label="Whitepaper 10 en Spotify"`).
- Estados:
  - **default**: como arriba.
  - **hover** (puntero): ▶ superpuesto crece a 64 px (transform 150 ms), título subrayado; nada más.
  - **focus**: outline en el botón/enlace enfocado; la tarjeta no cambia.
  - **cargando** (tras clic, antes de `canplay`): el ▶ se sustituye por un anillo de 2 px girando (SVG, `prefers-reduced-motion` → anillo estático con 3 puntos); texto del botón "Cargando…"; `aria-busy="true"`.
  - **reproduciendo**: ▶ pasa a ❚❚ en el arte y en el botón; el botón dice **❚❚ Pausar**; aparece debajo del título una barra de progreso de 2 px `--red` (sólo en esta tarjeta); el kicker añade "· Reproduciendo" en `--red-text`; `aria-pressed="true"` en el botón. Sólo una tarjeta puede estar en este estado (un único `<audio>` global).
  - **pausado**: botón vuelve a **▶ Continuar**, barra de progreso se queda en su posición.
  - **terminado**: botón **↺ Volver a escuchar**; si era muestra, el bloque cambia a CTA (ver §4.5).
  - **muestra** (podcasts de suscriptores): botón dice **▶ Muestra · 1:30** y la duración completa queda en meta ("Episodio completo 7:12 · Suscriptores").
- Datos requeridos por tarjeta en `content.json`: `show`, `title`, `deck`, `date`, `duration_sec`, `audio_url` (mp3 público o muestra), `is_free`, `episode_url` (Substack), `show_url`, `art` (URL 600×600, servir también 300×300).

### 4.4 Tarjeta de video (`.vid`)
- Anatomía: thumbnail 16:9 con ▶ 64 px centrado (mismo círculo que podcast) y duración en la esquina inferior derecha (Inter 12, fondo `--ink` 80% opaco, texto `--paper`, padding 2 8); kicker nombre de la serie + Suscriptores; título Spectral SemiBold 28/34 (grande) o 18/24 (secundaria); deck 15/22 sólo en la grande; invitado/participantes en meta.
- Comportamiento del clic: **navega** a la página del video en Substack (el video de suscriptores no se puede embeber desde fuera sin sesión). Si el equipo publica un tráiler público (YouTube/Substack público), el ▶ abre un `<dialog>` con el `<iframe>` 16:9 (`loading="lazy"`, `allow="autoplay"`, cierre con Esc y ✕ 44 px, foco atrapado) y el título "Tráiler · Ver completo (Suscriptores) →".
- Estados: hover → ▶ a 72 px + título subrayado; focus → outline en el enlace; no hay estado reproduciendo en la tarjeta (el video no es inline).
- `alt` del thumbnail: "Fotograma: [invitado] en conversación con René Lankenau" o `alt=""` si el título lo cubre.

### 4.5 Reproductor inline y mini-reproductor (`.player`)
Un único elemento `<audio id="wp-audio" preload="none">` en el DOM; todas las tarjetas lo controlan. El mini-reproductor es su UI persistente.
- **Aparición**: `position: fixed; bottom: 0` (en móvil, `padding-bottom: env(safe-area-inset-bottom)`), h64, fondo `--ink`, texto `--paper`, `role="region" aria-label="Reproductor"`. Entra con translateY 200 ms (sin animación con reduced-motion). Añade `padding-bottom: 64px` al `<body>` para que el footer no quede tapado.
- **Controles (de izquierda a derecha)**: arte 48×48 → título del episodio (1 línea, elipsis) + show (Inter 12 70% opacidad) → ◀15 (retroceder 15 s, 44×44) → ▶/❚❚ (56×56, círculo `--paper`) → 15▶ (44×44) → barra de progreso (`<input type="range">` estilizado, pista 4 px `--paper` 30%, avance `--red`, thumb 16 px; `aria-label="Posición"`, `aria-valuetext="12 minutos 4 segundos de 38 minutos 40"`) → tiempo `12:04 / 38:40` (Inter 13, `font-variant-numeric: tabular-nums`) → velocidad **1x** (botón 44×44 que alterna 1x → 1.5x → 1x; `aria-label="Velocidad de reproducción, actual 1x"`) → ✕ cerrar (44×44, detiene y oculta).
  En móvil (<600): arte 40, título, ▶ 48, barra, tiempo compacto `12:04`, 1x, ✕. Se ocultan ◀15/15▶ (quedan disponibles por teclado: ← → en el `range` saltan 15 s).
- **Atajos de teclado** cuando el reproductor tiene foco o el usuario no está en un campo de texto: `Espacio`/`K` play-pause, `J`/`L` ∓15 s, `Shift+.` velocidad. Se documentan en `aria-describedby` oculto.
- **Persistencia**: guardar en `localStorage` `{episode_url, position, rate}`; al volver al home, si hay posición >30 s y <95%, mostrar en la tarjeta correspondiente "Continuar · 12:04" y precargar el mini-reproductor en estado pausado.
- **Media Session API**: `navigator.mediaSession.metadata` (título, show, arte) y handlers play/pause/seekbackward/seekforward para que funcione desde la pantalla bloqueada del teléfono y los audífonos.
- **Fuentes de audio**:
  - Whitepaper 10 (gratis): URL del mp3 desde el RSS del podcast (enclosure); verificar que el host permite reproducción cross-origin (`Access-Control-Allow-Origin` o simplemente `src` directo, que no requiere CORS para `<audio>`).
  - Podcasts de suscriptores: **muestra** de 60–90 s en nuestro hosting. Al terminar la muestra, el mini-reproductor sustituye los controles por: "Eso fue 1:30 de 7:12. La edición completa en audio llega lun–vie a las 7:00 am. [Suscribirse]" (botón h44 `--paper` sobre tinta con texto `--ink`), y la tarjeta origen muestra el mismo CTA bajo el título. Esto convierte la frustración del muro en una oferta clara.
- **Errores**: si `error` en `<audio>` (URL caída), mostrar en la tarjeta "No pudimos cargar el audio. Escúchalo en Spotify / Apple / Substack" con los tres enlaces; nunca un botón que no hace nada.
- **Fallback sin JS**: cada tarjeta lleva `<a href=episode_url>` como botón; el `<audio controls>` nativo se inyecta sólo con JS. Sin JS, los botones navegan a Substack.

### 4.6 Bloque de producto (`.product`, sección "Qué incluye tu suscripción")
- Tarjeta sin caja: separada por filetes 1 px (`border-top`, y `border-left` entre columnas en desktop). Padding 24.
- Anatomía: kicker **formato** (TEXTO / AUDIO / VIDEO / EN VIVO; Inter 11 upper `--ink-3`, con un glifo de 12 px: ¶ para texto, ▶ para audio, ▭ para video, ◉ para eventos); nombre del producto Instrument Serif 28/32; descripción Spectral 16/24 (2 líneas, máx 110 caracteres, descriptiva: "Resumen curado de las noticias que importan y por qué."); línea de **frecuencia + hora + duración** (Inter 12 semibold `--ink`: "Lun–Vie · 7:00 am · 6–8 min de lectura"); etiqueta Gratis / Suscriptores; enlace **Ver sección →** (h44 de área clicable).
- Las 8 celdas (orden fijo, no reordenar por JS):
  1. Whitepaper Hoy — TEXTO — Lun–Vie 7:00 am [VERIFICAR hora] — Suscriptores
  2. Principales — TEXTO — Investigaciones largas, frecuencia [VERIFICAR] — Suscriptores
  3. Overview, by Whitepaper — TEXTO — Sábados — Suscriptores
  4. Whitepaper, hoy (audio) — AUDIO — Lun–Vie, 6–8 min, voces profesionales — Suscriptores
  5. Whitepaper 10 — AUDIO — Semanal [VERIFICAR], René Lankenau y Karla — **Gratis** (Spotify · Apple)
  6. Dark Side of the Road + Arquitectura de Negocios — AUDIO — Podcasts privados [VERIFICAR descripciones] — Suscriptores (una celda con dos nombres y dos enlaces, o dos celdas si cabe en el grid 4×2: entonces Eventos se mueve a §13)
  7. Video — VIDEO — Entrevistas largas con líderes [VERIFICAR nombre] — Suscriptores
  8. Eventos — EN VIVO — Encuentros presenciales, varias veces al año [VERIFICAR] — Suscriptores
- Hover: nombre subrayado. Toda la celda es clicable (misma técnica que §4.2).
- Pie del bloque (Spectral 15 `--ink-2`): "Gratis recibes Whitepaper 10 y correos ocasionales. Todo lo demás es para suscriptores: así cuidamos la conversación." (Fija la expectativa del gratuito en una línea, sin pedir disculpas.)

### 4.7 Bloque de suscripción con toggle (`.subscribe`)
- Filete superior 3 px `--red`. Dos columnas desktop (6/6), una en móvil con el precio **arriba** del texto largo.
- **Toggle** mensual/anual: control segmentado `role="radiogroup"` con dos `<input type="radio">` visualmente como pestañas (h44, Inter 14 semibold); **Anual preseleccionado**. Etiqueta junto a Anual: "Ahorras 30%" en `--red-text` (189×12 = 2,268; 1,590/2,268 = 0.70 → 30 % real; no inventar otro número). Cambiar el radio actualiza con JS: cifra, "= $133 al mes" (1,590/12 = 132.5 → mostrar "$133"), el texto del botón y el parámetro de la URL (§5.2). Sin JS, ambos precios se listan en texto y el botón va a `/subscribe`.
- Cifra: Instrument Serif 56 `--ink`, "MXN / año" en Inter 14 `--ink-3`. Mensual: "$189 MXN / mes".
- Botón primario: **Suscribirse — plan anual** / **Suscribirse — plan mensual**, h56, ancho completo de su columna (máx 420), fondo `--ink`, texto `--paper` Inter 16 semibold. Hover: fondo `#000`. Active: translateY(1px). Focus: outline `--red` 2 px offset 3 px (aquí el rojo es legítimo: es decoración de foco sobre papel con contraste suficiente para un contorno, 3:1 requerido para UI).
- Debajo (Inter 13 `--ink-3`): "Pago seguro en Substack · Cancela cuando quieras · Factura fiscal [VERIFICAR]". Luego dos enlaces: "¿Para tu equipo? Suscripción corporativa →" y "¿Ya eres suscriptor? Iniciar sesión".
- Columna izquierda: titular Instrument Serif 40 "Menos ruido y más criterio, cada mañana." y la **tabla de expectativas** (ver §5.5) en `<dl>` con filetes.

### 4.8 Testimonio (`.quote`)
- Comillas de apertura Instrument Serif 96 `--red` posicionadas como capitular (float, `line-height: .6`), cita Spectral Italic 18/28 `--ink`, atribución Inter 12 upper `--ink-3` "— Carlos G. Gaytán, El Núcleo". Textos exactos del brief; no editar ni acortar sin elipsis.
- Desktop: 3 columnas con filetes verticales 1 px. Mobile: 1 visible, carrusel `scroll-snap` con puntos (botones 44×44 con `aria-label="Testimonio 2 de 3"`), sin autoplay.
- Cifras debajo: `14,500+` / `135,000+` / `>65%` en Instrument Serif 40 `--red` (≥24 px → el rojo #ee4d3a cumple 3:1 para texto grande), etiqueta Inter 12 `--ink-2`.

### 4.9 Footer (`.footer`)
- Regla doble arriba (2 px + 1 px). Wordmark 28 + tagline Spectral 16.
- Cuatro columnas de enlaces (Leer / Escuchar / Ver / Más), encabezados Inter 11 upper `--ink-3`, enlaces Spectral 16/40 (alto de fila 40 → área clicable ≥44 con padding). Mobile: acordeones `<details>` nativos con `<summary>` h48.
- Fila de redes: iconos SVG 24 px dentro de targets 44×44, con `aria-label`. Botón Suscribirse h44.
- Legal: Inter 12 `--ink-3`: © · Privacidad · Términos · "Publicado con Substack" (enlace a substack.com, requerido por buena fe hacia la plataforma).

---

## 5. Flujo de conversión

### 5.1 Inventario de CTAs (cuántos, jerarquía)
Regla: **un solo botón relleno "Suscribirse" visible por pantalla** además de los ▶. Los ▶ son el CTA de engagement; "Suscribirse" es el de conversión. No competir entre sí.

| # | Ubicación | Forma | Texto | Nivel |
|---|---|---|---|---|
| 1 | Barra utilitaria (sticky, siempre) | Botón ink h32 | Suscribirse | Primario persistente |
| 2 | Fin de muestra de audio (mini-reproductor y tarjeta) | Botón paper sobre tinta h44 | Suscribirse | Contextual (sólo tras evento) |
| 3 | Sección Qué incluye (pie) | Enlace texto | Ver planes → (ancla a §11) | Terciario |
| 4 | Bloque de suscripción | Botón ink h56 | Suscribirse — plan anual | Primario principal |
| 5 | Footer | Botón ink h44 | Suscribirse | Primario de cierre |
| 6 | Menú móvil | Botón ink h56 | Suscribirse — $1,590/año | Primario |

Total en desktop: 3 botones rellenos en toda la página (1, 4, 5) + 1 contextual. Nada de banners intersticiales, pop-ups ni barras de "oferta por tiempo limitado". El sticky ya cumple la función del pop-up sin interrumpir.

### 5.2 Qué pasa al dar clic (redirección a Substack)
Todos los "Suscribirse" apuntan a la página de checkout de Substack con UTM por ubicación:
```
https://www.whitepaper.mx/subscribe
  ?utm_source=whitepaper_home
  &utm_medium=web
  &utm_campaign=home_2026
  &utm_content=<utilbar | audio_sample_end | pricing_annual | pricing_monthly | footer | mobile_menu>
```
- Preselección de plan: Substack **no documenta** un parámetro público estable para abrir el checkout en anual vs mensual. Probar `&plan=annual` / `?plan=yearly` [VERIFICAR en staging]; si no funciona, el toggle sólo cambia el precio mostrado y ambos van a `/subscribe`. En ese caso el copy del botón anual mantiene "— plan anual" porque Substack muestra ambos planes en el checkout y el usuario ya llega con la decisión tomada.
- Cupones/promos (p. ej. la de lanzamiento de audio a $1,190): `https://www.whitepaper.mx/subscribe?coupon=<código>` [VERIFICAR formato actual de Substack]. Sólo cuando haya campaña activa; el home base no muestra promos.
- `target="_self"` (misma pestaña: el usuario va a pagar, no a consultar). Preservar los UTM de entrada: si el visitante llegó con `utm_source=podcast`, el JS **antepone** `utm_source=podcast` y mueve nuestro valor a `utm_content=home_<ubicación>` para que el canal de origen no se pierda en analytics.
- Antes de redirigir, disparar evento `subscribe_click` con `{location, plan, referrer_utm}`; usar `navigator.sendBeacon` para no retrasar la navegación.
- "Iniciar sesión" → `https://www.whitepaper.mx/account/login?redirect=%2F` [VERIFICAR]. Tras login, Substack regresa al home de Substack, no al nuestro; aceptable.
- "Ver sección →" de cada producto → `/s/<slug>` con `?utm_source=whitepaper_home&utm_content=product_<slug>`.
- Suscripción corporativa → `mailto:` o formulario [VERIFICAR existencia de página]; mientras, `https://intercom.help/whitepaper/es` o enlace a Soporte.

### 5.3 Microcopy de botones y enlaces (definitivo)
```
Suscribirse                         (barra, footer, menú)
Suscribirse — plan anual            (bloque precios, anual activo)
Suscribirse — plan mensual          (bloque precios, mensual activo)
Iniciar sesión
▶ Escuchar                          (podcast gratis, episodio completo)
▶ Muestra · 1:30                    (podcast suscriptores)
❚❚ Pausar  /  ▶ Continuar  /  ↺ Volver a escuchar
Ver episodios →                     (al show)
Ver →  /  Ver el video →            (tarjeta video; nunca "Watch now" en inglés)
Leer la edición →                   (sumario del día)
Leer →                              (nota líder, listas)
Ver sección →                       (tarjetas de producto)
Todos los podcasts →  /  Todo el video →  /  Ver todos →  /  Archivo →
Edición de hoy  /  ▶ Escuchar hoy · 6 min
```
Prohibido: "¡Suscríbete ya!", "Únete", "No te lo pierdas", "Empieza gratis" (no hay trial), "Prueba" (no hay trial), signos de exclamación, mayúsculas sostenidas en frases.

### 5.4 Personalización ligera por origen (sin login)
Leer `utm_source` y `document.referrer` al cargar; guardar en `sessionStorage`. Cambios permitidos (solo texto, nunca estructura):
- `podcast` / referrer spotify.com, podcasts.apple.com, youtube.com: kicker del bloque de suscripción → "Si ya escuchas Whitepaper 10, esto es lo que te falta"; la celda hero de la banda muestra Whitepaper, hoy (muestra) en vez de Whitepaper 10 (ya lo conocen).
- `email` / `substack`: kicker → "Lo que recibes como suscriptor" (es un gratuito que viene del correo de marketing).
- Sin UTM: kicker → "Lo que incluye la suscripción".

### 5.5 Fijar expectativas para evitar la cancelación temprana
El memo de negocio dice que las cancelaciones tempranas huelen a expectativa/activación. El home debe funcionar como el correo "Cómo sacarle el máximo a tu suscripción" (día 5) pero ANTES de pagar. Tres mecanismos:

1. **Tabla "Qué recibes y cuándo"** dentro del bloque de suscripción (desktop columna izquierda; móvil debajo del botón). `<dl>` con filetes, Inter 13 para el "cuándo", Spectral 16 para el "qué":
   ```
   Lunes a viernes, 7:00 am [VERIFICAR]   Whitepaper Hoy en tu correo, y la versión en audio (6–8 min) en la app de Substack o aquí.
   Cada semana [VERIFICAR]                Un Principales: investigación larga (12–20 min de lectura).
   Sábado                                  Overview: recomendaciones de fin de semana.
   Cuando se publican                      Dark Side of the Road y Arquitectura de Negocios en tu feed privado de podcast.
   Cuando se publican                      Video exclusivo para suscriptores.
   Varias veces al año                     Invitación a eventos presenciales.
   ```
2. **"Qué no es"** (Spectral 15 `--ink-2`, 2 líneas): "No es un noticiero de último minuto ni un boletín político. Es un resumen curado y análisis propio, en español, para quienes dirigen o invierten en México." Quien busca breaking news no paga y no cancela a los 10 días.
3. **Muestras reales**, no promesas: el audio de 90 s, la nota líder con su deck completo, el sumario del día con los tres temas reales. Y en "Lo último" los kickers con fecha dejan ver el ritmo real (HOY · 5 NOV, HOY · 4 NOV, OVERVIEW · 1 NOV): el visitante ve que efectivamente llega todos los días.

Además, en el bloque de precios: "Cancela cuando quieras" (honesto, baja la ansiedad de compra sin trial) y "Recibes la primera edición mañana a las 7:00 am" (ancla la activación en un momento concreto; ajustar el texto por JS si es viernes/sábado: "el lunes a las 7:00 am").

---

## 6. Accesibilidad y performance

### 6.1 Contraste (medido)
- Texto principal `--ink` sobre `--paper`: 17.5:1.
- Texto secundario `--ink-2 #3a3a3a`: 10.8:1. Metadatos `--ink-3 #6b6b6b`: 5.06:1 (AA). **No usar #767676 ni más claro para texto** (4.32:1 falla).
- `--red #ee4d3a` sobre papel: 3.47:1 → **sólo** para texto ≥24 px (cifras, numerales), filetes, iconos ▶ y contornos de foco. Blanco sobre `--red`: 3.65:1 → **prohibido** para botones con texto. Por eso los botones son tinta.
- Texto rojo pequeño (kickers, "Gratis", "Ahorras 30%"): `--red-text #c93a28` (4.84:1). En fondo tinta: `--red` sobre `--ink` da 5.05:1, válido para el avance de la barra de progreso y textos del mini-reproductor.
- Fondo tinta: `--paper` sobre `--ink` 17.5:1; texto al 70 % de opacidad equivale a ~#b5b4b2 sobre #141414 ≈ 9:1, válido.

### 6.2 Tamaño de texto (Álvaro, 70 años)
- Cuerpo mínimo **16 px** (Spectral 16/24). Metadatos mínimo **12 px** y sólo en Inter (más legible a tamaño pequeño que una serif), nunca para frases largas. Kickers 11 px permitidos sólo en mayúsculas con tracking y para 1–3 palabras.
- Titulares de lista ≥19 px en móvil, ≥24 en desktop. Deck ≥18 en móvil.
- Todo en `rem`; la página debe aguantar 200 % de zoom del navegador sin scroll horizontal (probar en 1280 al 200 % = viewport efectivo 640).
- Interlineado 1.5 en cuerpo, 1.1 en display. Largo de línea 55–75 caracteres: la columna de deck en desktop (col 1–8 ≈ 800 px) a 20 px Spectral da ~80 caracteres → limitar `max-width: 38em`.
- Spectral es delgada en pesos ligeros: usar Regular (400) como mínimo para cuerpo, nunca Light/ExtraLight para texto; ExtraLight sólo en display > 40 px si se desea.

### 6.3 Navegación por teclado
- Orden del DOM = orden visual. Enlace "Saltar al contenido" como primer elemento (visible al foco, arriba a la izquierda, fondo `--ink`).
- Un solo `<h1>` (el titular de la nota líder; el wordmark es `<a>` con imagen `alt="Whitepaper"`, no h1). Secciones con `<h2>` ("Escuchar y ver", "Lo último", "Qué incluye tu suscripción", "Principales", "Podcasts", "Video", "Suscripción", "Lo que dicen los suscriptores"). Landmarks: `<header>`, `<nav aria-label="Principal">`, `<nav aria-label="Utilitaria">`, `<main>`, `<aside>` (columna lateral), `<footer>`, `<nav aria-label="Pie de página">`.
- `:focus-visible` siempre visible: 2 px `--ink` offset 2 px; sobre tinta 2 px `--paper`. Nunca `outline: none` sin reemplazo.
- Carruseles móviles: elementos enfocables en orden; botones ‹ › con `aria-controls`. Menú móvil y `<dialog>` de video: foco atrapado, Esc cierra, foco regresa al disparador.
- Reproductor: todos los controles son `<button>` o `<input type="range">` nativos. Los cambios de estado se anuncian en un `aria-live="polite"` oculto ("Reproduciendo Whitepaper 10, episodio 214", "Pausado", "Velocidad 1.5x").
- Nada depende de hover. Nada se activa por `mouseenter`.

### 6.4 Imágenes
- `alt` obligatorio y descriptivo en ilustraciones y retratos ("Retrato a tinta de X, director general de Y"); `alt=""` en thumbnails decorativos cuyo titular está adyacente. Logo: `alt="Whitepaper"`.
- Formatos: AVIF con fallback WebP via `<picture>`; `width`/`height` siempre declarados (evita CLS); `loading="lazy"` en todo lo que esté debajo de la banda; **`loading="eager"` + `fetchpriority="high"` sólo en la imagen de la nota líder** y el arte del episodio hero.
- Tamaños servidos: imagen líder 800/1200/1600 w; thumbnails 160/320 w; arte podcast 300/600 w; video 16:9 400/800 w. `sizes` correctos por breakpoint.
- Ilustraciones B/N: comprimir como WebP sin color; muchas pesan <40 KB.

### 6.5 Fuentes locales
- Convertir los TTF de `/Users/koritzabeneditt/Desktop/Whitepaper/Fonts` a **WOFF2** y servir desde `/fonts/`. Cargar sólo: Instrument Serif Regular + Italic; Spectral Regular, Italic, SemiBold; Inter Variable (opsz,wght). Nada de Spectral ExtraLight/Light/Bold/ExtraBold en el home.
- `@font-face { font-display: swap }` para Spectral e Inter; `font-display: optional` para Instrument Serif NO (se perdería el display en la primera visita): usar `swap` + `<link rel="preload" as="font" type="font/woff2" crossorigin>` para Instrument Serif Regular y Spectral Regular (las dos que pintan arriba del doblez).
- Fallbacks con métricas ajustadas para reducir el salto: `font-family: "Instrument Serif", "Instrument Serif Fallback", Georgia, serif` donde el fallback es `@font-face` local Georgia con `size-adjust`, `ascent-override`, `descent-override` calculados (herramienta: fontaine / capsize). Igual para Spectral → Georgia y Inter → Arial/Helvetica.
- `unicode-range` latino básico + latino extendido (acentos y ñ). Subsetear con `pyftsubset` (`--layout-features='kern,liga,onum,tnum,pnum'`). Activar `font-variant-numeric: oldstyle-nums` en cuerpo Spectral y `tabular-nums` en tiempos/precios.

### 6.6 Performance (presupuesto)
- Objetivo: LCP < 2.0 s en 4G, CLS < 0.05, INP < 200 ms. Peso inicial (HTML+CSS+JS+fuentes críticas) < 300 KB; imagen líder < 120 KB.
- CSS único inline crítico (< 20 KB) para header/masthead/portada/banda; resto en `styles.css` con `media="print" onload="this.media='all'"` o simplemente un solo CSS de <60 KB (más simple; aceptable).
- JS: un solo archivo `home.js` < 25 KB sin frameworks: reproductor, toggle, menú, carrusel, personalización UTM, carga de `content.json` (fetch con timeout 3 s; si falla, se queda el HTML estático).
- Reproductor: `preload="none"`; sólo descarga al clic. Nunca autoplay.
- Sin embeds de Spotify/Apple/YouTube en el home (cada iframe cuesta 1–3 MB). Sólo enlaces con icono; el tráiler de video se carga en `<dialog>` a demanda.
- Sin librerías de analítica pesadas en el primer pintado; cargar analytics con `defer` tras `load`.
- `prefers-reduced-motion`: desactivar transiciones de ▶, entrada del mini-reproductor y scroll suave de anclas.

---

## 7. Responsive

### 7.1 Breakpoints (mobile-first)
```
base      < 600      1 columna, contenedor 100% − 40 (márgenes 20)
sm      ≥ 600        pares: tarjetas de producto 2 col; lista con thumb 160; testimonios 1→2 col
md      ≥ 900        2 columnas editoriales (8/4 → en realidad 7/5 hasta lg); nav principal visible (sin ≡); banda 2×2
lg      ≥ 1100       retícula completa 12 col; portada 8/4; podcasts 4 col; productos 4 col; banda 1 fila
xl      ≥ 1280       contenedor 1240 centrado; márgenes externos crecen; tipografía display +8 % (Instrument 56 → 60)
```
Tipografía fluida entre 390 y 1240 con `clamp()`: titular líder `clamp(2.25rem, 1.5rem + 3vw, 3.5rem)`; h2 de sección `clamp(1.5rem, 1.2rem + 1.2vw, 2rem)`; deck `clamp(1.125rem, 1rem + .4vw, 1.25rem)`.

### 7.2 Cómo colapsan las columnas sin perder jerarquía
Principio: en una sola columna la jerarquía la dan **tamaño tipográfico + filetes + orden**, no la posición horizontal. Por eso:
- **Portada 8/4 → 1 col**: orden en DOM es titular → byline → [banda] → imagen → deck → sumario del día. En desktop, CSS Grid con `grid-template-areas` reordena (la banda baja a su posición 5 y la columna lateral va a la derecha). Usamos `order`/áreas sólo entre bloques completos, nunca dentro de texto, para que lector de pantalla y orden visual coincidan en ambos layouts (en móvil DOM = visual; en desktop la banda "baja" visualmente pero sigue siendo el 3er bloque en DOM: aceptable porque es contenido independiente, con su propio h2).
- **Columna lateral (aside)**: en móvil sus tres módulos se reparten: "En audio hoy" se funde con la banda (misma información; no duplicar), "Hoy en Whitepaper" va después de la imagen líder, "Conoce a…/Movimientos/Gráfica" van al final de "Lo último" como ítems con filete. Controlar con clases de visibilidad, no con duplicar HTML.
- **Lo último 8/4 → 1 col**: la lista mantiene thumb a la izquierda (96×96) para conservar el ritmo de "periódico" y la densidad; el `* * *` se mantiene.
- **Productos 4×2 → 2×4**: celdas de 165 px; nombre a 22 px; descripción a 1 línea (clamp) y se muestra completa en `:focus`/tap (expandir con `<details>` no: mejor mostrar siempre 2 líneas a 15 px; cabe). Filetes: en móvil `border-top` en todas y `border-left` en las de la derecha.
- **Podcasts 4 col → carrusel**: tarjeta 280 ancho, `scroll-snap-align: start`, `scroll-padding-left: 20px`. En `sm` (600–899): 2 col en grid, sin carrusel.
- **Video 1 grande + 2 → 1 grande + 2 filas** de thumb 120×68 + título 17.
- **Suscripción 6/6 → 1 col**: precio y botón primero; expectativas después (en desktop el ojo lee izquierda→derecha: promesa→precio; en móvil arriba→abajo: precio→promesa, porque el usuario que llega aquí ya scrolleó toda la página y busca el botón).
- **Testimonios 3 → carrusel 1**; cifras 3 col → 3 filas con filetes.
- **Footer 4 col → acordeones**.
- **Barra utilitaria**: en móvil se funde con el header (h56): ≡, wordmark, ▶, Suscribirse. La fecha/folio baja a una línea propia de 28 px no sticky. "Iniciar sesión" va al menú y al bloque de suscripción.
- Imágenes: `aspect-ratio` fijo por componente (16:10 líder, 1:1 arte, 16:9 video, 1:1 thumbs móviles) para que el reflow no mueva nada.

### 7.3 Pruebas mínimas antes de entregar
- 390×844 (iPhone), 768×1024 (iPad vertical, cae en `sm`/`md`), 1280×720 (laptop chica: doblez a 620), 1440×900, 1920×1080 (contenedor centrado, márgenes de papel).
- Zoom 200 % en 1280; modo lectura de Safari (la nota líder debe salir como artículo); VoiceOver en iOS para el reproductor; Tab completo de principio a fin en desktop; `prefers-reduced-motion`; sin JS (todo navega a Substack).

---

## Anexo A — Mapa de datos `content.json` (lo que el JS espera)
```json
{
  "generated_at": "2026-11-05T06:55:00-06:00",
  "edition_number": 1842,
  "lead": {"kicker":"Principales","title":"…","deck":"…","author":"Daniela Dib","author_url":"…","date":"2026-11-04","read_min":12,"paid":true,"url":"https://www.whitepaper.mx/p/…","image":{"src":"…","alt":"…","caption":"…"}},
  "today": {"title":"Ternium; todos son 'el más grande'; NBA en México…","url":"…","items":["NBA en México","Flying Tiger","Wegovy"],"audio":{"full_sec":432,"sample_url":"/media/muestras/2026-11-05.mp3","sample_sec":90}},
  "latest": [ {"kicker":"Hoy","date":"2026-11-05","title":"…","deck":"…","author":"…","read_min":6,"paid":true,"url":"…","thumb":"…"} ],
  "podcasts": [ {"show":"Whitepaper 10","free":true,"title":"Ep. 214 · …","deck":"…","date":"…","duration_sec":2320,"audio_url":"https://….mp3","episode_url":"…","show_url":"…","art":"…","spotify":"…","apple":"…"} ],
  "videos": [ {"series":"…","title":"…","deck":"…","duration_sec":2520,"url":"…","thumb":"…","trailer_embed":null} ],
  "principales": [ {"title":"…","url":"…"} ],
  "overview": {"title":"…","url":"…","date":"…"},
  "event": {"title":"…","city":"…","date":"…","url":"…"}
}
```

## Anexo B — Lo que NO hacer (resumen para quien construye)
- No pop-ups, no barras de promoción, no countdowns, no autoplay.
- No botones rojos con texto blanco (contraste insuficiente); el rojo es filete, cifra, ▶ y foco.
- No sombras, no bordes redondeados > 2 px salvo los círculos de ▶ y el thumb del range; todo se separa con filetes.
- No texto bajo 12 px; no gris más claro que #6b6b6b para texto.
- No hover-only; no carrusel sin botones; no `outline: none`.
- No inglés en UI ("Listen now" → "Escuchar"; "Watch now" → "Ver").
- No duplicar el HTML de la columna lateral para móvil: mover con grid areas y clases de visibilidad.
- No cargar iframes de Spotify/Apple/YouTube en el home.

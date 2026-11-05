# 02 — DISEÑO GRÁFICO · Home de Whitepaper.mx
Director de arte editorial · 5 de noviembre de 2026
Documento de especificación visual para quien construya el HTML/CSS. Todo lo que aquí se decide es final salvo lo marcado [ABIERTO].

Activos revisados: wordmark (logo.png), mockup del newsletter, retratos a pluma (Alicia Arias), collage de recortes (NU), gráficas a mano (Bimbo, BMV), ilustraciones de objeto (Libros, Leica), fuentes locales, landing Kali × Whitepaper, CSS real de The Free Press y del Substack actual de Whitepaper.

Hallazgos que condicionan el diseño:
- Substack actual de Whitepaper: cuerpo Spectral, titulares en system sans (SF Pro) 700, acento #FF0000, fondo #FFFFFF, tinta #363737. Es decir: hoy el sitio ya es "Spectral + sans", solo que con una sans genérica y un rojo que vibra.
- The Free Press: acento #f9303d, tinta #363737, grises #f0f0f0 / #dddddd / #b7b7b7 / #929292 / #515151, titulares Lora 600, fecha en folio "11.05.26", CTAs "Listen now" / "Watch now" / "View all episodes". Filetes de 1px, nunca más gruesos. Lo tomamos como estructura, no como piel.
- Las ilustraciones de marca tienen FONDO BLANCO (#FFFFFF) y trazo negro con tramas (hatching, puntos de medio tono) y una sola nota roja (firma "w", círculo rotulador). Esto decide el papel y el tratamiento de imagen (ver §3).

---

## 1. CONCEPTO VISUAL

**"Edición impresa, tirada digital."** Whitepaper no imita un periódico: se comporta como uno. La oda al print media se traduce en reglas de composición, no en texturas: la página es una hoja de papel ligeramente cálida en la que la tinta negra hace todo el trabajo (titulares, filetes, marcos, ilustración a pluma) y el rojo aparece una sola vez por pantalla, como el sello del corrector. Cero sombras, cero gradientes, cero esquinas redondeadas, cero papel arrugado o texturas de grano: el skeuomorfismo barato se evita porque lo "impreso" lo dicen la retícula de columnas, los filetes de distinto grosor, los kickers en versalitas, los folios con fecha y número de edición, las capitulares, los bylines con guion largo y el colofón al pie. Referencias concretas y qué tomar de cada una: **The Free Press** → la arquitectura (masthead, nota líder con imagen vertical, listas con "* * *", bandas de shows con "Escuchar/Ver", folio de fecha 05.11.26); **Financial Times** → la disciplina del papel teñido y el uso de un solo color de acento como señal de marca, con cifras y gráficas en tinta; **The Economist** → kickers cortos en versalitas que nombran la sección antes del titular y gráficas austeras con fuente al pie; **Die Zeit / Le Monde** (edición impresa) → doble filete sobre las cabezas de sección, hairlines verticales entre columnas, mucha jerarquía con poquísimos tamaños; **The New Yorker** → ilustración a pluma en lugar de fotografía, ornamentos tipográficos (❧, ⁂) como separadores, y la convicción de que la tipografía bien puesta ya es el diseño. De **The Bulwark** solo tomamos la lógica: cada producto tiene casa, nombre y rostro.

---

## 2. SISTEMA TIPOGRÁFICO

Tres familias, tres oficios. No se añaden más.

| Familia | Oficio | Pesos usados |
|---|---|---|
| **Instrument Serif** (Regular + Italic) | Voz de display: titular de nota líder, H2 de sección, pull quotes, cifras grandes, precio. Solo a 32 px o más; por debajo pierde contraste y parece Times. | 400, 400 italic |
| **Spectral** | Voz de lectura: titulares de tarjeta (20–30 px), bajadas/decks, cuerpo, testimonios en cuerpo, descripciones de producto. Es la fuente del newsletter: conecta el home con lo que el suscriptor recibe. | 300 (Light) para bajadas grandes, 400, 400 italic, 500 (Medium) titulares de tarjeta, 600 (SemiBold) nombres de empresas en línea, 700 solo para "Comentario Whitepaper:" |
| **Inter** (variable, opsz) | Voz de maquinaria: masthead secundario, nav, kickers, bylines, folios, fechas, duración, botones, leyendas, pies de gráfica, precios en tabla, footer. Nunca en titulares ni cuerpo de lectura. | 400, 500, 600 |

### 2.1 Wordmark
**Decisión: el masthead va como IMAGEN (SVG vectorizado del logo.png; mientras no exista el SVG, PNG a 2x con `height` fijo).** La sans geométrica del logo (vértices agudos en W/A, R de pata recta) no coincide con Inter; un wordmark re-tipeado se vería "casi igual", que es peor que distinto. El archivo es el activo de marca y debe ser idéntico al del newsletter y al de las gráficas (ver pie de la gráfica BMV: "WHITEPAPER" en la misma sans tracking amplio).
- Masthead desktop: alto 36 px (ancho resultante ≈ 420 px). Mobile: alto 22 px.
- Versión texto permitida SOLO para usos pequeños y secundarios (sticky nav al hacer scroll, footer, folio de gráficas, meta): `Inter 500, uppercase, letter-spacing: 0.42em, font-size 11–13 px`. Esa es la aproximación tipográfica del logo y se declara como token `--wordmark-text`.
- Sello/firma "w" roja de las ilustraciones: no se reproduce en UI; vive solo dentro de las ilustraciones.

### 2.2 Escala tipográfica (desktop ≥ 1024 px → mobile ≤ 600 px)
Base 16 px = 1rem. Line-height en valores sin unidad. Letter-spacing en em.

| Rol | Familia / peso | Desktop | Mobile | line-height | tracking | Notas |
|---|---|---|---|---|---|---|
| Titular nota líder (H1) | Instrument Serif 400 | 64 px / 4rem | 40 px / 2.5rem | 1.0 | -0.015em | `text-wrap: balance`. Máx. 3 líneas. Itálica permitida en una palabra clave. |
| H2 de sección ("Audio", "Principales") | Instrument Serif 400 | 40 px / 2.5rem | 30 px / 1.875rem | 1.05 | -0.01em | Siempre bajo doble filete, con número de sección a la izquierda (ver §4). |
| Titular tarjeta grande | Spectral 500 | 28 px / 1.75rem | 22 px / 1.375rem | 1.15 | -0.005em | |
| Titular tarjeta estándar | Spectral 500 | 22 px / 1.375rem | 19 px / 1.1875rem | 1.2 | 0 | |
| Titular lista / breve | Spectral 500 | 18 px / 1.125rem | 17 px | 1.3 | 0 | |
| Bajada / deck líder | Spectral 300 | 22 px / 1.375rem | 18 px | 1.4 | 0 | Color tinta-2 (gris oscuro). |
| Bajada tarjeta | Spectral 400 | 16 px / 1rem | 15 px | 1.5 | 0 | Máx. 3 líneas (`-webkit-line-clamp: 3`). |
| Cuerpo lectura (about, producto) | Spectral 400 | 18 px / 1.125rem | 17 px | 1.6 | 0 | Medida 60–68 caracteres (`max-width: 36rem`). Nombres de empresas en Spectral 600, como en el newsletter. |
| Pull quote testimonio | Instrument Serif 400 italic | 32 px / 2rem | 24 px | 1.2 | -0.005em | Comillas latinas « » o tipográficas “ ” en tinta, sin ícono de comillas. |
| Cifra display (14,500 / 65 %) | Instrument Serif 400 | 72 px / 4.5rem | 48 px / 3rem | 0.95 | -0.02em | `font-variant-numeric: lining-nums tabular-nums`. En tinta; el rojo solo si es LA cifra de la pantalla. |
| Kicker / sección (sobre titular) | Inter 600 | 11 px / 0.6875rem | 11 px | 1 | 0.14em | `text-transform: uppercase`. Tinta. El rojo solo para el kicker "Comentario Whitepaper". |
| Byline | Inter 500 | 13 px / 0.8125rem | 12 px | 1.3 | 0.01em | "Por Daniela Dib — 05.11.26". Nombre en 500, resto en 400 gris-2. |
| Folio / fecha / edición | Inter 400 | 12 px / 0.75rem | 11 px | 1 | 0.08em | Uppercase. "Ciudad de México · Miércoles 5 de noviembre de 2026 · Edición N.º 1,482". `tabular-nums`. |
| Meta de audio/video (duración, episodio) | Inter 500 | 12 px | 11 px | 1 | 0.06em | Uppercase. "EP. 212 · 41 MIN". |
| Botón | Inter 600 | 13 px / 0.8125rem | 13 px | 1 | 0.08em | Uppercase. |
| Nav | Inter 500 | 13 px | 14 px (menú abierto) | 1 | 0.04em | Sentence case, no uppercase (deja el uppercase para kickers/botones). |
| Leyenda / pie de imagen / fuente de gráfica | Inter 400 | 12 px | 11 px | 1.4 | 0.01em | Gris-2. "Fuente: Reporte anual Bimbo 2025" tal cual aparece en las gráficas. |
| Colofón (footer) | Inter 400 | 12 px | 11 px | 1.5 | 0.02em | |

Reglas de aplicación:
- **Itálicas**: Instrument Serif Italic para una palabra de énfasis en H1/H2 (máx. una por titular) y para pull quotes completos. Spectral Italic para títulos de obra, extranjerismos (*market cap*, *hard discount*) y para la etiqueta "(Redacción Whitepaper)" como en el newsletter. Nunca itálica en Inter.
- **Versalitas**: Spectral trae `smcp`. Usar `font-variant-caps: small-caps` en Spectral para kickers DENTRO de texto corrido (ej. "Spotlight en…", "Conoce a…") y para el nombre del show dentro de una bajada. Los kickers sueltos sobre titulares van en Inter uppercase, no en versalitas, para separar voz editorial de voz de maquinaria. Verificado en los TTF locales: Spectral incluye `smcp`, `c2sc`, `onum`, `lnum`, `pnum`, `tnum` y `ornm`.
- **Cifras**: Spectral trae cifras elzevirianas (`onum`) y alineadas (`lnum`); Instrument Serif NO tiene variantes de cifra (solo alineadas proporcionales), así que en cifras display y precio la alineación tabular no es posible y se compensa alineando a la izquierda. Inter sí tiene `tnum` y `case` (úsese `case` en kickers uppercase para paréntesis y guiones a altura de mayúscula). Cuerpo de lectura: `font-variant-numeric: oldstyle-nums proportional-nums` (cifras que bailan con las minúsculas, muy print). Tablas, precios, folios, duraciones y cifras display: `lining-nums tabular-nums`. Separador de miles con coma y espacio fino antes de % ("65 %") siguiendo el estilo del newsletter ("$23,000 millones").
- **Capitular**: solo en el bloque "Qué es Whitepaper" (texto de la promesa). `::first-letter` en Instrument Serif 400, 4 líneas de alto (`font-size: 5.2rem; float: left; line-height: 0.8; padding: 0.1em 0.12em 0 0`). Una sola capitular en todo el home.
- **Guiones**: raya (—) para bylines e incisos; guion corto (–) para rangos "6–8 min". Nunca doble guion.
- **Negritas en cuerpo**: Spectral 600, no 700, para nombres de empresas y personas (eco directo del newsletter: "Tiendas Neto, de Grupo Salinas").
- **Rendering**: `-webkit-font-smoothing: antialiased` solo en Inter; dejar Spectral e Instrument con el antialias por defecto (subpixel) para que conserven peso en pantalla clara.

---

## 3. COLOR

### 3.1 Paleta (hex exactos)

| Token | Hex | Uso |
|---|---|---|
| `--paper` | **#FAF9F7** | Fondo de página. Cálido pero casi blanco; se mantiene de las landings anteriores. |
| `--paper-2` | **#F2F0EB** | Fondo de bloques "sección especial" (Overview, precio, colofón). Es la única segunda superficie. |
| `--white` | **#FFFFFF** | Solo dentro de componentes que simulan la pantalla del teléfono/newsletter y como `--on-ink`. |
| `--ink` | **#141414** | Texto principal, titulares, filetes estructurales, marcos de imagen, botón primario. |
| `--ink-2` | **#3A3936** | Bajadas, cuerpo largo (menos cansancio que #141414 en 18 px Spectral). |
| `--ink-3` | **#6B6762** | Bylines, meta, leyendas. Contraste 5.6:1 sobre papel. |
| `--ink-4` | **#9B968E** | Placeholders y texto decorativo (≥ 18 px); NO para texto informativo pequeño (2.8:1). |
| `--rule` | **#141414** | Filetes estructurales (ver §4). Los filetes son tinta, no gris. |
| `--rule-soft` | **#D9D5CE** | Hairline interna de listas y separador de celdas. |
| `--red` | **#D7261D** | Rojo Whitepaper. |
| `--red-ink` | **#B81F17** | Hover/active del rojo y rojo sobre `--paper-2`. |
| `--red-tint` | **#FBE9E7** | Única tinta clara permitida: fondo de un `<mark>` o de la celda "Más popular" en precio. Usar una vez. |

**Decisión sobre el rojo: #D7261D.** Justificación:
- #FF0000 (Substack actual) vibra en pantalla, es el rojo "de error" del sistema operativo y falla AA para texto pequeño (4.0:1 sobre blanco). En papel el rojo del newsletter se ve bien porque es tinta plana; en pantalla hay que bajarle luminancia.
- #f9303d es el de The Free Press: copiarlo nos haría ver como su tema. Falla AA (3.8:1).
- #ee4d3a es coral/salmón, pertenece a la co-marca Kali y pierde seriedad junto a tinta negra; falla AA (3.65:1).
- #D7261D pasa AA para texto pequeño sobre papel y blanco (4.8:1 / 5.0:1), por lo que las **cifras rojas dentro del cuerpo** (recurso central del newsletter: "destinará", "1,700", "2024") son legibles y accesibles. Visualmente es el rojo de rotulador de la gráfica Bimbo y de la firma "w": un rojo de tinta, no de pantalla. Es además el rojo de Leica, marca de la persona canónica.

### 3.2 Regla de uso del rojo
El rojo es una **anotación sobre la página, no un color de interfaz**. Presupuesto: **un elemento rojo por viewport** (desktop) además de las cifras en línea. Lista cerrada de usos permitidos:
1. Filete vertical izquierdo de 3 px del "Comentario Whitepaper" (tal cual en el newsletter) y de pull quotes de testimonio.
2. Cifras clave en línea dentro de un párrafo Spectral (`<b class="num">`), peso 400 o 500, no negrita.
3. Una cifra display por pantalla (p. ej. "14,500" suscriptores de pago) cuando es el dato que sostiene el bloque.
4. Estado hover/focus de enlaces (`text-decoration-color: var(--red)`; el texto sigue en tinta).
5. El punto "en vivo"/"nuevo" (●) de 6 px junto a "Hoy" en el folio, si la edición del día ya salió.
6. Firma "w" dentro de ilustraciones (ya viene en el archivo).
Prohibido: fondos rojos de sección, botones primarios rojos (el primario es tinta; ver §5.8), íconos rojos, etiquetas/badges rojas, subrayados rojos permanentes, degradados.

### 3.3 Tratamiento de imágenes
Las ilustraciones de marca ya resuelven la dirección de arte; el sitio solo debe no estorbar.
- **Ilustraciones a pluma (retratos, objetos, gráficas)**: se colocan **sin marco** y con `mix-blend-mode: multiply` para que su fondo #FFFFFF desaparezca sobre `--paper` y la tinta "se imprima" sobre el papel. Esto es obligatorio: sin multiply, cada ilustración se vería como un rectángulo blanco sobre crema. Nunca escalarlas por debajo de 240 px de ancho (las tramas se vuelven moiré); en móvil, ancho completo.
- **Fotografías** (hosts del podcast, eventos, entrevistados): siempre **blanco y negro** (`filter: grayscale(1) contrast(1.05)`) con **marco de 1 px tinta** (`border: 1px solid var(--ink)`), sin radio. Encuadre vertical 4:5 para la nota líder (como FP), 3:2 para tarjetas. Nada de duotono rojo: la fotografía es documental, no decorativa.
- **Arte de podcast (cuadrado 1:1)**: se muestra tal como lo entregue el show (puede tener color: es el único color legítimo además del rojo, porque es "la portada del disco"), con marco de 1 px tinta. Si el arte es a color, el bloque de audio se compone de forma que nunca haya más de tres portadas en pantalla.
- **Video (16:9)**: still en B/N con marco 1 px tinta; botón "Ver" superpuesto en la esquina inferior izquierda (ver §5.5). Sin ícono de play gigante centrado.
- **Tramas**: la trama diagonal del collage NU (hatching 45°) se puede usar como **fondo de un solo bloque** por página (p. ej. la banda de "Whitepaper 10", podcast gratuito) vía SVG pattern de líneas 1 px tinta cada 6 px al 100 % de opacidad sobre `--paper-2`, con el contenido sobre un rectángulo `--paper` con marco 1 px: eso reproduce el collage de recortes sobre trama. No usar como textura general.
- **Marco negro grueso** (3 px) solo para el mockup del newsletter/teléfono y para el bloque de la gráfica del día, imitando el marco de las gráficas (título dentro de caja de trazo irregular en las piezas originales; en web lo hacemos con 3 px rectos).

---

## 4. GRID Y RETÍCULA

- **Ancho máximo del contenido**: 1240 px (77.5rem). Márgenes laterales: 48 px desktop, 32 px tablet, 20 px móvil. El masthead y los filetes de borde a borde del contenedor se alinean a ese ancho; nada va full-bleed (una hoja tiene márgenes).
- **Columnas**: 12 columnas, gutter 24 px (1.5rem) desktop; 8 columnas / 20 px tablet (601–1023 px); 4 columnas / 16 px móvil. Las composiciones de periódico se arman en 12 así:
  - Nota líder: 7 columnas texto + 5 columnas imagen vertical (o 8+4 si la imagen es ilustración cuadrada).
  - Tres tarjetas: 4+4+4. Lista lateral "Últimas": 8 contenido + 4 lista.
  - Grid de podcasts: 3+3+3+3 (cuatro shows); grid de video: 6+6 (dos grandes) o 4+4+4.
  - Bloque de producto: 2 (número + kicker) + 6 (texto) + 4 (ilustración).
- **Columnas de periódico (texto en columnas)**: solo en el bloque "Qué es Whitepaper": `column-count: 2; column-gap: 48px; column-rule: 1px solid var(--rule-soft)` en desktop; 1 columna en móvil. Capitular al inicio (ver §2.2).
- **Ritmo vertical**: base 8 px. Espaciado de sección 96 px desktop / 64 px móvil entre bloques. Dentro de tarjeta: 12 px kicker→titular, 8 px titular→bajada, 16 px bajada→byline.
- **Filetes verticales**: entre columnas de tarjetas hermanas, hairline 1 px `--rule-soft` mediante `border-left` del ítem (no `::after` absolutos); se ocultan en móvil y se reemplazan por filete horizontal.

### 4.1 Filetes (reglas) — vocabulario cerrado
| Nombre | Spec | Cuándo |
|---|---|---|
| **Hairline** | `1px solid var(--rule-soft)` #D9D5CE | Entre ítems de lista, entre tarjetas, columnas internas, celdas de precio. |
| **Filete fino de tinta** | `1px solid var(--ink)` | Bajo la barra utilitaria, sobre el byline de la nota líder, marco de fotos, borde del botón secundario. |
| **Doble filete** | `border-top: 3px double var(--ink)` (dos líneas de 1 px con 1 px de aire) | Cabeza de cada sección principal (encima del H2 + número). Es la firma de "edición impresa"; un doble filete por sección, nunca dos seguidos. |
| **Filete grueso** | `3px solid var(--ink)` | Bajo el masthead (separa cabecera de página), sobre el colofón, filete izquierdo rojo del comentario/pull quote (`border-left: 3px solid var(--red)`). |
| **Filete de cierre** | `1px solid var(--ink)` + 8 px + `1px solid var(--ink)` (doble ancho, al pie de página) | Solo antes del colofón. |

Nunca: filetes grises de 2 px, bordes punteados, sombras que simulen bordes.

### 4.2 Ornamentos tipográficos permitidos
- `* * *` (tres asteriscos con espacios, Inter 400 13 px, tracking 0.6em, centrado, color tinta) como separador entre grupos en listas largas ("Últimas"). Igual que FP.
- `⁂` (asterismo) solo como separador final de la sección de testimonios.
- `❧` (floral heart) una sola vez: al final del colofón, antes de "Whitepaper, Ciudad de México". Es el guiño New Yorker; más de uno se vuelve disfraz. Spectral trae ornamentos propios (`font-feature-settings: "ornm"`); si alguno es una hoja o asterismo, preferirlo al glifo Unicode para que el ornamento sea de la misma mano que el cuerpo.
- **Numeración de secciones**: cada sección principal lleva número en Inter 500 12 px tracking 0.1em: "N.º 01 — Texto", "N.º 02 — Audio", "N.º 03 — Video", "N.º 04 — Comunidad". Se coloca a la izquierda del H2 sobre el doble filete, como cabeza de sección de revista.
- **Folios**: el folio de fecha y edición vive bajo el masthead; un segundo folio en el pie ("Edición N.º 1,482 · Impreso digitalmente en CDMX"). Formato de fecha largo en el masthead ("Miércoles 5 de noviembre de 2026") y corto numérico en bylines ("05.11.26", día.mes.año, el orden mexicano).
- **Guion largo como viñeta** en listas de productos (— Whitepaper Hoy) en lugar de bullets.
- Prohibidos: ✓, →, ★ decorativas (una estrella solo si marca "selección de la casa" en lista, en Inter como carácter ★ de 10 px tinta), emojis, íconos de línea genéricos.

---

## 5. COMPONENTES VISUALES

### 5.1 Barra utilitaria + Masthead + Folio
- **Barra utilitaria** (alto 40 px, fondo `--paper`, filete fino de tinta abajo): izquierda, el folio del día en Inter 400 12 px uppercase tracking 0.08em "Ciudad de México · Miércoles 5 de noviembre de 2026 · Edición N.º 1,482"; derecha, enlaces "Iniciar sesión" (Inter 500 13 px) y botón primario pequeño "Suscribirse" (alto 32 px). En móvil, solo la fecha corta "05.11.26" y "Suscribirse".
- **Masthead** (padding 40 px 0 28 px desktop / 24 px 0 16 px móvil): wordmark centrado (SVG, alto 36 px / 22 px). Debajo, a 12 px, la tagline en Spectral Italic 400 16 px `--ink-3`, centrada: "Lo que la comunidad empresarial necesita saber." Bajo todo, **filete grueso 3 px tinta** a todo el ancho del contenedor.
- **Nav de secciones** (alto 44 px, inmediatamente bajo el filete grueso, hairline abajo): Inter 500 13 px, centrado, separadores "·" en `--ink-4`: Hoy · Principales · Overview · Audio · Video · Eventos · Directorio · Cursos · Store · Nosotros. Ítem activo con `border-bottom: 2px solid var(--ink)` a ras de la hairline. Al hacer scroll (≥ 320 px) la barra se vuelve sticky y el wordmark aparece a la izquierda como texto (`--wordmark-text`, 12 px) sin animaciones de altura.

### 5.2 Nota líder
Grid 7+5 (texto izquierda, imagen derecha, como FP). Texto: kicker Inter 600 11 px uppercase ("Principales" o el nombre de la serie) → 12 px → H1 Instrument Serif 64 px → 16 px → deck Spectral 300 22 px `--ink-2` (máx. 2 líneas) → 20 px → filete fino de tinta → 10 px → byline "Por Daniela Dib — 05.11.26 · 14 min de lectura". Imagen: ilustración a pluma con multiply (sin marco) o foto B/N 4:5 con marco 1 px; pie de imagen en Inter 400 12 px `--ink-3` alineado a la izquierda bajo la imagen. En móvil la imagen va primero, el texto después. Debajo de la nota líder: hairline y tres breves en 4+4+4 con filetes verticales entre ellos.

### 5.3 Tarjeta de nota (artículo)
- **Con imagen**: imagen arriba (3:2, B/N o ilustración multiply), 16 px, kicker, 10 px, titular Spectral 500 22 px, 8 px, bajada Spectral 400 16 px (3 líneas máx.), 14 px, byline Inter 13 px. Sin fondo, sin borde, sin radio; separación entre tarjetas por hairline vertical.
- **Sin imagen**: igual, pero el titular sube a 24 px y la bajada puede ser de 4 líneas. En listas ("Últimas"), formato de renglón: kicker + titular 18 px a la izquierda y fecha "05.11.26" en Inter 12 px tabular a la derecha, separados por hairline; cada 5 ítems, `* * *`.
- Hover: el titular recibe `text-decoration: underline; text-decoration-color: var(--red); text-underline-offset: 0.12em; text-decoration-thickness: 1px`. Nada se mueve ni se eleva.

### 5.4 Tarjeta de podcast (arte cuadrado) — protagonista del bloque Audio
Objetivo: que audio sea protagonista sin sonido ni cromo. Lo logramos con **tamaño, orden y un botón que parece un sello de imprenta**, no con waveforms animadas.
- Grid 3+3+3+3: cuatro shows (Whitepaper, hoy — audio · Whitepaper 10 · Dark Side of the Road · Arquitectura de Negocios). El show gratuito (Whitepaper 10) se puede destacar con la trama diagonal de fondo (§3.3) ya que es la puerta de entrada.
- Anatomía: arte 1:1 ancho completo de la columna con marco 1 px tinta → 14 px → **nombre del show como kicker** Inter 600 11 px uppercase + a la derecha, en la misma línea, la etiqueta de acceso "GRATIS" o "SUSCRIPTORES" en Inter 500 10 px tracking 0.12em `--ink-3` (sin badge, sin fondo) → 8 px → título del episodio Spectral 500 20 px (2 líneas) → 6 px → meta Inter 500 12 px uppercase "EP. 212 · 41 MIN · 05.11.26" → 14 px → **botón "Escuchar"** (secundario, borde 1 px tinta, con el glifo ▶ de 8 px en Inter a la izquierda del texto; en hover se invierte a tinta/papel) y al lado, enlace Inter 500 13 px "Todos los episodios →" (la flecha es carácter →, no ícono).
- Hosts: bajo el kicker, línea "Con René Lankenau y Karla" en Spectral Italic 15 px `--ink-2`. Retrato a pluma circular de 40 px NO: las caras van en la página del show, en el home solo el nombre, para no competir con el arte.
- Reproductor en página: si se incrusta el player de Substack/Spotify, va dentro de una caja con marco 1 px tinta y padding 16 px, fondo `--paper-2`, sin su cromo de color (`filter: grayscale(1)` sobre el iframe no es confiable; preferir enlace).

### 5.5 Tarjeta de video (16:9) — protagonista del bloque Video
- Grid 6+6 para dos piezas grandes; si hay más, fila adicional 4+4+4.
- Still 16:9 en B/N con marco 1 px tinta. **Botón "Ver"** superpuesto en la esquina inferior izquierda del still, a 12 px del borde, como una etiqueta tipográfica: fondo `--paper`, texto Inter 600 13 px uppercase tinta, borde 1 px tinta, padding 10 px 14 px, con glifo ▶. Es una "pegatina de papel" sobre la foto, no un círculo de play.
- Bajo el still: kicker "Video · Entrevista" + duración a la derecha "52 MIN" → titular Spectral 500 24 px → bajada 16 px → byline "Con René Lankenau · 03.11.26".
- Si el still es un retrato de entrevistado, se admite recorte con el nombre del entrevistado en Spectral Italic como pie.

### 5.6 Bloque de producto ("Qué recibes")
Una fila por producto, estilo índice de revista, con hairline entre filas. Grid 2+6+4:
- Columna 1 (2 col): número de orden Instrument Serif 40 px ("01") y debajo kicker de tipo Inter 600 11 px ("TEXTO · DIARIO").
- Columna 2 (6 col): nombre del producto Spectral 500 26 px → descripción Spectral 400 17 px `--ink-2` (2–3 líneas) → línea meta Inter 500 12 px uppercase "LUN–VIE · 7:00 · 6–8 MIN DE LECTURA · SUSCRIPTORES" → enlace "Ver sección →".
- Columna 3 (4 col): ilustración de marca con multiply (Libros para Overview, Leica para estilo, retrato para "Conoce a…", gráfica para Hoy).
Agrupación por capítulos con cabeza de sección numerada y doble filete: N.º 01 Texto / N.º 02 Audio / N.º 03 Video / N.º 04 Comunidad (Eventos, Directorio, Cursos, Store).

### 5.7 Mockup del newsletter
El teléfono del mockup.jpg se puede reutilizar, pero el sitio debe mostrar el newsletter como **hoja**, no como teléfono: una columna de 420 px con marco 3 px tinta, fondo blanco, padding 32 px, y dentro el fragmento real (Spectral 17 px, "Hard discount" en Spectral Italic 600, filete rojo 3 px del comentario, cifras en rojo). Sin sombra, sin notch. Es el único rectángulo blanco puro de la página y funciona como "página dentro de la página".

### 5.8 Botones
- **Primario**: fondo `--ink`, texto `--paper`, Inter 600 13 px uppercase tracking 0.08em, alto 44 px (32 px en barra utilitaria), padding 0 20 px, `border: 1px solid var(--ink)`, radio 0. Hover: fondo `--paper`, texto `--ink` (inversión), transición 120 ms solo en color. Texto: "Suscribirse" / "Suscribirme por $1,590 al año". Un primario por bloque.
- **Secundario**: fondo transparente, texto tinta, borde 1 px tinta, mismas medidas. Hover: inversión a tinta/papel. Usado para "Escuchar", "Ver", "Todos los episodios" (cuando sea botón).
- **Terciario (enlace)**: Inter 500 13 px tinta, flecha → final, subrayado solo en hover con `text-decoration-color: var(--red)`.
- Focus visible: `outline: 2px solid var(--ink); outline-offset: 3px`. Nunca rojo como fondo de botón.

### 5.9 Pull quote de testimonio
Ancho máx. 8 columnas, centrado o alineado al grid: `border-left: 3px solid var(--red)` + padding-left 28 px. Texto Instrument Serif Italic 32 px tinta, comillas tipográficas incluidas en el texto. Debajo, 16 px, atribución Inter 500 13 px: "— Carlos G. Gaytán, *El Núcleo*" (nombre en tinta, empresa en Spectral Italic `--ink-3`). Para carrusel/lista de varios testimonios, formato de tres columnas con filetes verticales y texto Spectral 400 18 px (no Instrument) con el mismo filete rojo solo en el primero. Nunca avatares, nunca estrellas de rating.

### 5.10 Bloque de precio
Fondo `--paper-2`, filete grueso arriba y abajo (3 px tinta). Dos columnas separadas por hairline vertical: **Anual** (izquierda, el que empujamos) y **Mensual**. Cada celda: kicker Inter 600 11 px ("ANUAL · AHORRAS 30 %") → precio Instrument Serif 72 px lining tabular "$1,590" con "MXN / año" en Inter 500 13 px uppercase al lado → lista de lo incluido con guiones largos en Spectral 16 px → botón primario (anual) / secundario (mensual). La celda anual lleva, en su esquina superior, la única etiqueta con `--red-tint`: "La opción de la mayoría" en Inter 500 11 px tinta sobre fondo #FBE9E7, sin borde ni radio. Debajo del bloque, nota Inter 12 px `--ink-3`: "Suscripción y pago en Substack. Cancela cuando quieras." Opción corporativa como enlace terciario: "Suscripción para equipos →".

### 5.11 Cifras de prueba social
Fila de tres o cuatro cifras separadas por filetes verticales: cifra Instrument Serif 72 px tinta ("14,500+", "135,000+", "65 %", "lun–vie") y debajo leyenda Inter 500 12 px uppercase `--ink-3` ("SUSCRIPTORES DE PAGO"). Solo UNA de las cifras en rojo (la de pago). Es la única pantalla en que una cifra display va en rojo.

### 5.12 Footer tipo pie de imprenta (colofón)
Filete de cierre (1 px + 8 px + 1 px tinta). Fondo `--paper-2`. Cuatro columnas Inter 400 13 px con cabezas Inter 600 11 px uppercase: Secciones / Audio y video / Comunidad / Whitepaper (Nosotros, Soporte, Suscripción corporativa, Store). Bajo las columnas, hairline y el **colofón** en Spectral 400 14 px `--ink-2`, centrado, medida 60 ch: "Whitepaper se escribe en Ciudad de México y se publica de lunes a viernes. Compuesto en Spectral, Instrument Serif e Inter. Las ilustraciones son a pluma y tinta; las gráficas, hechas a mano. ❧" Debajo, wordmark pequeño como texto (`--wordmark-text`), legales en Inter 11 px `--ink-3` y redes como texto (Spotify · Apple Podcasts · YouTube · LinkedIn · X), sin íconos.

---

## 6. TOKENS CSS Y @font-face (listos para pegar)

```css
/* ============================================================
   WHITEPAPER — Tokens de diseño · Home · Nov 2026
   Fuentes locales en assets/fonts/ (copiar desde /Fonts).
   Convertir a .woff2 antes de producción; los TTF funcionan como interim.
   ============================================================ */

@font-face {
  font-family: "Instrument Serif";
  src: url("assets/fonts/InstrumentSerif-Regular.ttf") format("truetype");
  font-weight: 400; font-style: normal; font-display: swap;
}
@font-face {
  font-family: "Instrument Serif";
  src: url("assets/fonts/InstrumentSerif-Italic.ttf") format("truetype");
  font-weight: 400; font-style: italic; font-display: swap;
}

/* Spectral: solo los pesos que el sistema usa (300/400/500/600/700 + itálicas 400/600). */
@font-face { font-family: "Spectral"; src: url("assets/fonts/Spectral-Light.ttf") format("truetype"); font-weight: 300; font-style: normal; font-display: swap; }
@font-face { font-family: "Spectral"; src: url("assets/fonts/Spectral-Regular.ttf") format("truetype"); font-weight: 400; font-style: normal; font-display: swap; }
@font-face { font-family: "Spectral"; src: url("assets/fonts/Spectral-Italic.ttf") format("truetype"); font-weight: 400; font-style: italic; font-display: swap; }
@font-face { font-family: "Spectral"; src: url("assets/fonts/Spectral-Medium.ttf") format("truetype"); font-weight: 500; font-style: normal; font-display: swap; }
@font-face { font-family: "Spectral"; src: url("assets/fonts/Spectral-SemiBold.ttf") format("truetype"); font-weight: 600; font-style: normal; font-display: swap; }
@font-face { font-family: "Spectral"; src: url("assets/fonts/Spectral-SemiBoldItalic.ttf") format("truetype"); font-weight: 600; font-style: italic; font-display: swap; }
@font-face { font-family: "Spectral"; src: url("assets/fonts/Spectral-Bold.ttf") format("truetype"); font-weight: 700; font-style: normal; font-display: swap; }

/* Inter variable (eje opsz + wght). El archivo se llama "Inter-VariableFont_opsz,wght.ttf":
   renombrar a Inter-Variable.ttf al copiarlo para evitar la coma en la URL. */
@font-face {
  font-family: "Inter";
  src: url("assets/fonts/Inter-Variable.ttf") format("truetype-variations"),
       url("assets/fonts/Inter-Variable.ttf") format("truetype");
  font-weight: 100 900; font-style: normal; font-display: swap;
}

:root {
  color-scheme: light only;

  /* ---- Color ---- */
  --paper:      #FAF9F7;
  --paper-2:    #F2F0EB;
  --white:      #FFFFFF;
  --ink:        #141414;
  --ink-2:      #3A3936;
  --ink-3:      #6B6762;
  --ink-4:      #9B968E;
  --rule:       var(--ink);
  --rule-soft:  #D9D5CE;
  --red:        #D7261D;
  --red-ink:    #B81F17;
  --red-tint:   #FBE9E7;
  --on-ink:     var(--paper);

  /* ---- Tipografía: familias ---- */
  --font-display: "Instrument Serif", "Times New Roman", Times, serif;
  --font-text:    "Spectral", Georgia, "Times New Roman", serif;
  --font-ui:      "Inter", -apple-system, "Helvetica Neue", Arial, sans-serif;

  /* ---- Tipografía: escala (desktop) ---- */
  --fs-h1:      4rem;      /* 64 */
  --fs-h2:      2.5rem;    /* 40 */
  --fs-h3:      1.75rem;   /* 28  titular tarjeta grande */
  --fs-h4:      1.375rem;  /* 22  titular tarjeta */
  --fs-h5:      1.125rem;  /* 18  titular lista */
  --fs-deck:    1.375rem;  /* 22  bajada líder */
  --fs-body:    1.125rem;  /* 18  cuerpo */
  --fs-small:   1rem;      /* 16  bajada tarjeta */
  --fs-quote:   2rem;      /* 32  pull quote */
  --fs-figure:  4.5rem;    /* 72  cifra display */
  --fs-kicker:  0.6875rem; /* 11 */
  --fs-meta:    0.75rem;   /* 12  folio, fecha, leyenda */
  --fs-byline:  0.8125rem; /* 13 */
  --fs-button:  0.8125rem; /* 13 */
  --fs-nav:     0.8125rem; /* 13 */

  /* ---- Tipografía: line-height ---- */
  --lh-tight:   1.0;
  --lh-display: 1.05;
  --lh-title:   1.2;
  --lh-deck:    1.4;
  --lh-body:    1.6;

  /* ---- Tipografía: tracking ---- */
  --ls-display: -0.015em;
  --ls-kicker:   0.14em;
  --ls-meta:     0.08em;
  --ls-button:   0.08em;
  --ls-wordmark: 0.42em;

  /* ---- Pesos ---- */
  --fw-light: 300; --fw-regular: 400; --fw-medium: 500; --fw-semibold: 600; --fw-bold: 700;

  /* ---- Espaciado (base 8) ---- */
  --sp-1: 0.25rem; --sp-2: 0.5rem; --sp-3: 0.75rem; --sp-4: 1rem; --sp-5: 1.5rem;
  --sp-6: 2rem;    --sp-7: 3rem;   --sp-8: 4rem;    --sp-9: 6rem;
  --section-gap: var(--sp-9);     /* 96 desktop */
  --card-gap:    var(--sp-5);     /* 24 = gutter */

  /* ---- Retícula ---- */
  --container: 77.5rem;           /* 1240 */
  --gutter:    1.5rem;            /* 24 */
  --margin:    3rem;              /* 48 */
  --measure:   36rem;             /* ~62 ch en Spectral 18 */
  --columns:   12;

  /* ---- Filetes ---- */
  --rule-hair:   1px solid var(--rule-soft);
  --rule-thin:   1px solid var(--ink);
  --rule-double: 3px double var(--ink);
  --rule-thick:  3px solid var(--ink);
  --rule-red:    3px solid var(--red);

  /* ---- Misc ---- */
  --radius: 0;                    /* no se negocia */
  --frame: 1px solid var(--ink);  /* marco de fotos y arte */
  --transition: 120ms ease-out;   /* solo color/opacity */
}

@media (max-width: 1023px) {
  :root { --margin: 2rem; --gutter: 1.25rem; --columns: 8; --section-gap: 5rem; }
}
@media (max-width: 600px) {
  :root {
    --margin: 1.25rem; --gutter: 1rem; --columns: 4; --section-gap: 4rem;
    --fs-h1: 2.5rem; --fs-h2: 1.875rem; --fs-h3: 1.375rem; --fs-h4: 1.1875rem; --fs-h5: 1.0625rem;
    --fs-deck: 1.125rem; --fs-body: 1.0625rem; --fs-small: 0.9375rem;
    --fs-quote: 1.5rem; --fs-figure: 3rem; --fs-meta: 0.6875rem; --fs-byline: 0.75rem;
  }
}

/* ---- Base ---- */
html { background: var(--paper); }
body {
  margin: 0; color: var(--ink); background: var(--paper);
  font-family: var(--font-text); font-size: var(--fs-body); line-height: var(--lh-body);
  font-variant-numeric: oldstyle-nums proportional-nums; /* cuerpo: cifras elzevirianas */
  text-rendering: optimizeLegibility;
}
.ui, .kicker, .byline, .folio, .btn, nav, figcaption, footer small {
  font-family: var(--font-ui); -webkit-font-smoothing: antialiased;
  font-variant-numeric: lining-nums tabular-nums;
}
.display, h1, h2, .figure, .price { font-family: var(--font-display); font-weight: 400; letter-spacing: var(--ls-display); font-variant-numeric: lining-nums tabular-nums; }
.kicker { font-size: var(--fs-kicker); font-weight: var(--fw-semibold); letter-spacing: var(--ls-kicker); text-transform: uppercase; font-feature-settings: "case"; }
.kicker--comment { color: var(--red); }
.folio, .meta { font-size: var(--fs-meta); letter-spacing: var(--ls-meta); text-transform: uppercase; color: var(--ink-3); }
.wordmark-text { font-family: var(--font-ui); font-weight: var(--fw-medium); font-size: 0.75rem; letter-spacing: var(--ls-wordmark); text-transform: uppercase; }
.smallcaps { font-variant-caps: small-caps; letter-spacing: 0.04em; }
.num { color: var(--red); font-weight: var(--fw-medium); }                  /* cifra roja en línea */
.art { mix-blend-mode: multiply; display: block; max-width: 100%; height: auto; } /* ilustración a pluma */
.photo { display: block; border: var(--frame); filter: grayscale(1) contrast(1.05); }
.rule-double { border-top: var(--rule-double); }
.rule-thick  { border-top: var(--rule-thick); }
.rule-hair   { border-top: var(--rule-hair); }
.comment, .pullquote { border-left: var(--rule-red); padding-left: var(--sp-5); }
a { color: inherit; text-decoration: none; }
a:hover, a:focus-visible { text-decoration: underline; text-decoration-color: var(--red); text-decoration-thickness: 1px; text-underline-offset: 0.12em; }
:focus-visible { outline: 2px solid var(--ink); outline-offset: 3px; }
.btn {
  display: inline-flex; align-items: center; gap: 0.5rem; height: 2.75rem; padding: 0 1.25rem;
  font-size: var(--fs-button); font-weight: var(--fw-semibold); letter-spacing: var(--ls-button); text-transform: uppercase;
  border: var(--rule-thin); border-radius: var(--radius); background: var(--ink); color: var(--on-ink);
  transition: background var(--transition), color var(--transition); cursor: pointer; text-decoration: none;
}
.btn:hover { background: var(--paper); color: var(--ink); text-decoration: none; }
.btn--secondary { background: transparent; color: var(--ink); }
.btn--secondary:hover { background: var(--ink); color: var(--on-ink); }
.btn--small { height: 2rem; padding: 0 0.875rem; }
.dropcap::first-letter { font-family: var(--font-display); font-size: 5.2rem; line-height: 0.8; float: left; padding: 0.1em 0.12em 0 0; }
.ornament { font-family: var(--font-ui); text-align: center; letter-spacing: 0.6em; color: var(--ink); font-size: 0.8125rem; }
```

Notas de implementación: `mix-blend-mode: multiply` requiere que el contenedor no cree un contexto de apilamiento con fondo opaco distinto de `--paper`; si una ilustración se coloca sobre `--paper-2`, también funciona (el blanco se funde con el crema). Para el patrón de trama: SVG inline `<pattern>` con `<line>` de `stroke="#141414" stroke-width="1"` cada 6 px rotado 45°, aplicado como `background-image` del bloque.

---

## 7. LO QUE NO HACER

1. **Sombras** de ningún tipo (`box-shadow`, `drop-shadow`, "elevación" de tarjetas). El papel es plano.
2. **Gradientes**, overlays semitransparentes sobre imágenes, "glass".
3. **Esquinas redondeadas**: `border-radius` es 0 en todo, incluidos botones, inputs, imágenes, badges y el mockup. Nada de píldoras (la landing Kali las usaba; aquí no).
4. **Rojo como color de interfaz**: botones rojos, fondos rojos, iconografía roja, subrayados rojos permanentes, badges rojos. El rojo es anotación (§3.2).
5. **#FF0000 y #f9303d**: ni como acento ni "para que coincida con Substack".
6. **Íconos genéricos** (Feather/Heroicons/Font Awesome): ni para audio, ni para redes, ni para flechas. Se usan caracteres tipográficos (▶ → ● ★ ❧ ⁂ —) y texto. Única excepción: logotipos de plataformas (Spotify, Apple Podcasts, YouTube) como texto, no como íconos.
7. **Fotografía a color / stock**: nada de fotos de oficinas, apretones de manos, gente frente a laptops. Fotos solo documentales (hosts, invitados, eventos reales), siempre B/N con marco.
8. **Texturas de papel, grano, pliegues, bordes rasgados, sellos "vintage", tipografía de máquina de escribir**: eso es disfraz, no print.
9. **Waveforms animados, ecualizadores, círculos de play gigantes, reproductores con cromo de color** en el bloque de audio/video.
10. **Más de tres familias tipográficas**, pesos no listados (Spectral ExtraLight/ExtraBold), Inter en titulares, Instrument Serif por debajo de 32 px, Spectral por encima de 30 px.
11. **Uppercase en titulares y en cuerpo**; uppercase solo en kickers, folios, botones y meta.
12. **Gris en filetes estructurales**: los filetes de cabecera, sección y pie son tinta. El gris (`--rule-soft`) es solo hairline interna.
13. **Animaciones de entrada, parallax, hover que mueve o escala**: la única transición es de color (120 ms) y el subrayado rojo.
14. **Hero con imagen de fondo y texto encima**, carruseles automáticos, pop-ups de suscripción, barras de progreso de lectura.
15. **Pills/tags con fondo** para categorías: la categoría es un kicker tipográfico, no una etiqueta.
16. **Avatares circulares** (recorte redondo de retratos) y estrellas de rating en testimonios.
17. **Dark mode**: el home es papel. `color-scheme: light only`.
18. **Full-bleed**: ningún bloque rompe los márgenes del contenedor; una página impresa tiene márgenes siempre.
19. **Más de una capitular, más de un ❧, más de un bloque con trama** por página.
20. **Ilustraciones de marca sin `mix-blend-mode: multiply`** sobre el papel crema: se verían como rectángulos blancos.

[ABIERTO] Vectorizar logo.png a SVG (el PNG actual es 1000 px de ancho; sirve a 2x para 36 px de alto pero no para impresión ni OG a gran tamaño). Resuelto: los TTF locales de Spectral sí incluyen `smcp`/`onum`/`tnum`/`ornm`; Instrument Serif no tiene `onum`/`tnum`; Inter tiene `tnum`/`case`.

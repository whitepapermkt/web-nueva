# 01 — EDITORIAL: taxonomía, estructura y copy del nuevo home de Whitepaper.mx

Agente editorial (dirección editorial / arquitectura de información). Jueves 5 de noviembre de 2026.
Documento de trabajo para quien construya el HTML. No incluye CSS. Todo el copy está en español mexicano, en voz Whitepaper.

Convenciones de este documento:
- **[VERIFICAR]** = dato no confirmado con fuente pública; no publicar sin validar con el equipo de Whitepaper.
- **[PROPUESTA]** = nombre o texto que no existe hoy y que proponemos; requiere aprobación.
- Lo que no lleva marca está confirmado en el sitio actual (whitepaper.mx), en el archivo de Substack (api/v1/archive), en Apple Podcasts / Spotify / Podnews / Rephonic, en learning.whitepaper.mx, directorio.whitepaper.mx, hq.whitepaper.mx, o en los documentos internos de la carpeta Whitepaper AI.

---

## 0. Qué se confirmó antes de escribir (resumen para el equipo)

| Tema | Hallazgo | Fuente |
|---|---|---|
| Título oficial del diario | El post se titula **"Whitepaper, hoy"** (con coma); la versión en audio se titula "Whitepaper Hoy, 05 de Noviembre de 2026". La etiqueta de navegación es **Hoy**. La línea de preview es **"Cinco minutos bien invertidos"**. | Archivo Substack |
| Edición de hoy (5 nov 2026) | Sumario real: "Ternium; todos son 'el más grande'; NBA en México; Flying Tiger; NY Times; el impacto de las elecciones intermedias en EUA; Wegovy; Harley-Davidson". Secciones internas reales: *Entre acero, tecnología y deportes*, *Reemplazo de importaciones*, *"El banco digital más grande"*, *Entre negocios y deportes: ¿es posible tener un equipo de la NBA en México?*, *De Dinamarca*, *Breves*, *Harleys*, *Spotlight en: Rothy's*. | Archivo Substack + HTML del repo landing-kali |
| Últimas ediciones | 4 nov: Primark en México; Capital Digital; Authentic Brands y Lee; resultados de Banorte; AkzoNobel; consejos de administración en EUA; CVS Health; Spotlight en: Jacques Marie Mage. 3 nov: Sinda; Kasai Kogyo; RLH Properties; Bulkmatic de México; Palenca y Buró de Ingresos; recortes de Disney; resultados de Apple; restricciones a más data centers en EUA. 2 nov: Retrocede Soriana; Anker Bioss; escobas y cubetas de Reynera; movimientos clave; mejoran márgenes de Televisa; anuncios de autos en EUA; los retos que enfrenta DeBeers. 30 oct: Utilidades de BBVA; PoloTab; desliste de Vitro; conoce a Pati Jinich; Viva Aerobús; 7 Brew; la revista LIFE; Rivian; Binance. 29 oct: Resultados de Femsa; Schneider Electric en Querétaro; Walmex, Chedraui y La Comer; Clip y Pulpos; Tesla en México; el Chipotle de MTY. 28 oct: Steren en Ecuador y Perú; resultados del Buró; Liverpool y sus boutiques; camiones de Holcim; fundadores que no ganan en el exit. 27 oct: Récord de Volaris; Nefab en Nuevo León; otros productos de Topo Chico; 99Minutos; Vesta; la NBA con Kalshi y Polymarket; el S-1 de Anthropic. 26 oct: Resultados de Cemex; 'procesos confidenciales' en la BMV; los números de Becle; $130m para Tractian. | Archivo Substack |
| Principales | "Los outliers de la inclusión" (30 oct 2026). Bajada real: "Stori y Aviva son de las pocas fintech que sí se concentraron en bancarizar –y tienen más en común con BanCoppel que con Nu". Autores: **René Lankenau y Daniela Dib**. Tiene versión en podcast. | Archivo Substack |
| Spotlights | Además de ir dentro de Hoy, existen como posts independientes con etiqueta **Spotlights**: Spirit Halloween, Rothy's (29 oct), Jacques Marie Mage (4 nov). | Archivo Substack |
| Overview | "Overview, by Whitepaper", sábado 31 oct 2026. Autores: **Luis Othón, Humberto Peña Dávalos y Andrea Valeria Díaz Tolivia**. Bajada real: "La edición de fin de semana, de recomendaciones que quieres tener en el radar." | Post de Substack |
| Whitepaper 10 | Hosts **Karla Berman y René Lankenau**. Descripción en Substack: lunes *Deep Dive* (premium), miércoles noticias de la semana. Calificación 4.8 (1,111 calificaciones, Apple + Spotify). 421 episodios en el feed. Últimos: 204 *Costco: el modelo de negocio detrás de una marca de culto*; 203 *Startups: ¿por qué tantos fundadores no ganan dinero al vender su empresa?*; 202 *México y Estados Unidos: comercio, política y oportunidades de inversión*; 201 *Banco Plata: ¿qué hay detrás de su rápido crecimiento?*. Spotify: open.spotify.com/show/0LnC5v04Xrh1JX4jGRGVOr · Apple: id1584711514. **[VERIFICAR]** días exactos de publicación (Podnews, más antiguo, decía jueves). | Substack sección /s/whitepaper-10, Podnews, Rephonic |
| Dark Side of the Road | Confirmado como show para suscriptores dentro del feed premium ("episodios especiales solo para suscriptores"). Ep. 10 (27 oct 2026): *Tesla en México: ¿el futuro de los autos o una apuesta por algo mucho más grande?*, 54 min, con **Alberto Bortoni**; autor del post: René Lankenau. **[VERIFICAR]** descripción oficial del show, host(es) fijos y periodicidad. | Post Substack, Rephonic |
| Arquitectura de los Negocios | El nombre oficial lleva **"los"**: *Arquitectura de los Negocios*. Host **Susana Sáenz**; entrevista a expertos sobre cómo funcionan distintos modelos de negocio. Episodios citados: Alsea ep. 1 (*De Domino's Pizza al nacimiento de un imperio*), Open finance con Beatriz Durán. Listado como especial para suscriptores en el feed premium. **[VERIFICAR]** día (una fuente dice martes) y si todos los episodios son de paga. | Podnews, Rephonic, Comentario Whitepaper del 5 nov |
| MexMoves | Podcast **en inglés** de WP Media. Hosts **Damian Fraser y Eduardo García**. Semanal, 92 episodios, 4.7 en Apple. No estaba en el brief: **decisión pendiente** de si se muestra en el home. Recomendación: sí, como quinta tarjeta de audio con etiqueta EN INGLÉS. **[VERIFICAR]** acceso (parece abierto). | Apple Podcasts id1792066671, hq.whitepaper.mx |
| Video | Existen piezas en el feed premium: *Las lecciones de Fernando Chico Pardo (video)*, 18 min, 11 sep 2026; *Pablo Elek, Country Head Scotiabank Mexico*, 18 min, 12 mar 2026. **No hay nombre de producto**. El About dice "contenido en audio y en video exclusivamente para suscriptores". | Rephonic (Whitepaper Audio Premium), About |
| Learning | "Whitepaper Learning es la división educativa de Whitepaper". Cursos: *La sucesión del CEO* ($5,900); *Cómo crear un Consejo que funcione* (Alfonso González Migoya, Karla Berman, Leon Kraig); *Valuación de Empresas* (Ricardo Dávila, Rodrigo García-Triana); *M&A: Lo que todo líder debe saber antes, durante y después de una transacción* (Ariel Fischman, Eduardo Botello, Gerardo Guajardo). Formato en línea (ver en TV o computadora). | learning.whitepaper.mx |
| Directorio | "Directorio de empresas", exclusivo para suscriptores (verifica correo). La edición de hoy lo describe como "nuestro directorio de empresas mexicanas que tienes que conocer". | directorio.whitepaper.mx, Hoy 5 nov |
| Store | "Whitepaper Store": Essentials Whitepaper ($348), Gorra Whitepaper ($499). | hq.whitepaper.mx |
| Eventos | Primer evento en vivo: "Whitepaper Live 2024". **[VERIFICAR]** calendario vigente y formato actual de eventos para suscriptores. | LinkedIn vía búsqueda |
| Planes | $189 al mes · $1,590 al año · plan fundador "Whitepaper Legacy" $6,295 al año. Substack tiene activo un trial de 7 días en el paywall. **[VERIFICAR]** si el trial se comunica en el home (el brief dice que se quitaron). | preloads de Substack |
| Base | Sitio: "Over 123,000 subscribers". Brief: 14,500+ de paga, 135,000+ gratuitos. Para el home usamos la cifra de paga: **más de 14,500 suscriptores de paga**. | Sitio + brief |
| Secciones heredadas en Substack | Existen *Sunday* ("Análisis de empresas e industrias explicado en gráficas") y *Runway* (startups Latam, en inglés). No están en la nav actual. **No mostrarlas** en el home; **[VERIFICAR]** si siguen vivas. | preloads de Substack |
| Antigüedad | Primer post: 19 de mayo de 2020. 2026 es el **Año VII**. | preloads de Substack |

---

## 1. TAXONOMÍA Y CATEGORIZACIÓN (modelo The Bulwark: cada producto tiene casa y nombre)

### 1.1 Principio organizador

Cuatro verbos, en este orden fijo en todo el sitio: **LEER · ESCUCHAR · VER · VIVIR**. Los verbos no son productos; son las "secciones del periódico" que agrupan productos. Cada producto conserva su nombre propio y su página propia (en Substack o subdominio).

- **LEER**: Whitepaper Hoy · Principales · Spotlights · Overview
- **ESCUCHAR**: Whitepaper 10 · Whitepaper Hoy en audio · Dark Side of the Road · Arquitectura de los Negocios · MexMoves (en inglés)
- **VER**: Entrevistas en video para suscriptores [PROPUESTA de nombre abajo]
- **VIVIR**: Eventos · Whitepaper Learning · Directorio de empresas · Store

Regla de acceso, tal cual se etiqueta en el sitio: **Suscriptores** (candado tipográfico, no ícono) o **Abierto** (Whitepaper 10, MexMoves). Nunca usar la palabra "gratis" en el home (regla de copy de la marca); se dice "abierto a todos" o "sin suscripción".

### 1.2 Navegación principal propuesta (máximo 7 ítems)

**Opción A — por producto (recomendada; es el modelo Bulwark y conserva los nombres que la gente ya busca):**

| # | Ítem | Destino | Nota |
|---|---|---|---|
| 1 | Hoy | whitepaper.mx/t/hoy (etiqueta "Hoy" en Substack) | El producto diario |
| 2 | Principales | whitepaper.mx/t/principales | Las investigaciones |
| 3 | Overview | whitepaper.mx/t/overview | Fin de semana |
| 4 | Podcasts | whitepaper.mx/s/whitepaper-audio (índice de shows en el propio home: #escuchar) | Agrupa los cinco shows |
| 5 | Video | ancla #ver (futura página /video) | Protagonismo a video |
| 6 | Eventos | ancla #vivir (futura página /eventos) [VERIFICAR URL] | Canal con mayor cierre |
| 7 | Learning | learning.whitepaper.mx | División educativa |

Barra utilitaria (arriba del masthead, letra pequeña): **Directorio · Store · Soporte · Nosotros · Iniciar sesión · [Suscríbete]**. El botón Suscríbete es el único elemento rojo de la barra.

**Opción B — por verbo (si el equipo prefiere que la nav explique el sistema):** Leer ▾ · Escuchar ▾ · Ver · Vivir ▾ · Directorio · Nosotros · [Suscríbete]. Los desplegables listan los productos. Es más didáctica pero esconde los nombres propios un nivel; por eso no es la recomendada.

Rutas de Substack confirmadas: `/t/hoy`, `/t/principales`, `/t/overview`, `/t/spotlights` (etiquetas de post); `/s/whitepaper-audio` (sección Podcasts, "Versión en audio de Whitepaper"); `/s/whitepaper-10` (sección Whitepaper 10); `/about`; `/subscribe`. Subdominios: `directorio.whitepaper.mx`, `learning.whitepaper.mx`, `hq.whitepaper.mx`; soporte `intercom.help/whitepaper/es`. **[VERIFICAR]** que las rutas `/t/...` resuelvan públicamente; si no, enlazar al archivo filtrado.

### 1.3 Fichas de producto

Formato de cada ficha: nombre oficial · categoría · descripción de 1 línea (≤15 palabras) · descripción de 2-3 líneas · frecuencia · acceso · autores/hosts · URL.

#### LEER

**Whitepaper Hoy**
- Nombre oficial: *Whitepaper, hoy* (título del post). En nav y tarjetas: **Whitepaper Hoy**. Nunca "WP Hoy" de cara al lector.
- Categoría: Leer (y Escuchar, ver ficha de audio).
- 1 línea: Lo que la comunidad empresarial necesita saber, cada mañana, en cinco minutos.
- 2-3 líneas: Seleccionamos las noticias de negocios que importan en México y explicamos por qué importan. Cada edición incluye el *Comentario Whitepaper*, gráficas propias y secciones fijas: *Spotlight en* (una empresa), *Conoce a* (una persona, los lunes), *La gente clave de* (miércoles alternos) y *Movimientos clave* (nombramientos).
- Frecuencia: lunes a viernes, por la mañana.
- Acceso: suscriptores.
- Autores: Redacción Whitepaper (byline colectivo). Colaboradores con firma cuando aplica (p. ej. "El Míster, para Whitepaper").
- URL: https://www.whitepaper.mx/t/hoy

**Principales**
- Nombre oficial: **Principales** (en la nav). En texto corrido: "los artículos principales" o "las investigaciones de Whitepaper".
- Categoría: Leer (con versión en audio en varios casos).
- 1 línea: Investigaciones propias sobre empresas e industrias de México, con detalle que nadie más tiene.
- 2-3 líneas: Reportajes largos y análisis de fondo: cómo opera una empresa, qué hay detrás de una valuación, quiénes son las personas clave de un grupo. Se publican como artículo independiente, destacado desde Whitepaper Hoy, y varios tienen versión en podcast.
- Frecuencia: semanal (el brief interno dice viernes) **[VERIFICAR]** día fijo; el último, "Los outliers de la inclusión", salió jueves 30 de octubre.
- Acceso: suscriptores.
- Autores: René Lankenau, Daniela Dib y equipo editorial (byline individual por pieza).
- URL: https://www.whitepaper.mx/t/principales
- Ejemplos reales para tarjetas: *Los outliers de la inclusión* (René Lankenau y Daniela Dib, 30 oct 2026); *¿Cómo es que Kavak puede valer 4 mil…?* [VERIFICAR título completo]; *El crecimiento de Nowports*; *Conoce a las personas clave en Innovasport*; *Conoce a las personas clave de Xignux*.

**Spotlights**
- Nombre oficial: **Spotlight en:** [empresa] (así se titulan los posts). Índice: **Spotlights**.
- Categoría: Leer.
- 1 línea: Una empresa que vale la pena conocer antes que los demás, con números.
- 2-3 líneas: Perfiles breves (250-350 palabras) de empresas, startups o marcas que destacan por su crecimiento, su modelo de negocio o su equipo. Van dentro de Whitepaper Hoy y también como piezas independientes.
- Frecuencia: al menos uno por semana (normalmente no en viernes).
- Acceso: suscriptores.
- Autores: Redacción Whitepaper.
- URL: https://www.whitepaper.mx/t/spotlights
- Ejemplos reales: Rothy's, Spirit Halloween, Jacques Marie Mage.

**Overview, by Whitepaper**
- Nombre oficial: **Overview, by Whitepaper**. Corto: **Overview**.
- Categoría: Leer.
- 1 línea: La edición de fin de semana: recomendaciones que quieres tener en el radar.
- 2-3 líneas: Productos, experiencias, estilo y lecturas seleccionadas por el equipo. Es la edición para leer con calma, lejos de la agenda de la semana.
- Frecuencia: sábados.
- Acceso: suscriptores.
- Autores: Luis Othón, Humberto Peña Dávalos y Andrea Valeria Díaz Tolivia.
- URL: https://www.whitepaper.mx/t/overview

Formatos que viven dentro de Whitepaper Hoy (no son productos; sí son kickers, ver sección 3): *Comentario Whitepaper*, *Spotlight en*, *Conoce a*, *La gente clave de*, *Movimientos clave*, *Breves*.

#### ESCUCHAR

**Whitepaper 10**
- Nombre oficial: **Whitepaper 10**.
- Categoría: Escuchar.
- 1 línea: El podcast de Whitepaper: Karla Berman y René Lankenau analizan lo que mueve los negocios en México.
- 2-3 líneas: Historias, decisiones y tendencias explicadas con datos y sin rodeos. Los lunes, un *Deep Dive* sobre un solo tema; los miércoles, las noticias de la semana con análisis [VERIFICAR días]. Calificación 4.8 con más de 1,100 reseñas en Apple Podcasts y Spotify.
- Frecuencia: dos episodios por semana [VERIFICAR].
- Acceso: abierto a todos (el *Deep Dive* de los lunes es para suscriptores según la descripción de Substack [VERIFICAR]).
- Hosts: Karla Berman y René Lankenau.
- URL: https://open.spotify.com/show/0LnC5v04Xrh1JX4jGRGVOr · https://podcasts.apple.com/mx/podcast/id1584711514 · https://www.whitepaper.mx/s/whitepaper-10
- Último episodio para tarjeta: *204. Costco: el modelo de negocio detrás de una marca de culto* (2 nov 2026) [VERIFICAR duración].

**Whitepaper Hoy en audio**
- Nombre oficial: en Substack, *Whitepaper Hoy, 05 de Noviembre de 2026* dentro de la sección Podcasts ("Versión en audio de Whitepaper"). En el home: **Whitepaper Hoy en audio**.
- Categoría: Escuchar.
- 1 línea: Cada edición diaria, leída por voces profesionales, en seis a ocho minutos.
- 2-3 líneas: La misma edición de la mañana, para escuchar camino a la oficina o entre juntas. Voces de estudio, no una IA genérica. Disponible en web y móvil; alterna entre texto y audio cuando quieras.
- Frecuencia: lunes a viernes.
- Acceso: suscriptores.
- Voces: locutores profesionales [VERIFICAR si se nombran].
- URL: https://www.whitepaper.mx/s/whitepaper-audio

**Dark Side of the Road**
- Nombre oficial: **Dark Side of the Road**.
- Categoría: Escuchar.
- 1 línea: Conversaciones largas para suscriptores sobre la industria que está cambiando de reglas. [VERIFICAR enfoque]
- 2-3 líneas: Episodios especiales, de alrededor de una hora, que van a fondo en un tema. En el episodio 10, Tesla en México: conducción autónoma en el tráfico mexicano, la competencia china y la visión de Elon Musk, con Alberto Bortoni. [VERIFICAR descripción oficial]
- Frecuencia: irregular / por temporada [VERIFICAR].
- Acceso: suscriptores.
- Host: René Lankenau [VERIFICAR]; invitados por episodio.
- URL: https://www.whitepaper.mx/s/whitepaper-audio (filtrar por título) · post: https://www.whitepaper.mx/p/dark-side-of-the-road-ep-9-tesla
- Último episodio: *Ep. 10: Tesla en México: ¿el futuro de los autos o una apuesta por algo mucho más grande?* · 54 min · 27 oct 2026.

**Arquitectura de los Negocios**
- Nombre oficial: **Arquitectura de los Negocios** (con "los").
- Categoría: Escuchar.
- 1 línea: Susana Sáenz explica cómo funcionan, por dentro, los modelos de negocio.
- 2-3 líneas: Entrevistas con expertos y relatos de empresa: de la apuesta de los hermanos Torrado por la franquicia de Domino's que dio origen a Alsea, al open finance en economías emergentes. Para entender el negocio de los demás.
- Frecuencia: semanal (martes) [VERIFICAR].
- Acceso: suscriptores [VERIFICAR; parte del catálogo pudo haber sido abierto].
- Host: Susana Sáenz.
- URL: https://www.whitepaper.mx/s/whitepaper-audio (filtrar) [VERIFICAR si tiene feed propio]
- Episodio para tarjeta: *Alsea, ep. 1: de Domino's Pizza al nacimiento de un imperio* [VERIFICAR fecha y duración].

**MexMoves** (pendiente de decisión editorial; recomendamos incluirlo)
- Nombre oficial: **MexMoves**.
- Categoría: Escuchar.
- 1 línea: In English: the Mexican business stories that matter to the US, every week.
- 2-3 líneas: Damian Fraser y Eduardo García analizan cada semana las historias de negocios de México con impacto global, con un invitado por episodio. Para quien opera entre los dos países.
- Frecuencia: semanal.
- Acceso: abierto [VERIFICAR].
- Hosts: Damian Fraser y Eduardo García.
- URL: https://podcasts.apple.com/us/podcast/id1792066671
- Último episodio: *92. Bulkmatic on Keeping Mexico's Factories on Track; AI Adoption; Mexico's Pre-Muertos Conference Circuit; and More 3Q Results*.

#### VER

**Entrevistas en video** — [PROPUESTA de nombre: **Whitepaper Conversaciones**; alternativa: **En privado, by Whitepaper**. Ninguno es oficial.]
- Categoría: Ver.
- 1 línea: La conversación que los líderes tienen en privado, en video y solo para suscriptores.
- 2-3 líneas: Entrevistas largas con quienes dirigen, fundan o financian empresas en México. Sin guion de relaciones públicas: trayectoria, decisiones y lo que aprendieron. Disponibles en video y en audio.
- Frecuencia: mensual [VERIFICAR; hay piezas en marzo y septiembre de 2026].
- Acceso: suscriptores.
- Conduce: René Lankenau [VERIFICAR].
- URL: https://www.whitepaper.mx/s/whitepaper-audio (hoy viven en el feed premium) → futura /video.
- Piezas reales para tarjetas: *Las lecciones de Fernando Chico Pardo* (video, 18 min, 11 sep 2026); *Pablo Elek, Country Head de Scotiabank México* (18 min, 12 mar 2026) [VERIFICAR si es video o solo audio].

#### VIVIR

**Eventos Whitepaper**
- 1 línea: Encuentros presenciales, exclusivos para suscriptores, con la gente de la que escribimos.
- 2-3 líneas: Conversaciones en vivo con empresarios, inversionistas y directivos, en Monterrey y Ciudad de México. El primero fue Whitepaper Live 2024. Cupo limitado; se anuncian primero por correo a suscriptores.
- Frecuencia: varias veces al año [VERIFICAR calendario].
- Acceso: suscriptores.
- URL: [VERIFICAR; propuesta /eventos o ancla #vivir con formulario de interés].

**Whitepaper Learning**
- Nombre oficial: **Whitepaper Learning** (nav actual: "Cursos").
- 1 línea: Cursos en línea impartidos por quienes toman las decisiones en México.
- 2-3 líneas: La división educativa de Whitepaper. Programas ejecutivos sobre sucesión del CEO, consejos de administración, valuación de empresas y M&A, con instructores como Alfonso González Migoya, Karla Berman, Ricardo Dávila y Ariel Fischman.
- Frecuencia: catálogo permanente; cohortes por anuncio.
- Acceso: compra por curso (desde $5,900) [VERIFICAR precios de los demás]; no requiere suscripción [VERIFICAR descuentos a suscriptores].
- URL: https://learning.whitepaper.mx

**Directorio de empresas**
- Nombre oficial: **Directorio de empresas** (nav: Directorio).
- 1 línea: Las empresas mexicanas que tienes que conocer, en un solo lugar.
- 2-3 líneas: Fichas de las empresas sobre las que escribimos: quiénes son, qué hacen, por qué importan. Se alimenta cada semana desde Whitepaper Hoy (esta semana entró CIE). Acceso con tu correo de suscriptor.
- Frecuencia: actualización continua.
- Acceso: suscriptores.
- URL: https://directorio.whitepaper.mx

**Whitepaper Store**
- 1 línea: Objetos para quien lee en papel aunque viva en pantalla.
- 2-3 líneas: Essentials Whitepaper y la gorra Whitepaper. Pocas piezas, hechas para durar. [VERIFICAR contenido de "Essentials"]
- Acceso: abierto.
- URL: https://hq.whitepaper.mx

**Suscripción corporativa**
- 1 línea: Whitepaper para tu equipo o tu consejo, con facturación única.
- URL: contacto [VERIFICAR correo; el About tiene un placeholder].

---

## 2. ESTRUCTURA EDITORIAL DEL HOME (orden, jerarquía y lógica)

Metáfora operativa: el home es la **primera plana de un diario** que además contiene el **índice de la casa editorial**. Arriba del doblez va la edición de hoy (la prueba del producto es el producto); debajo del doblez va el catálogo organizado por verbo; al final, la propuesta de suscripción y el cierre.

Orden de lectura en desktop (y orden DOM, que también es el de mobile salvo lo indicado):

### 2.0 Barra utilitaria (cejilla)
Texto muy pequeño, sans. Izquierda: folio corto (fecha). Derecha: Directorio · Store · Soporte · Nosotros · Iniciar sesión · **Suscríbete** (rojo).
Por qué: como en The Free Press, saca de la nav lo que no es producto editorial y deja la nav limpia para la categorización.

### 2.1 Masthead (cabecera de periódico)
Wordmark WHITEPAPER centrado y grande; debajo, en una sola línea con filetes a los lados, el tagline; debajo, la línea de folio (fecha larga, "Monterrey / Ciudad de México", Año VII, No. de edición, precio de suscripción).
Por qué: la marca nació como oda al print; el masthead es el gesto más reconocible del género. El folio con precio es un guiño de periódico (y comunica precio sin hacer "pricing").

### 2.2 Navegación principal
Siete ítems (Opción A), filete arriba y abajo. En mobile se convierte en menú con los cuatro verbos como títulos y los productos listados debajo.

### 2.3 PRIMERA PLANA (arriba del doblez) — tres columnas con filetes verticales
- **Columna central (la más ancha): la edición de hoy.** Kicker HOY · fecha. Titular grande en serif, bajada, byline, duración de lectura y botón de audio ("Escuchar · 7 min" [VERIFICAR duración]). Debajo, el *sumario* de la edición: lista de 6-8 entradas en una línea cada una, con nombres de empresa en negritas (exactamente como el teaser del correo). Al pie, un extracto del *Comentario Whitepaper* con filete rojo a la izquierda y capitular.
- **Columna izquierda: Principales.** Kicker PRINCIPALES. Una pieza destacada (título, bajada, autores, fecha, etiqueta "También en audio") y dos títulos más como lista.
- **Columna derecha: Escuchar / Ver.** Kicker PODCAST con el último episodio de Whitepaper 10 (arte cuadrado pequeño, título, hosts, "Escuchar ahora") y el último de Dark Side of the Road. Debajo, kicker VIDEO con la pieza de Fernando Chico Pardo ("Ver ahora", candado Suscriptores).
Por qué: una persona que llega por primera vez debe entender en diez segundos que (1) hay un diario de pago hoy mismo, (2) hay investigaciones propias y (3) hay audio y video. Ese es el mapa completo del negocio en una pantalla. El audio en primera plana cumple la meta de protagonismo sin desplazar al producto principal.

En mobile: edición de hoy → tarjeta de audio del día (compacta) → Principales → Podcast/Video.

### 2.4 Franja "Lo que ofrece Whitepaper" (índice de la casa)
Cuatro columnas estrechas con filete superior: LEER · ESCUCHAR · VER · VIVIR. Bajo cada verbo, los nombres de los productos como lista tipográfica (enlazan a su bloque más abajo o a su página). Una línea de contexto por verbo.
Por qué: es el "índice" del periódico y el equivalente del listado de sub-marcas de The Free Press. Resuelve la meta 1 del brief (que se entienda cada producto) en un vistazo, antes de los bloques largos.

### 2.5 Últimas ediciones (la "lista de latest")
Kicker HOY. Lista de las últimas 8 ediciones de Whitepaper Hoy: fecha compacta a la izquierda, sumario completo a la derecha con negritas en empresas, separadas por filetes finos. Botón "Ver archivo".
Por qué: demuestra ritmo (todos los días), muestra el rango temático real (Ternium, Soriana, Banorte, Primark, Femsa, Volaris, Cemex) y convierte la lista de posts del Substack genérico en una pieza con forma de periódico.

### 2.6 BLOQUE LEER — los cuatro productos de texto
Cabecera de sección: verbo LEER en caja alta con filete doble. Cuatro módulos:
1. **Whitepaper Hoy**: descripción de 2-3 líneas, los formatos fijos como mini-índice (Comentario Whitepaper, Spotlight en, Conoce a, La gente clave de, Movimientos clave) y una muestra visual (imagen del newsletter / gráfica B/N).
2. **Principales**: descripción y tres títulos reales con bylines.
3. **Spotlights**: descripción y tres empresas recientes.
4. **Overview**: descripción, sábado, autores.
Cada módulo cierra con "Ir a [producto] →" y la etiqueta de acceso.
Por qué: el brief exige que cada producto se entienda con qué es, para quién y con qué frecuencia; aquí están las tres cosas, con muestra real.

### 2.7 BLOQUE ESCUCHAR — protagonista
Cabecera ESCUCHAR con una línea de intro. Rejilla de cinco tarjetas de show, formato The Free Press: arte cuadrado, kicker con el nombre del show, título del último episodio, bajada corta, hosts, duración, botón **Escuchar ahora**, enlace "Todos los episodios", y etiqueta de acceso. Orden: Whitepaper 10 (puerta de entrada, abierto) · Whitepaper Hoy en audio · Dark Side of the Road · Arquitectura de los Negocios · MexMoves (En inglés).
Debajo de la rejilla, una franja de testimonio de audio (cita real "Empiezo el día con el Podcast de Whitepaper10…") y los badges de Spotify y Apple Podcasts.
Por qué: el audio es la puerta de entrada número uno a la suscripción (los testimonios lo prueban) y el brief pide protagonismo. Va después de LEER porque la jerarquía del negocio sigue siendo texto → audio → video, pero recibe el bloque más alto y más visual de la página.

### 2.8 BLOQUE VER
Cabecera VER. Una tarjeta grande 16:9 (Fernando Chico Pardo) con botón **Ver ahora** y candado, más una o dos tarjetas secundarias (Pablo Elek) o un espacio "Próxima conversación" si no hay más piezas. Línea de descripción del formato.
Por qué: cumple la meta 2 (protagonismo a video) sin sobreprometer: solo mostramos piezas que existen. Cuando haya nombre oficial, se vuelve kicker.

### 2.9 Lo que dicen los suscriptores
Tres o cuatro citas textuales, en serif itálica, con nombre y organización cuando existe. Sin estrellas, sin fotos de stock.
Por qué: a esta altura la persona ya entendió la oferta; la prueba social valida antes de llegar al bloque de "para quién es" y al precio.

### 2.10 Para quién es / para quién no es
Dos columnas con filete central. Texto corto y específico.
Por qué: es la postura de marca (premium, "if you know, you know") convertida en servicio al lector: filtra y, al filtrar, hace más deseable entrar.

### 2.11 BLOQUE VIVIR
Cabecera VIVIR. Tres columnas: Eventos · Whitepaper Learning · Directorio de empresas. Cuarta línea discreta para Store.
Por qué: son extensiones del mismo criterio editorial fuera del correo; van después de la prueba social porque convierten mejor cuando la marca ya está entendida.

### 2.12 Suscripción (el "cupón" del periódico)
Caja con filete grueso. Qué incluye (lista de los productos por verbo), dos precios (anual destacado, mensual al lado), un botón rojo "Suscríbete" que redirige a Substack, y línea para equipos/corporativo. Mención de Whitepaper Legacy solo si el equipo quiere [VERIFICAR].
Por qué: el pago ocurre en Substack; el home debe dejar clarísimo qué se compra antes de redirigir. Posición: tras toda la explicación, pero visible también desde el botón de la barra utilitaria.

### 2.13 Nota de cierre (colofón editorial)
Un párrafo corto sobre la misión ("menos ruido y más criterio"), sin firma personal salvo aprobación de René Lankenau.

### 2.14 Footer
Columnas por verbo con todos los productos; columna Whitepaper (Nosotros, Suscripción corporativa, Soporte, Contacto, Store); redes; legal (Substack); línea de colofón "WP Media · Monterrey / Ciudad de México · Publicado desde 2020".

---

## 3. SISTEMA DE KICKERS Y ETIQUETAS

Un kicker es la palabra o frase corta, en caja alta y sans con tracking, que va encima de un titular y le dice al lector **en qué sección del periódico está**. Reglas:

1. Lista cerrada. No se inventan kickers en el HTML; si hace falta uno nuevo, se agrega aquí primero.
2. Un kicker por tarjeta o titular. Nunca dos.
3. El kicker nombra el **producto o formato**, no el tema (nunca "RETAIL" o "FINTECH" como kicker; los temas van en el titular).
4. En tarjetas de audio y video, el kicker es el **nombre del show**.
5. El **acceso** no es kicker: es una etiqueta aparte, al final de la tarjeta, en caja alta pequeña: `Suscriptores` o `Abierto`.
6. Las etiquetas de **medio** tampoco son kickers: `También en audio`, `En inglés`, `Video`, `Nuevo` van junto a la duración o la fecha.
7. Mayúsculas con acento siempre (SPOTLIGHT EN, EDICIÓN, SÁBADO).

### 3.1 Kickers de sección editorial (texto)

| Kicker | Uso |
|---|---|
| HOY | Edición diaria de Whitepaper Hoy; lista de últimas ediciones. Siempre acompañado de la fecha. |
| PRINCIPALES | Artículos de investigación propios. |
| SPOTLIGHT EN | Perfil de empresa. Se completa con el nombre: SPOTLIGHT EN: ROTHY'S (dos puntos, nombre tal cual). |
| CONOCE A | Perfil de persona (lunes). CONOCE A: PATI JINICH. |
| LA GENTE CLAVE DE | Rising stars de una empresa (miércoles alternos). LA GENTE CLAVE DE: XIGNUX. |
| MOVIMIENTOS CLAVE | Nombramientos y cambios de RH. |
| COMENTARIO WHITEPAPER | Solo sobre el extracto del comentario editorial, con filete rojo. Es el único kicker que puede ir en rojo. |
| OVERVIEW | Edición de fin de semana. Acompañado de SÁBADO · fecha. |
| BREVES | Solo si se muestran las notas cortas de una edición. |

### 3.2 Kickers de audio y video

| Kicker | Uso |
|---|---|
| WHITEPAPER 10 | Tarjeta del show. |
| WHITEPAPER HOY EN AUDIO | Versión en audio de la edición diaria. |
| DARK SIDE OF THE ROAD | Tarjeta del show. |
| ARQUITECTURA DE LOS NEGOCIOS | Tarjeta del show. |
| MEXMOVES | Tarjeta del show (lleva etiqueta `En inglés`). |
| PODCAST | Genérico, solo en primera plana cuando una misma columna mezcla shows. |
| VIDEO | Piezas en video mientras no exista nombre de producto. Cuando lo haya, se reemplaza por el nombre. |

### 3.3 Kickers de la casa (Vivir y servicio)

| Kicker | Uso |
|---|---|
| EVENTO | Convocatoria o crónica de evento. Acompañado de ciudad y fecha. |
| LEARNING | Cursos de Whitepaper Learning. |
| DIRECTORIO | Módulo del directorio de empresas. |
| STORE | Módulo de tienda. |
| SUSCRIPCIÓN | Caja de precios. |
| NOTA DEL EDITOR | Colofón, si se firma. |

### 3.4 Encabezados de sección (no son kickers, son "cabezas de sección" del periódico)
LEER · ESCUCHAR · VER · VIVIR. Siempre con filete doble arriba y una línea de intro en serif itálica.

### 3.5 Etiquetas (tags) permitidas
`Suscriptores` · `Abierto` · `También en audio` · `Video` · `En inglés` · `Nuevo` · `Cupo limitado` (solo eventos) · `Sábado` (solo Overview).

---

## 4. COPY FINAL DEL HOME

Notas generales: sin signos de admiración; sin comillas de énfasis; negritas en nombres de empresa dentro de sumarios y teasers (como en el correo); *cursivas* para títulos de shows, artículos y para todo *Comentario Whitepaper*. Los textos entre corchetes son instrucciones o datos por validar, no copy.

### 4.0 Barra utilitaria
Izquierda: `Jueves 5 de noviembre de 2026`
Derecha: `Directorio` · `Store` · `Soporte` · `Nosotros` · `Iniciar sesión` · **`Suscríbete`**

### 4.1 Masthead
Wordmark: **WHITEPAPER**
Tagline (entre filetes): **Lo que la comunidad empresarial necesita saber.**
Folio (una línea, letra pequeña, separadores con punto medio):
`Jueves 5 de noviembre de 2026 · Monterrey / Ciudad de México · Año VII · Edición No. [calcular: ediciones de Hoy publicadas a la fecha; si no se puede, omitir] · $189 al mes · $1,590 al año`

Variante mínima del folio (mobile): `5 de noviembre de 2026 · Monterrey / CDMX · Año VII`

### 4.2 Navegación principal
`Hoy` · `Principales` · `Overview` · `Podcasts` · `Video` · `Eventos` · `Learning`

### 4.3 Primera plana

#### Columna central — HOY
Kicker: `HOY · JUEVES 5 DE NOVIEMBRE DE 2026`
Titular: **Ternium alcanza un máximo histórico de envíos a México; Mercado Pago y Nu se disputan el título de banco digital más grande**
Bajada: Además: qué costaría una franquicia de la NBA en la Ciudad de México, **Flying Tiger** invertirá $30 millones de dólares en 100 tiendas, y Harley-Davidson va por su primer alza anual de ventas desde 2021.
Byline: `Redacción Whitepaper · 5 min de lectura · Escuchar · 7 min` [VERIFICAR duración del audio]
Botones: `Leer la edición` (primario) · `Escuchar` (secundario, con ícono de play tipográfico ▶)

Sumario de la edición (lista con filetes finos; usar el teaser real):
- **Ternium**: envíos récord de acero a México; 13% más en nueve meses por sustitución de importaciones.
- Todos son "el más grande": **Mercado Pago** reporta 18 millones de usuarios activos; **Nu** dijo 16 millones en agosto; **BBVA**, 27 millones de clientes digitales.
- Una posible **NBA** en México: 33 millones de aficionados contra franquicias de $7,000 a $10,000 millones de dólares.
- **Flying Tiger**: la cadena danesa abrirá más de 100 tiendas en cinco años.
- **The New York Times** suma 420,000 suscriptores digitales y llega a 13.8 millones.
- Elecciones intermedias en EUA: **Amazon** +7.4%, **Apple** +7%.
- **Novo Nordisk**: Wegovy oral generó más de $800 millones de dólares en el trimestre.
- **Harley-Davidson** va por su primer incremento anual desde 2021.

Extracto con filete rojo:
Kicker (rojo): `COMENTARIO WHITEPAPER`
Texto (en cursivas, con capitular): *En los primeros nueve meses del año, Ternium reportó ventas de acero por $6,641 millones de dólares en México, un crecimiento de 24% anual. La empresa ha invertido más de $4,000 millones de dólares en el desarrollo de un complejo industrial en las afueras de Monterrey, donde construye una acería con capacidad para producir 2.6 millones de toneladas anuales.*

#### Columna izquierda — PRINCIPALES
Kicker: `PRINCIPALES`
Título: **Los outliers de la inclusión**
Bajada: Stori y Aviva son de las pocas fintech que sí se concentraron en bancarizar, y tienen más en común con BanCoppel que con Nu.
Byline: `René Lankenau y Daniela Dib · 30 de octubre de 2026 · También en audio`
Lista secundaria (dos títulos, sin bajada):
- ¿Cómo es que Kavak puede valer 4 mil millones de dólares? [VERIFICAR título exacto]
- El crecimiento de Nowports
Enlace: `Todas las investigaciones →`

#### Columna derecha — ESCUCHAR / VER
Kicker: `WHITEPAPER 10`
Título: **204. Costco: el modelo de negocio detrás de una marca de culto**
Línea: `Karla Berman y René Lankenau · 2 de noviembre de 2026 · [duración] min`
Botón: `Escuchar ahora` · Etiqueta: `Abierto`

Kicker: `DARK SIDE OF THE ROAD`
Título: **Ep. 10: Tesla en México: ¿el futuro de los autos o una apuesta por algo mucho más grande?**
Línea: `Con Alberto Bortoni · 54 min`
Botón: `Escuchar ahora` · Etiqueta: `Suscriptores`

Kicker: `VIDEO`
Título: **Las lecciones de Fernando Chico Pardo**
Línea: `18 min · 11 de septiembre de 2026`
Botón: `Ver ahora` · Etiqueta: `Suscriptores`

### 4.4 Franja "Lo que ofrece Whitepaper"
Intro (serif itálica, centrada): *Un medio, cuatro maneras de usarlo. Todo con el mismo criterio editorial.*

**LEER** — Cada mañana y cada fin de semana, en tu correo.
`Whitepaper Hoy` · `Principales` · `Spotlights` · `Overview`

**ESCUCHAR** — Para el trayecto, el gimnasio o la sala de espera.
`Whitepaper 10` · `Whitepaper Hoy en audio` · `Dark Side of the Road` · `Arquitectura de los Negocios` · `MexMoves`

**VER** — Conversaciones largas con quienes dirigen empresas en México.
`Entrevistas en video` [sustituir por nombre oficial cuando exista]

**VIVIR** — Fuera del correo: en una sala, en un curso, en un directorio.
`Eventos` · `Whitepaper Learning` · `Directorio de empresas` · `Store`

### 4.5 Últimas ediciones
Kicker: `HOY · ÚLTIMAS EDICIONES`
Intro: *Lo que leyó la comunidad empresarial esta semana y la pasada.*

- `05.11.26` — **Ternium**; todos son "el más grande"; **NBA** en México; **Flying Tiger**; **NY Times**; el impacto de las elecciones intermedias en EUA; **Wegovy**; **Harley-Davidson**
- `04.11.26` — **Primark** en México; **Capital Digital**; **Authentic Brands** y **Lee**; resultados de **Banorte**; **AkzoNobel**; consejos de administración en EUA; **CVS Health**; Spotlight en: **Jacques Marie Mage**
- `03.11.26` — **Sinda**; **Kasai Kogyo**; **RLH Properties**; **Bulkmatic de México**; **Palenca** y **Buró de Ingresos**; recortes de **Disney**; resultados de **Apple**; restricciones a más data centers en EUA
- `02.11.26` — Retrocede **Soriana**; **Anker Bioss**; escobas y cubetas de **Reynera**; movimientos clave; mejoran márgenes de **Televisa**; anuncios de autos en EUA; los retos que enfrenta **DeBeers**
- `30.10.26` — Utilidades de **BBVA**; **PoloTab**; desliste de **Vitro**; conoce a Pati Jinich; **Viva Aerobús**; **7 Brew**; la revista **LIFE**; **Rivian**; **Binance**; más AI y data centers
- `29.10.26` — Resultados de **Femsa**; **Schneider Electric** en Querétaro; **Walmex**, **Chedraui** y **La Comer**; **Clip** y **Pulpos**; **Tesla** en México; el Chipotle de MTY; menos empresas listadas en LATAM; cerveza sin alcohol
- `28.10.26` — **Steren** en Ecuador y Perú; resultados del **Buró**; **Liverpool** y sus boutiques; camiones de **Holcim**; fundadores que no ganan en el exit; **Cheesecake Factory**; casas en Asturias; Spotlight en: **Spirit Halloween**
- `27.10.26` — Récord de **Volaris**; **Nefab** en Nuevo León; otros productos de **Topo Chico**; **99Minutos**; **Vesta**; retornos en los exits; la **NBA** con Kalshi y Polymarket; el S-1 de **Anthropic**; buyout a empleados de **Microsoft**

Enlace: `Ver el archivo completo →`

### 4.6 Bloque LEER
Cabeza de sección: **LEER**
Intro: *Texto que justifica el tiempo que le dedicas.*

**Whitepaper Hoy**
Línea: Lunes a viernes · Suscriptores
Descripción: Seleccionamos las noticias de negocios que importan en México y te explicamos por qué importan. Empresas privadas y públicas, inversiones, startups, movimientos de personas clave y lo que pasa afuera cuando afecta aquí. Cinco minutos bien invertidos, cada mañana.
Mini-índice de formatos fijos (lista en sans pequeña):
- *Comentario Whitepaper* — lo que agregamos nosotros: contexto, cifras y postura, con filete rojo.
- *Spotlight en* — una empresa que vale la pena conocer antes que los demás.
- *Conoce a* — una persona con una carrera que vale la pena seguir, cada lunes, con retrato a tinta.
- *La gente clave de* — quiénes son los rising stars dentro de una empresa, miércoles alternos.
- *Movimientos clave* — nombramientos y cambios que mueven organigramas.
- Gráficas propias, en blanco y negro.
Enlace: `Ir a Whitepaper Hoy →`

**Principales**
Línea: Semanal · Suscriptores · Varios con versión en audio
Descripción: Investigaciones propias sobre empresas e industrias de México, con un nivel de detalle que no encontrarás en otro medio. Cómo opera una empresa, qué hay detrás de una valuación, quién manda realmente dentro de un grupo.
Lista:
- **Los outliers de la inclusión** — René Lankenau y Daniela Dib · 30 de octubre de 2026
- **¿Cómo es que Kavak puede valer 4 mil millones de dólares?** [VERIFICAR título y fecha]
- **El crecimiento de Nowports** [VERIFICAR fecha y autores]
Enlace: `Todas las investigaciones →`

**Spotlights**
Línea: Al menos uno por semana · Suscriptores
Descripción: Perfiles breves, con números, de las empresas que están creciendo antes de que todo mundo hable de ellas. Para identificar clientes, competidores e ideas.
Lista: **Rothy's** · **Spirit Halloween** · **Jacques Marie Mage**
Enlace: `Todos los Spotlights →`

**Overview, by Whitepaper**
Línea: Sábados · Suscriptores
Descripción: La edición de fin de semana, de recomendaciones que quieres tener en el radar: productos, experiencias, estilo y lecturas, seleccionadas por Luis Othón, Humberto Peña Dávalos y Andrea Valeria Díaz Tolivia.
Enlace: `Ir a Overview →`

### 4.7 Bloque ESCUCHAR (protagonista)
Cabeza de sección: **ESCUCHAR**
Intro: *Whitepaper también se escucha. El mismo criterio, con voz.*
Subintro (sans pequeña): Disponible en web, en la app y en Spotify y Apple Podcasts.

Tarjeta 1
Kicker: `WHITEPAPER 10`
Último episodio: **204. Costco: el modelo de negocio detrás de una marca de culto**
Bajada: Qué hay detrás de una membresía que la gente renueva sin pensarlo, y qué pueden aprender de eso las empresas mexicanas. [VERIFICAR contra la descripción del episodio]
Hosts: Karla Berman y René Lankenau
Descripción del show: Historias, decisiones y tendencias que mueven los negocios en México, dos veces por semana. Calificación 4.8 con más de 1,100 reseñas.
Botones: `Escuchar ahora` · `Todos los episodios`
Etiqueta: `Abierto`

Tarjeta 2
Kicker: `WHITEPAPER HOY EN AUDIO`
Último episodio: **Whitepaper Hoy, 5 de noviembre de 2026**
Bajada: Ternium; todos son "el más grande"; NBA en México; Flying Tiger; NY Times; elecciones intermedias en EUA; Wegovy; Harley-Davidson.
Línea: Voces profesionales · 7 min [VERIFICAR]
Descripción del show: La edición diaria, leída en estudio. Para el trayecto a la oficina o entre juntas. Alterna entre texto y audio cuando quieras.
Botones: `Escuchar ahora` · `Todas las ediciones`
Etiqueta: `Suscriptores`

Tarjeta 3
Kicker: `DARK SIDE OF THE ROAD`
Último episodio: **Ep. 10: Tesla en México: ¿el futuro de los autos o una apuesta por algo mucho más grande?**
Bajada: Conducción autónoma en el tráfico mexicano, Tesla como marca premium, la competencia china y la visión de Elon Musk. Con Alberto Bortoni.
Línea: 54 min · 27 de octubre de 2026
Descripción del show: Episodios especiales, de alrededor de una hora, para ir a fondo en un solo tema. [VERIFICAR descripción oficial]
Botones: `Escuchar ahora` · `Todos los episodios`
Etiqueta: `Suscriptores`

Tarjeta 4
Kicker: `ARQUITECTURA DE LOS NEGOCIOS`
Episodio destacado: **Alsea, ep. 1: de Domino's Pizza al nacimiento de un imperio**
Bajada: De la influencia emprendedora de la familia Torrado a la apuesta por la franquicia maestra de Domino's en México a principios de los noventa.
Host: Susana Sáenz
Descripción del show: Cómo funcionan, por dentro, los modelos de negocio. Entrevistas con expertos y relatos de empresa, cada semana. [VERIFICAR día]
Botones: `Escuchar ahora` · `Todos los episodios`
Etiqueta: `Suscriptores` [VERIFICAR]

Tarjeta 5
Kicker: `MEXMOVES` · Etiqueta: `En inglés`
Último episodio: **92. Bulkmatic on Keeping Mexico's Factories on Track; AI Adoption; Mexico's Pre-Muertos Conference Circuit; and More 3Q Results**
Hosts: Damian Fraser y Eduardo García
Descripción del show: Las historias de negocios de México con impacto global, cada semana, con un invitado por episodio. Para quien opera entre México y Estados Unidos.
Botones: `Listen now` · `All episodes` [en inglés a propósito; el show es en inglés]
Etiqueta: `Abierto` [VERIFICAR]

Franja de cierre del bloque (cita real, serif itálica):
*"Empiezo el día con el Podcast de Whitepaper10 camino a dejar a mi hija al colegio y llegando a la oficina termino mi actualización con Whitepaper.mx."*
Badges: `Spotify` · `Apple Podcasts`

### 4.8 Bloque VER
Cabeza de sección: **VER**
Intro: *La conversación que los líderes tienen en privado.*
Descripción del formato: Entrevistas largas, en video, con quienes dirigen, fundan o financian empresas en México. Trayectoria, decisiones y lo que aprendieron, sin guion de relaciones públicas. Exclusivas para suscriptores. [Cuando exista nombre oficial, sustituir "Entrevistas en video" por el nombre en el kicker.]

Tarjeta principal (16:9)
Kicker: `VIDEO`
Título: **Las lecciones de Fernando Chico Pardo**
Línea: 18 min · 11 de septiembre de 2026
Botón: `Ver ahora` · Etiqueta: `Suscriptores`

Tarjeta secundaria
Kicker: `VIDEO` [VERIFICAR si es video]
Título: **Pablo Elek, Country Head de Scotiabank México**
Línea: 18 min · 12 de marzo de 2026
Botón: `Ver ahora` · Etiqueta: `Suscriptores`

Línea de cierre: `Todas las conversaciones →`

### 4.9 Lo que dicen los suscriptores
Cabeza: **LO QUE DICEN LOS SUSCRIPTORES**
Citas (textuales; no editar):

*"El mejor newsletter del mundo de los negocios en español. Para mantenerse al día y tener temas de conversación."*
— Carlos G. Gaytán, El Núcleo

*"Todos los días un resumen con la información que los tomadores de decisiones de negocios en México necesitan saber."*
— Ximena Norzagaray, The Book Summaries

*"Me encanta escuchar su podcast. El análisis de los negocios que hacen, con ese profesionalismo y profundidad no lo hace nadie más en México."*
— Suscriptor [VERIFICAR nombre o dejar sin firma]

*"No sé exactamente cómo describir a Whitepaper. Me parece la unión de un gran diseño editorial gráfico… Se lee bonito, se ve espectacular. Tiene fondo e importancia. Y siento orgullo pagar un producto de vanguardia."*
— Suscriptor

*"Vivo en el extranjero, trabajo en un Multi Family Office con sede en Ginebra… espero que el contenido me sirva para estar actualizado en temas de negocios en México."*
— Fernando Estrada, Brainvest

Línea de datos debajo (sans pequeña): `Más de 14,500 suscriptores de paga · Tasa de apertura diaria superior a 65% · Publicado desde 2020`

### 4.10 Para quién es / para quién no es
Cabeza: **PARA QUIÉN ES WHITEPAPER**

Columna izquierda — **Es para ti si**
- Diriges, construyes o financias una empresa en México, o aspiras a hacerlo.
- Necesitas entender el negocio de los demás, no solo el tuyo: clientes, competidores, proveedores, inversionistas.
- Prefieres cinco minutos con criterio a una hora de titulares.
- Quieres llegar a la junta sabiendo algo que los demás todavía no saben.
- Valoras que un medio te trate como alguien inteligente.

Columna derecha — **No es para ti si**
- Buscas las noticias del día, en el momento, sin costo.
- Quieres opinión política o cobertura de coyuntura.
- Buscas motivación, frases o atajos.
- Prefieres leer lo mismo que ya está en todos lados.

Remate (una línea, serif itálica): *Whitepaper no es para todos. Para los perfiles adecuados, no hay otro igual.*

### 4.11 Bloque VIVIR
Cabeza de sección: **VIVIR**
Intro: *Whitepaper fuera del correo.*

**Eventos**
Kicker: `EVENTO`
Título: **Encuentros para suscriptores**
Descripción: Conversaciones en vivo con empresarios, inversionistas y directivos, en Monterrey y Ciudad de México. Cupo limitado; las invitaciones llegan primero a suscriptores.
Línea: Próximo evento: [fecha · ciudad · invitado] [VERIFICAR; si no hay, usar "Se anuncia por correo a suscriptores"]
Enlace: `Quiero recibir la invitación →`

**Whitepaper Learning**
Kicker: `LEARNING`
Título: **Cursos con quienes toman las decisiones**
Descripción: La división educativa de Whitepaper. Programas en línea sobre sucesión del CEO, consejos de administración, valuación de empresas y M&A, impartidos por practicantes: Alfonso González Migoya, Karla Berman, Leon Kraig, Ricardo Dávila, Rodrigo García-Triana, Ariel Fischman, Eduardo Botello y Gerardo Guajardo.
Lista: *La sucesión del CEO* · *Cómo crear un Consejo que funcione* · *Valuación de Empresas* · *M&A: lo que todo líder debe saber antes, durante y después de una transacción*
Enlace: `Ver los cursos →`

**Directorio de empresas**
Kicker: `DIRECTORIO`
Título: **Las empresas mexicanas que tienes que conocer**
Descripción: Fichas de las empresas sobre las que escribimos, actualizadas cada semana desde Whitepaper Hoy. Esta semana entró CIE. Acceso con tu correo de suscriptor.
Enlace: `Entrar al directorio →` · Etiqueta: `Suscriptores`

**Store** (línea discreta debajo de las tres columnas)
`STORE` — Essentials Whitepaper y la gorra Whitepaper, en hq.whitepaper.mx →

### 4.12 Suscripción
Kicker: `SUSCRIPCIÓN`
Titular: **Menos ruido. Más criterio.**
Bajada: Una suscripción, todo Whitepaper: la edición diaria en texto y audio, las investigaciones, Overview, los podcasts para suscriptores, el video, el directorio y la invitación a los eventos.

Qué incluye (dos columnas, lista tipográfica):
- Whitepaper Hoy, lunes a viernes, en texto y en audio
- Principales: las investigaciones propias
- Spotlights y Overview, by Whitepaper
- Dark Side of the Road y Arquitectura de los Negocios
- Entrevistas en video
- Directorio de empresas
- Invitación a eventos para suscriptores
- Archivo completo desde 2020

Precios:
**$1,590 al año** — equivale a $132.50 al mes (destacado)
$189 al mes
Botón rojo: `Suscríbete` (redirige a https://www.whitepaper.mx/subscribe)
Línea bajo el botón: `Cancela cuando quieras. El pago se procesa en Substack.`
Línea de equipos: `¿Para tu equipo o tu consejo? Suscripción corporativa →` [VERIFICAR destino]
Opcional [VERIFICAR]: `Whitepaper Legacy: $6,295 al año, para quienes quieren sostener este proyecto.`

### 4.13 Nota de cierre
Kicker: `NOTA DEL EDITOR` [si se firma; si no, sin kicker]
Texto (serif, con capitular): Whitepaper nació en 2020 con una idea sencilla: la comunidad empresarial de México merece mejor información. No más información; mejor. Desde entonces publicamos cada mañana para que quien dirige, construye o financia una empresa empiece el día con menos ruido y más criterio. Seguimos siendo independientes, sin publicidad que estorbe, y seguimos escribiendo para personas inteligentes que entienden negocios. Si eres una de ellas, aquí tienes tu lugar.
Firma: `René Lankenau, fundador` [requiere su aprobación; alternativa: `La redacción de Whitepaper`]

### 4.14 Footer
Wordmark pequeño + tagline: **WHITEPAPER** — Lo que la comunidad empresarial necesita saber.

Columna LEER: Whitepaper Hoy · Principales · Spotlights · Overview · Archivo
Columna ESCUCHAR: Whitepaper 10 · Whitepaper Hoy en audio · Dark Side of the Road · Arquitectura de los Negocios · MexMoves · Spotify · Apple Podcasts
Columna VER: Entrevistas en video
Columna VIVIR: Eventos · Whitepaper Learning · Directorio de empresas · Store
Columna WHITEPAPER: Nosotros · Suscríbete · Suscripción corporativa · Soporte · Contacto · Iniciar sesión
Redes: LinkedIn · Instagram · X [VERIFICAR cuentas oficiales de marca; la cuenta vinculada en Substack es @renelankenau]
Legal: Privacidad · Términos · Aviso de recopilación de datos (Substack)
Colofón (una línea): `© 2026 WP Media · Monterrey / Ciudad de México · Publicado desde el 19 de mayo de 2020 · Hecho en México`

---

## 5. REGLAS DE ESTILO TIPOGRÁFICO EDITORIAL (para quien maqueta)

### 5.1 Bylines
- En piezas con autor: `Por René Lankenau y Daniela Dib`. En tarjetas y listas, sin "Por": `René Lankenau y Daniela Dib`.
- Tres o más autores: `Luis Othón, Humberto Peña Dávalos y Andrea Valeria Díaz Tolivia` (coma, y "y" antes del último; sin coma antes de "y").
- Sin autor individual: `Redacción Whitepaper`.
- Colaboradores externos: `El Míster, para Whitepaper`.
- Hosts de podcast: `Karla Berman y René Lankenau` (orden en que aparecen en la descripción oficial). Invitados: `Con Alberto Bortoni`.
- Nombres con acento siempre (René, Sáenz, Díaz, Peña Dávalos, Othón). "Rene Lankenau" sin acento solo aparece en metadatos de Substack; en el home siempre René.
- Separador entre byline, fecha y duración: punto medio con espacios ` · `.

### 5.2 Fechas
- Larga (titulares, folio, tarjetas principales): `5 de noviembre de 2026`. Día sin cero a la izquierda, mes en minúscula, "de" entre cada parte. Nunca "05 de Noviembre de 2026" (así está en los títulos de audio de Substack; no copiar ese formato).
- Con día de la semana (folio y kicker HOY): `Jueves 5 de noviembre de 2026`. El día de la semana con mayúscula inicial solo porque abre la línea.
- Compacta (listas densas como Últimas ediciones): `05.11.26` (día.mes.año, dos dígitos cada uno). Es la única posición donde se admite cero a la izquierda.
- Nunca formatos en inglés (Nov 05, 2026) ni barras (05/11/26).
- Año de fundación y colofón: `desde 2020`.

### 5.3 Duración y lectura
- Audio y video: número + `min`, sin punto: `7 min`, `54 min`. Más de una hora: `1 h 12 min`.
- Lectura: `5 min de lectura`.
- No se redondea hacia abajo para presumir brevedad; se usa la duración real del archivo.

### 5.4 Numerales (reglas del editor senior de Whitepaper)
- Del cero al nueve, con letra: "cinco minutos", "nueve meses", "cuatro plantas". Del 10 en adelante, dígitos: "13%", "18 millones".
- Miles con coma: `1,000`, `14,500`, `81,000`. A partir de cifras largas, mezcla letra y número: `2 mil 500`, `3 millones 200 mil`. En el home, para cifras de empresa, se respeta el formato de la nota original ("$6,641 millones de dólares").
- Porcentajes: dígito + `%` sin espacio: `13%`, `7.4%`. Decimales con punto.
- Moneda: `$` antes del monto, sin espacio. Pesos por defecto; si es dólares, se escribe "millones de dólares" después de la cifra. Nunca "USD" ni "MXN" en texto corrido; en el folio y la caja de precios, los montos son en pesos y no se aclara.
- "Estados Unidos" se abrevia `EUA`. Nunca "EE.UU." ni "USA".
- Ordinales: `tercer trimestre`, no "3T" en titulares (sí en gráficas).
- Edición y año en el folio: `Año VII` en romanos; `Edición No. 1,480` en arábigos con coma.

### 5.5 Negritas, cursivas y comillas
- **Negritas** en el nombre de la empresa, marca o persona protagonista de cada entrada del sumario o teaser, en su primera mención (igual que el newsletter). No en adjetivos, no en verbos, no en cifras (las cifras en rojo son recurso de la gráfica y del Comentario, no del titular).
- *Cursivas* para: todo el bloque *Comentario Whitepaper* (regla estricta de la casa), títulos de shows y artículos cuando se citan dentro de un párrafo, extranjerismos (*direct-to-consumer*, *exit*, *deep dive*) y las líneas de intro de sección.
- Comillas dobles tipográficas ("…") solo para citas textuales de personas o documentos. **Nunca** para enfatizar ni para marcar ironía. Si el original trae comillas de énfasis (p. ej. "el más grande"), en el home se conservan solo cuando es una cita de la empresa; si no, se quitan.
- Sin signos de admiración en ningún texto del home. Las preguntas se admiten solo en titulares genuinos (¿Cómo es que Kavak puede valer…?).

### 5.6 Mayúsculas
- Kickers y cabezas de sección en caja alta con acentos: `SPOTLIGHT EN`, `EDICIÓN`, `SÁBADO`.
- Titulares en caja baja normal (solo mayúscula inicial y nombres propios). Nunca Title Case.
- Nombres de producto: `Whitepaper Hoy`, `Principales`, `Overview, by Whitepaper`, `Whitepaper 10`, `Dark Side of the Road`, `Arquitectura de los Negocios`, `Whitepaper Learning`, `Directorio de empresas` (solo "Directorio" con mayúscula).
- El wordmark es `WHITEPAPER`; en texto corrido, `Whitepaper`. Nunca "WhitePaper" ni "WP" de cara al lector.

### 5.7 Capitulares, filetes y otros gestos de print
- Capitular (drop cap) solo en: el extracto del Comentario Whitepaper de primera plana, la descripción de "Qué es Whitepaper" si se usa, y la Nota de cierre. En ningún otro lugar.
- El rojo se reserva a: filete y kicker del Comentario Whitepaper, botón Suscríbete, firma "w" en ilustraciones, y cifras clave dentro de gráficas. No para enlaces, no para kickers de producto.
- Filete doble para cabezas de sección (LEER, ESCUCHAR, VER, VIVIR); filete sencillo para separar tarjetas; filete grueso solo para la caja de suscripción.
- Separadores en listas de sumario: punto y coma, como en el correo. Separadores en metadatos: punto medio.
- Guion largo (—) para incisos y para la atribución de citas; nunca guion corto doble.

### 5.8 Botones y microcopy (verbos, siempre en infinitivo o imperativo de tú)
- Texto: `Leer la edición`, `Ver archivo`, `Ir a Whitepaper Hoy`.
- Audio: `Escuchar ahora` · `Todos los episodios` · `Escuchar · 7 min`.
- Video: `Ver ahora` · `Todas las conversaciones`.
- Conversión: `Suscríbete` (único botón rojo) · `Iniciar sesión`.
- MexMoves conserva inglés: `Listen now` · `All episodes`.
- Prohibidas en el home: "gratis", "oferta", "descuento", "regalo", "promoción", "increíble", "revolucionario", "disruptivo", "todo lo que necesitas saber".

### 5.9 Etiquetas de acceso
- `Suscriptores` y `Abierto` en caja alta pequeña, al final de la tarjeta, nunca junto al kicker. Sin ícono de candado gráfico; si se quiere un signo, usar un glifo tipográfico discreto (·) antes de la palabra.

---

## 6. PENDIENTES DE VERIFICACIÓN (lista única para el equipo de Whitepaper)

1. Días de publicación de Whitepaper 10 (lunes Deep Dive / miércoles noticias vs. jueves) y si el Deep Dive es solo para suscriptores.
2. Descripción oficial, host fijo y periodicidad de Dark Side of the Road.
3. Día de publicación y acceso (abierto o suscriptores) de Arquitectura de los Negocios; si tiene feed propio.
4. Si MexMoves se muestra en el home y su acceso.
5. Nombre oficial del producto de video; si "Pablo Elek, Country Head Scotiabank Mexico" es video o solo audio; periodicidad.
6. Duración real del audio de Whitepaper Hoy del 5 de noviembre y del episodio 204 de Whitepaper 10.
7. Título exacto y fecha del artículo de Kavak; fecha y autores de "El crecimiento de Nowports".
8. Día fijo de Principales (el brief interno dice viernes; el último salió jueves).
9. Calendario y URL de Eventos; correo de suscripción corporativa (el About tiene un placeholder).
10. Si el trial de 7 días activo en Substack se comunica o no en el home.
11. Si se muestra Whitepaper Legacy ($6,295 al año).
12. Cuentas oficiales de redes de la marca.
13. Número de edición para el folio (conteo de ediciones de Hoy desde el 19 de mayo de 2020).
14. Nombres de las voces del audio diario, si se quieren acreditar.
15. Qué contiene "Essentials Whitepaper" en la Store.
16. Vigencia de las secciones heredadas Sunday y Runway (recomendación: no mostrarlas).
17. Qué rutas `/t/hoy`, `/t/principales`, `/t/overview`, `/t/spotlights` resuelven públicamente en Substack.

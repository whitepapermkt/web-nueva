# Whitepaper · Nuevo home (v1 · 5 nov 2026)

Abrir `index.html` en el navegador. Sitio estático: HTML + `assets/css/home.css` + `assets/js/home.js`. Sin dependencias.

## Cómo se construyó
Cuatro especificaciones de agentes, en `docs/`:
- `01-editorial.md`: taxonomía Leer · Escuchar · Ver · Vivir, kickers, copy final con contenido real.
- `02-diseno.md`: sistema visual "edición impresa, tirada digital", tokens, filetes, tipografía.
- `03-uxui.md`: wireframes, navegación, reproductor, accesibilidad, responsive.
- `04-marketing.md`: propuesta de valor, precio, testimonios, CTAs, analytics y pruebas A/B.

## Orden del home
1. Barra utilitaria fija con "Escuchar Whitepaper 10" y Suscríbete.
2. Masthead con folio de periódico y nav por producto.
3. Primera plana en tres columnas: Principales · Hoy · Escuchar y ver.
4. Índice de la casa: Leer · Escuchar · Ver · Vivir.
5. N.º 01 Escuchar (banda en tinta, cinco shows, reproductor real para Whitepaper 10 y MexMoves).
6. N.º 02 Ver · 7. N.º 03 Leer · 8. Testimonios y cifras · 9. Para quién es · 10. Vivir.
11. Suscripción con selector anual/mensual · 12. Nota de la redacción · 13. Colofón.

## Decisiones tomadas al conciliar a los agentes
- Rojo de marca #D7261D (pasa contraste AA). Botones en tinta; el rojo solo anota: Comentario, cifras, Abierto.
- "Suscríbete" como texto único de CTA. Se usa "Abierto" en lugar de "gratis".
- Videos sin fotograma real: se muestran como portada tipográfica con trama, no con fotos de otras personas.
- Portadas tipográficas para Whitepaper Hoy en audio, Dark Side of the Road y Arquitectura de los Negocios hasta tener arte oficial.

## Pendientes por verificar con el equipo
- Rutas de Substack `/t/hoy`, `/t/principales`, `/t/overview`, `/t/spotlights` y URL de inicio de sesión.
- Descripción oficial y periodicidad de Dark Side of the Road y Arquitectura de los Negocios.
- Nombre oficial del producto de video y sus fotogramas.
- Si MexMoves debe aparecer en el home.
- Destino de Suscripción corporativa y Regalar una suscripción.
- Permiso para citar testimonios sin nombre.
- Calendario de eventos.
- Muestras de audio de 60–90 s para los shows de suscriptores (el reproductor ya las soporta).
- Convertir fuentes TTF a WOFF2 y vectorizar el logo a SVG antes de producción.

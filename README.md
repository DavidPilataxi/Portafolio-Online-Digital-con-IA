# Portafolio web de David Pilataxi

## Abrir en Visual Studio Code
1. Extrae el archivo ZIP.
2. En VS Code, selecciona **Archivo > Abrir carpeta** y abre `portafolio-david`.
3. Abre `index.html` mediante la extensión **Live Server** (clic derecho > **Open with Live Server**). También puedes abrir `index.html` directamente en el navegador.

## Estructura
- `index.html`: contenido y estructura semántica.
- `styles.css`: diseño responsive, estados visuales y modo oscuro.
- `script.js`: interacciones, filtros, navegación y copiar correo.
- `assets/CV-David-Pilataxi.pdf`: CV que se descarga mediante el botón de la portada.

## Nielsen e ISO 9241
Se utilizan las heurísticas de Nielsen (NN/g) y como referencia los principios de interacción de **ISO 9241-110:2020**. Estas son decisiones de diseño alineadas con dichas guías, no una certificación formal de cumplimiento.

| Principio | Aplicación concreta |
| --- | --- |
| Nielsen 1 - Visibilidad del estado | Filtro seleccionado, aviso de correo copiado, sección activa en navegación |
| Nielsen 2 - Correspondencia con el mundo real | Secciones con terminología de CV: experiencia, habilidades, formación |
| Nielsen 3 - Control y libertad | Filtros reversibles, botón para cerrar menú, escape para cerrarlo y modo claro/oscuro |
| Nielsen 4 - Consistencia y estándares | Cabecera, tarjetas, botones y navegación coherentes; enlaces convencionales |
| Nielsen 5 - Prevención de errores | Contacto mediante `mailto:` y `tel:` sin formulario que pueda fallar o perder datos |
| Nielsen 6 - Reconocer mejor que recordar | Menú visible, etiquetas en filtros, habilidades agrupadas |
| Nielsen 7 - Flexibilidad y eficiencia | Filtrado rápido, enlaces directos, descarga del CV |
| Nielsen 8 - Estética y minimalismo | Jerarquía visual, contenido conciso, espacio y contraste equilibrados |
| Nielsen 9 - Recuperación de errores | Mensaje explícito cuando el portapapeles no esté disponible |
| Nielsen 10 - Ayuda y documentación | Acciones con texto claro y README con instrucciones de uso |
| ISO 9241-110 - Adecuación a la tarea | El reclutador puede localizar CV, experiencia y contacto directamente |
| ISO 9241-110 - Autodescriptividad | Etiquetas comprensibles e información de estado en controles |
| ISO 9241-110 - Conformidad con expectativas | Enlaces, menú y botones con comportamientos esperados |
| ISO 9241-110 - Facilidad de aprendizaje | Navegación simple sin instrucciones previas |
| ISO 9241-110 - Controlabilidad | Menú y filtros reversibles, control de tema |
| ISO 9241-110 - Robustez ante errores de uso | Feedback si copiar correo falla; contenido básico disponible sin JS |
| ISO 9241-110 - Compromiso del usuario | Presentación ordenada, diseño adaptable y comunicación directa |

Accesibilidad adicional: estructura semántica, enlace para saltar al contenido, navegación por teclado, indicadores de foco, regiones `aria-live`, `aria-expanded` en menú y soporte para `prefers-reduced-motion`.

## Personalización
- Modifica textos, experiencia y URLs en `index.html`.
- Cambia colores desde las variables `:root` de `styles.css`.
- Añade proyectos reales en una nueva sección si lo deseas. No se inventaron proyectos no incluidos en el CV.

**Referencias:**
- https://www.nngroup.com/articles/ten-usability-heuristics/
- https://www.iso.org/standard/75258.html

**Nota:** Este diseño no implica cumplimiento verificado de toda la familia ISO 9241 ni sustituye pruebas de usabilidad reales con usuarios.


## Foto de perfil y contacto por WhatsApp
- La imagen está en `assets/foto.png` y se muestra dentro de la consola `perfil.js`. Sustitúyela por otra imagen con el mismo nombre para actualizarla.
- El botón de WhatsApp aparece en Contacto. El texto es editable **por el visitante dentro de WhatsApp antes de enviarlo**. Para cambiar el mensaje inicial, modifica el parámetro `text=` del enlace `https://wa.me/593984253860?text=...` en `index.html` (en ambas apariciones).
- El código del tema oscuro, los filtros y el menú está en `script.js` y no requiere cambios.

## Botón flotante WhatsApp
El botón verde permanece fijo abajo a la izquierda en todas las secciones. Su enlace y mensaje predeterminado se pueden modificar en `index.html`, buscando `class="whatsapp-fab"`. El visitante puede editar el mensaje en WhatsApp antes de enviarlo.

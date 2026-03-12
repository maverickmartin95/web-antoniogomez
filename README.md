# Web · Antonio Gómez – Asesor de Seguros Generali

Sitio web personal de Antonio Gómez, asesor de seguros de Generali. Diseñado para captar clientes potenciales y ofrecer información clara sobre los servicios disponibles.

---

## Índice

1. [Descripción general](#descripción-general)
2. [Estructura del proyecto](#estructura-del-proyecto)
3. [Cómo abrir el proyecto](#cómo-abrir-el-proyecto)
4. [Páginas](#páginas)
5. [Diseño visual](#diseño-visual)
6. [Contenido y textos](#contenido-y-textos)
7. [Contacto y datos de Antonio](#contacto-y-datos-de-antonio)
8. [Pendiente y próximos pasos](#pendiente-y-próximos-pasos)

---

## Descripción general

Web de una sola página principal (`index.html`) con páginas secundarias para cada sección. Está construida en HTML, CSS y JavaScript vanilla — sin frameworks ni dependencias externas. El objetivo es que sea ligera, rápida y fácil de mantener.

**Cliente:** Antonio Gómez  
**Empresa:** Generali Seguros  
**Territorio:** Toda España (no limitado a Granada)

---

## Estructura del proyecto

```
WEB-ANTONIOGOMEZ/
│
├── index.html                  → Página principal
│
├── pages/
│   ├── sobreMi.html            → Página sobre Antonio
│   └── segurosYprotecciones.html → Listado completo de seguros
│
├── css/
│   └── styles.css              → Estilos globales (nav, botones, hero, cards, footer)
│
├── src/
│   └── img/
│       ├── LogoLeon.png        → Logo del león Generali (con fondo)
│       ├── LogoLeon.svg        → Logo del león Generali (sin fondo, color rojo)
│       ├── LogoLeon.jpeg       → Logo del león Generali (versión JPEG)
│       ├── LogoLetras.jpeg     → Logo con texto "Generali"
│       ├── LogoLetras.png      → Logo con texto "Generali" (PNG)
│       ├── LogoLetras.svg      → Logo con texto "Generali" (SVG)
│       └── aseguradoras-generali.svg → Logo oficial Generali
│
└── README.md                   → Este archivo
```

> **Nota sobre CSS:** En el futuro, el archivo `styles.css` se dividirá en varios archivos, uno por página (ej: `segurosYprotecciones.css`, `sobreMi.css`), para mantener el código más organizado y fácil de escalar.

---

## Cómo abrir el proyecto

### En local

1. Clona o descarga el repositorio
2. Abre el archivo `index.html` directamente en el navegador

No necesita servidor ni instalación de dependencias.

### En GitHub Codespaces

1. Abre el repositorio en GitHub
2. Haz clic en **Code → Open with Codespaces**
3. Una vez abierto, haz clic derecho sobre `index.html` y selecciona **Open with Live Server** (si tienes la extensión instalada)

### Extensión recomendada para VS Code

- **Live Server** (Ritwick Dey) — recarga el navegador automáticamente al guardar cambios

---

## Páginas

### `index.html` — Página principal

Estructura:

| Sección | Descripción |
|---|---|
| **Nav** | Logo del león Generali + botones "Área cliente" y "Contactar" |
| **Hero** | Presentación de Antonio con badge, título, subtítulo y botones de acción |
| **Stats** | Tres cifras clave: clientes, satisfacción, disponibilidad |
| **Cards** | Tres seguros principales: vida, hogar y decesos |
| **Trust** | Lista de razones para confiar en Antonio |
| **Footer CTA** | Llamada a la acción final con botón de contacto |

---

### `pages/segurosYprotecciones.html` — Todos los seguros

Muestra los 9 seguros disponibles en tarjetas iguales, sin jerarquía entre ellos:

- Seguro de vida
- Seguro de hogar
- Seguro de decesos
- Seguro de coche
- Seguro de moto
- Seguro de salud
- Seguro de accidentes
- Seguro para empresas
- Responsabilidad civil

Cada tarjeta tiene espacio reservado para una foto que se añadirá más adelante.

---

### `pages/sobreMi.html` — Sobre Antonio

Página en construcción. Contendrá información personal y profesional de Antonio Gómez.

---

## Diseño visual

### Paleta de colores

| Uso | Color | Hex |
|---|---|---|
| Fondo general | Crema rosada | `#F8F7F4` |
| Acento principal | Rojo Generali | `#C21B17` |
| Acento oscuro | Rojo oscuro Generali | `#8F1411` |
| Texto principal | Negro suave | `#1A1A1A` |
| Texto secundario | Gris medio | `#6B7280` |
| Blanco tarjetas | Blanco puro | `#FFFFFF` |
| Nav | Rojo Generali | `#C21B17` |

### Tipografía

| Uso | Fuente |
|---|---|
| Títulos y cuerpo principal | `Georgia, 'Times New Roman', serif` |
| Navegación, botones, etiquetas | `'Helvetica Neue', Helvetica, Arial, sans-serif` |

### Estilo general

- Minimalista con toque cálido rojizo
- Tarjetas blancas con borde suave y sombra ligera
- Hover con elevación suave (`translateY(-4px)`)
- Botones redondeados (border-radius: 30px)
- Nav fija en scroll con fondo rojo Generali

### Logo

Se usa `LogoLeon.svg` en la barra de navegación. El SVG fue procesado para eliminar el fondo negro original y se colorea con el rojo Generali (`#C21B17`). Altura en nav: `70px`.

---

## Contenido y textos

### Identidad

- **Nombre visible:** Antonio Gómez
- **Rol:** Asesor de seguros Generali / Asesor especializado en protección familiar

### Propuesta de valor

- Asesoramiento personalizado
- Trato cercano y directo
- Soluciones adaptadas a cada cliente
- Experiencia con familias

### Textos clave

| Elemento | Texto |
|---|---|
| Hero título | *Hola, soy Antonio Gómez. Tu asesor de seguros.* |
| Hero subtítulo | *Te ayudo a encontrar la cobertura perfecta para lo que más valoras.* |
| CTA principal | *Envíame un WhatsApp* |
| CTA secundario | *Ver todas las coberturas* |
| Footer meta | *Antonio Gómez · Asesor Generali · Granada, España* |

---

## Contacto y datos de Antonio

| Campo | Valor |
|---|---|
| Teléfono / WhatsApp | +34 692 833 640 |
| Link WhatsApp | `https://wa.me/34692833640` |
| Mensaje automático | *Hola Antonio, quiero información sobre un seguro.* |
| Ubicación | Granada (pero la web cubre toda España) |

---

## Pendiente y próximos pasos

- [ ] Añadir fotos reales a las tarjetas de `segurosYprotecciones.html`
- [ ] Desarrollar la página `sobreMi.html`
- [ ] Arreglar el botón "Contactar" del nav (actualmente invisible sobre fondo rojo)
- [ ] Enlazar botones de WhatsApp con el link real de Antonio
- [ ] Añadir email de Antonio cuando esté disponible
- [ ] Añadir redes sociales reales (Facebook, Instagram, Twitter)
- [ ] Dividir `styles.css` en archivos por página
- [ ] Revisar y ajustar textos finales con Antonio
- [ ] Optimizar para móvil (responsive completo)
- [ ] Considerar despliegue (GitHub Pages, Netlify, etc.)
# antoniogomezseguros.com

Sitio web profesional de **Antonio Gómez**, asesor de seguros asociado a Generali España. Diseñado para captar clientes potenciales, presentar los productos disponibles y facilitar el contacto directo a través de WhatsApp.

---

## Índice

1. [Descripción general](#descripción-general)
2. [Stack tecnológico](#stack-tecnológico)
3. [Estructura del proyecto](#estructura-del-proyecto)
4. [Páginas](#páginas)
5. [Sistema de diseño](#sistema-de-diseño)
6. [Calculadora / Formulario de contacto](#calculadora--formulario-de-contacto)
7. [Integraciones](#integraciones)
8. [Despliegue](#despliegue)
9. [Desarrollo local](#desarrollo-local)
10. [Datos de contacto de Antonio](#datos-de-contacto-de-antonio)
11. [Pendiente](#pendiente)

---

## Descripción general

Web estática de una página principal (`index.html`) con páginas secundarias para cada sección. Construida en **HTML, CSS y JavaScript vanilla** — sin frameworks, sin dependencias externas, sin proceso de compilación.

| Campo | Valor |
|---|---|
| **Cliente** | Antonio Gómez |
| **Empresa** | Generali Seguros |
| **Dominio** | [antoniogomezseguros.com](https://www.antoniogomezseguros.com) |
| **Territorio** | Toda España |
| **Hosting** | Vercel |
| **DNS** | Hostinger → Vercel (`ns1.vercel-dns.com`, `ns2.vercel-dns.com`) |

---

## Stack tecnológico

- **HTML5** — semántico, sin frameworks
- **CSS3** — variables CSS, Flexbox, Grid, animaciones
- **JavaScript vanilla** — sin dependencias
- **Google Fonts** — Playfair Display + DM Sans (via `@import` en `styles.css`)
- **Google Analytics** — G-WHWX365FH4
- **Vercel** — despliegue continuo desde GitHub

---

## Estructura del proyecto

```
web-antoniogomez/
│
├── index.html                        → Página principal
│
├── pages/
│   ├── sobreMi.html                  → Página sobre Antonio
│   ├── segurosYprotecciones.html     → Listado de los 9 seguros
│   └── seguro.html                   → Detalle dinámico de cada seguro (?id=)
│
├── css/
│   └── styles.css                    → Estilos globales compartidos por todas las páginas
│
├── js/
│   ├── calculadora.js                → Lógica del formulario de captación de datos
│   └── script.js                     → Datos de los 9 seguros (objeto JS centralizado)
│
├── src/
│   └── img/
│       ├── antonio.jpeg              → Foto de Antonio (usada en sobreMi.html)
│       ├── LogoLeon.png              → Logo del león Generali (nav)
│       ├── LogoLetras.jpeg           → Logo con texto Generali
│       ├── favicon.ico               → Favicon principal
│       ├── favicon-32x32.png         → Favicon 32px
│       ├── vida.PNG                  → Imagen seguro de vida
│       ├── hogar.PNG                 → Imagen seguro de hogar
│       ├── decesos.PNG               → Imagen seguro de decesos
│       ├── auto.PNG                  → Imagen seguro de coche/moto
│       └── accidentes.PNG            → Imagen seguro de accidentes
│
└── README.md                         → Este archivo
```

---

## Páginas

### `index.html` — Página principal

| Sección | Descripción |
|---|---|
| **Nav** | Logo Generali + botones "Sobre mí" y "Ver todos los seguros" |
| **Hero** | Presentación de Antonio, CTA WhatsApp (verde) y enlace a seguros |
| **Stats** | +800 clientes · 100% satisfacción · 24h atención |
| **Cards** | 3 seguros destacados: Vida, Hogar, Decesos |
| **Trust** | 4 razones para confiar en Antonio |
| **Calculadora** | Formulario de 3 pasos para captar datos y enviar por WhatsApp |
| **Footer CTA** | Botón de contacto + datos legales + redes sociales |

---

### `pages/segurosYprotecciones.html` — Todos los seguros

Grid con los 9 seguros disponibles. Cada tarjeta enlaza a `seguro.html?id=<tipo>`:

- Seguro de vida
- Seguro de hogar
- Seguro de decesos
- Seguro de coche
- Seguro de moto
- Seguro de salud
- Seguro de accidentes
- Seguro para empresas
- Responsabilidad civil

---

### `pages/seguro.html` — Detalle de seguro (dinámico)

Página dinámica que lee el parámetro `?id=` de la URL y renderiza el contenido correspondiente usando el objeto `seguros` definido en `js/script.js`. Incluye: descripción, coberturas, ventajas, bloque "¿Es para ti?" y CTA de WhatsApp personalizado con el nombre del seguro.

---

### `pages/sobreMi.html` — Sobre Antonio

Página completa con foto de Antonio, bio, números clave, valores profesionales, lista de seguros disponibles y CTA de contacto.

---

## Sistema de diseño

### Variables CSS (definidas en `:root` de `styles.css`)

```css
--red:        #C21B17   /* Rojo Generali — color principal */
--red-dark:   #8F1411   /* Rojo oscuro — hover de botones */
--cream:      #F8F7F4   /* Fondo general */
--cream-dark: #F0EEE9   /* Fondo secundario */
--text:       #1A1A1A   /* Texto principal */
--muted:      #6B7280   /* Texto secundario */
--border:     rgba(0,0,0,0.08)  /* Bordes suaves */
```

### Tipografía

| Uso | Fuente |
|---|---|
| Títulos (`h1`, `h2`) | `Playfair Display` (serif, editorial) |
| Cuerpo, botones, etiquetas | `DM Sans` (sans-serif, limpio) |
| Fallback | `Georgia` / `Helvetica Neue` |

### Componentes reutilizables

| Clase | Descripción |
|---|---|
| `.btn-outline` | Botón transparente con borde blanco (nav) |
| `.btn-dark` | Botón verde WhatsApp (#25D366) |
| `.btn-ghost` | Botón transparente con borde gris |
| `.btn-red-large` | Botón rojo Generali — CTA principal |
| `.card` | Tarjeta blanca con hover elevación |
| `.whatsapp-float` | Botón flotante WhatsApp (esquina inferior derecha) |

### Estilo general

- Minimalista con toque editorial cálido
- Nav fija (sticky) con fondo rojo Generali
- Tarjetas blancas con sombra suave y hover `translateY(-4px)`
- Botones redondeados (`border-radius: 30px`)
- Animaciones suaves (`transition: 0.2s`)
- Responsive con media queries en 768px, 640px, 560px y 480px

---

## Calculadora / Formulario de contacto

El formulario de 3 pasos (`js/calculadora.js`) recopila los datos necesarios para que Antonio pueda preparar un presupuesto real y los envía como mensaje formateado a su WhatsApp.

### Flujo

```
Paso 1 → Elegir tipo de seguro
Paso 2 → Rellenar datos específicos (campos dinámicos según seguro)
Paso 3 → Revisar resumen y enviar a WhatsApp
```

### Campos por seguro

| Seguro | Campos |
|---|---|
| **Vida** | Sexo, fecha nacimiento, código postal, capital fallecimiento, capital invalidez, capital enf. graves, otras garantías |
| **Hogar** | DNI, fecha nacimiento, dirección, código postal |
| **Decesos** | Sexo, fecha nacimiento, código postal, nº asegurados |
| **Coche** | DNI, nombre y apellidos, fecha nacimiento, fecha carnet, código postal, matrícula, modelo, últimos 5 dígitos póliza anterior |
| **Moto** | Igual que coche (modelo adaptado) |
| **Accidentes** | Sexo, fecha nacimiento, código postal |
| **Salud** | Pendiente — sin campos aún |
| **Empresas** | Pendiente — sin campos aún |
| **RC** | Pendiente — sin campos aún |

> Cuando Antonio facilite los campos para Salud, Empresas y RC, añadirlos en el objeto `camposPorSeguro` de `js/calculadora.js`.

---

## Integraciones

### WhatsApp
- Número: `+34 692 833 640`
- URL base: `https://wa.me/34692833640`
- Todos los botones de contacto generan un mensaje automático contextualizado según la sección o el seguro

### Google Analytics
- ID: `G-WHWX365FH4`
- Cuenta: `agomezbseguros@gmail.com`
- Panel: [analytics.google.com](https://analytics.google.com)
- Instalado en las 4 páginas

### Redes sociales
| Red | URL |
|---|---|
| Instagram | [@agomezgenerali](https://www.instagram.com/agomezgenerali/) |
| TikTok | [@agomezgenerali](https://www.tiktok.com/@agomezgenerali) |
| Facebook | [Antonio Gómez Generali Seguros](https://www.facebook.com/people/Antonio-Gómez-Generali-Seguros/61552176555562/) |

---

## Despliegue

El proyecto se despliega automáticamente en **Vercel** al hacer push a la rama principal de GitHub.

| Entorno | URL |
|---|---|
| Producción | [antoniogomezseguros.com](https://www.antoniogomezseguros.com) |
| Vercel (backup) | [web-antoniogomez.vercel.app](https://web-antoniogomez.vercel.app) |

### DNS
El dominio está registrado en **Hostinger** con los nameservers apuntando a Vercel:
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

### SSL
Certificado HTTPS gestionado automáticamente por Vercel (Let's Encrypt).

---

## Desarrollo local

### Requisitos
- Navegador moderno
- Extensión **Live Server** para VS Code (recomendada)

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/web-antoniogomez.git

# 2. Abrir en VS Code
code web-antoniogomez

# 3. Lanzar con Live Server
# Clic derecho sobre index.html → Open with Live Server
```

No requiere instalación de dependencias, build, ni servidor.

---

## Datos de contacto de Antonio

| Campo | Valor |
|---|---|
| **Nombre** | Antonio Gómez Blanco Andrés |
| **Rol** | Asesor de Seguros Generali |
| **Teléfono / WhatsApp** | +34 692 833 640 |
| **Email** | agomezbseguros@gmail.com |
| **Ubicación** | Granada, España (atiende toda España) |
| **Nº Autorización DGS** | C046777142834Y |

---

## Pendiente

- [ ] Añadir campos de la calculadora para Salud, Empresas y Responsabilidad Civil
- [ ] Añadir fotos reales en las tarjetas de `segurosYprotecciones.html`
- [ ] Añadir email de contacto de Antonio cuando esté disponible
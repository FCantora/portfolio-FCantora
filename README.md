# Portfolio de Fernando Cantora

Mi sitio web personal para presentarme como desarrollador frontend, mostrar mis proyectos, certificaciones y experiencia, y facilitar el contacto profesional.

- URL de producción: `https://fcantora-portfolio.vercel.app/es/#`
- Tecnologías: Astro, TailwindCSS, i18n, React (integraciones puntuales), Vercel

## Características

- Internacionalización (ES/EN) con rutas por idioma.
- Diseño responsive:
  - Desktop: header fijo con navegación horizontal.
  - Mobile/Tablet: header que se oculta al hacer scroll, menú hamburguesa lateral y botón flotante “volver arriba”.
- Secciones principales:
  - Home / Presentación
  - Experiencia (`#experience`)
  - Proyectos (`#projects`)
  - Certificaciones (`#certifications`) con modal de imagen
  - Sobre mí (`#about`)
  - Contacto (redes y correo)
- Favicon circular generado a partir de `thumb.png` con `astro:assets`.

## Estructura del proyecto

```
/
├─ public/
├─ src/
│  ├─ assets/            # imágenes, íconos y CVs (ES/EN)
│  ├─ components/        # Header, Footer, Cards, Secciones
│  ├─ icons/             # íconos Astro reutilizables
│  ├─ layouts/           # Layout.astro base
│  └─ pages/
│     ├─ es/ index.astro
│     └─ en/ index.astro
├─ astro.config.mjs
├─ tailwind.config.mjs
├─ package.json
└─ README.md
```

Archivos destacados:

- `src/layouts/Layout.astro`: HTML base, favicon circular, switcher de idioma, loader y scripts globales.
- `src/components/Header.astro`: header fijo (desktop) y navegación.
- `src/components/Certifications.astro` y `src/components/CertificationCard.astro`: grid + modal accesible para ver certificados.
- `src/components/SectionContainer.astro`: contenedor responsivo y espaciados por sección.
- `src/pages/es/index.astro` y `src/pages/en/index.astro`: páginas principales por idioma.

## Scripts

- Desarrollo local: `npm run dev` → http://localhost:4321
- Build de producción: `npm run build` → genera `dist/`
- Preview local del build: `npm run preview`

## Desarrollo

Requisitos: Node 18+

1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Modo desarrollo:
   ```bash
   npm run dev
   ```
3. Build y prueba local:
   ```bash
   npm run build && npm run preview
   ```

## Deploy

- Hosting: Vercel (auto-detección de Astro).
- Pipeline:
  - Cada `git push` a `main` dispara build y deploy automático.
  - Pull Requests generan previsualizaciones.
- Config detectada:
  - Build: `astro build`
  - Output: `dist`

Deploy manual (opcional):

```bash
npx vercel
npx vercel --prod
```

## SEO y accesibilidad

- `<meta>` básicas en `Layout.astro` (título/description).
- Navegación accesible:
  - Foco gestionado al abrir/cerrar modales.
  - Botón “volver arriba” para mejorar UX en mobile.
- `scroll-margin-top` para que el header fijo no oculte títulos al navegar por anclas.

## i18n

- Config en `astro.config.mjs`:
  - `defaultLocale: "en"`
  - `locales: ["en", "es"]`
  - Ruteo con prefijo por idioma.
- Switcher de idioma en `Layout.astro`.

## Personalización

- Colores/estilos: Tailwind en componentes (`class=""`) y ajustes globales en `Layout.astro`.
- Íconos: componentes en `src/icons/`.
- Imágenes y CVs: `src/assets/` (CV en español e inglés).

## Contacto

- LinkedIn: https://www.linkedin.com/in/fcantora
- GitHub: https://github.com/FCantora
- Email: fer.cantora90@gmail.com

## Licencia

Este proyecto es de uso personal con fines de portfolio. Si querés reutilizar partes del código, citá la fuente y verificá que no contenga información sensible.

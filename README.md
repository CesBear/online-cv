# SDET Portfolio

Repositorio de la pagina personal de Cesar Ramirez como Software Development Engineer in Test, construido con React.

## Estructura actual

```text
online-cv/
|-- public/
|   |-- icons/
|   |-- favicon.ico
|   |-- index.html
|   |-- manifest.json
|   |-- robots.txt
|   `-- sitemap.xml
|-- src/
|   |-- components/
|   |   |-- About/
|   |   |-- Certification/
|   |   |-- Contact/
|   |   |-- Experience/
|   |   |-- Header/
|   |   |-- Navigation/
|   |   `-- Skills/
|   |-- styles/
|   |-- App.js
|   |-- index.js
|   |-- reportWebVitals.js
|   `-- setupTests.js
|-- .github/workflows/test-suite.yml
|-- package.json
`-- README.md
```

## Stack

- `react` + `react-scripts`
- CSS personalizado en `src/styles`
- `@testing-library/react` y `jest-dom`
- GitHub Actions para pruebas basicas en `master`

## Scripts

```sh
npm start
npm test -- --watchAll=false
npm run build
```

## Notas

- El sitio es una SPA de una sola pagina con secciones para perfil, skills, certificaciones, experiencia y contacto.
- Los assets visuales viven en `public/icons`.
- La prueba actual cubre el componente `Header`.

## Contacto

- Email: [carr@cesbear.com](mailto:carr@cesbear.com)
- LinkedIn: [Cesar Alejandro Ramirez](https://www.linkedin.com/in/cesar-alejandro-ramirez/)
- GitHub: [CesBear](https://github.com/CesBear)

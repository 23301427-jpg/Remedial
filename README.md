# Remedial

## Dashboard web del laboratorio

Este proyecto incluye un dashboard simple para visualizar:
- Temperatura actual
- Humedad actual
- Estado del laboratorio (Normal, Advertencia o Crítico)

### Ejecutar localmente
1. Abre una terminal en la carpeta del proyecto.
2. Ejecuta:
   python3 -m http.server 3000
3. Abre http://localhost:3000

### Estructura
- index.html: estructura del dashboard
- styles.css: estilos visuales
- app.js: simulación de mediciones y estado

## Estrategia de control de versiones con GitHub

### Ramas recomendadas
- main: rama principal y estable para producción.
- develop: rama de integración para pruebas y consolidación.
- feature/*: ramas de funcionalidades para trabajo aislado.

### Flujo propuesto
1. Crear una rama feature desde develop.
2. Desarrollar la funcionalidad y realizar commits.
3. Abrir un Pull Request hacia develop.
4. Validar, revisar y fusionar.
5. Promover desde develop hacia main para releases.

### Ejemplo de uso
- git checkout develop
- git checkout -b feature/dashboard-laboratorio
- git add .
- git commit -m "Agregar dashboard del laboratorio"
- git push -u origin feature/dashboard-laboratorio

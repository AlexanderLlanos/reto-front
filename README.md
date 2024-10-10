## Características

- Listado de productos
- Visualización de detalles de producto
- Creación de nuevos productos
- Backend simulado con json-server

## Requisitos Previos

- Node.js (versión 12.x o superior)
- npm (normalmente viene con Node.js)
- Angular CLI (versión 15.x)

## Instalación

1. Clona este repositorio:
   ```
   git clone https://github.com/AlexanderLlanos/reto-front.git
   cd producto-app
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

3. Instala json-server globalmente (si aún no lo has hecho):
   ```
   npm install -g json-server
   ```

## Ejecución

1. Inicia el servidor de desarrollo de Angular:
   ```
   ng serve
   ```
   Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

2. En otra terminal, inicia json-server para simular el backend:
   ```
   json-server --watch db.json
   ```
   Esto iniciará el servidor en `http://localhost:3000`.


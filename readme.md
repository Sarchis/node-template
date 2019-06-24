# Template proyecto nodeJS

La estructura base del proyecto se denomina **Folder-by-feature**

### Paquetes npm
- Express

Para iniciar el servidor express ejecuta en la terminal **npm start**

En **postman** ir a la ruta **http://localhost:3000/api/helloworld**

#### Estructura del template
###### app.js
Archivo principal, construcción del servidor.

###### route.js
Archivo donde se ingresan todas las rutas

###### config/express.js
Archivo de configuración de express, middlewares.

###### api/
Carpeta donde van los archivos de la app.
Al interior se crean carpetas conlas funcionalidades
**Ejemplo**

```
Proyecto_base_express
├── api
│    ├── helloWorld
│    │    ├── helloWorld.controller.js
│    │    └── index.routes.js
├── config
│    ├── express.js
├── app.js
├── routes.js
└── index.js
```

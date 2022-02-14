# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `Decisiones`

- Se opta por usar reactJS la ultima versión
- Tiene añadidos unos paquetes por defectos como husky que automatiza el formateo
- La estructura del diseño se ha intentado organizar de la siguiente forma
  - componentes => los componentes de la aplicación
  - constants => fichero donde se agruparan todos los valores comunes
  - libs => Uso destinado al tipado
  - pages => las dos únicas páginas que tiene la aplicación 
  - services => Un manejador comun de peticiones
  - utils => Usada para manejar funciones repetitivas, en este caso el Calendario
- La gestión de errores se manejan en dos partes
  - Por un lado la de las peticiones se manejan en los servicios enviando por parámetro los hooks
  - Por otro lado se maneja los estados de formulario de si debe aparecer o no tanto como el tooltip
- Por último la decisión técnica se ha tratado de implementar 
  - funciones de hooks, 
  - funciones por argumentos
  - Y rehusar  el código más usado
  - No se ha usado redux porque se trata de un MPV y la arquitectura tiene que ser simple y diseño reducido
  - En el tema de diseño se ha implementado de una forma muy basica SCSS.
- Enlaces el sistema de enlace detecta el path por user y por errores y por 404
  - https://helloteca-a8a2f.web.app/user/1 <-- **OK** 
  - https://helloteca-a8a2f.web.app/user/5 <-- **KO**
  - https://helloteca-a8a2f.web.app/kljkljkl <-- **KO**

### `Objeciones`

Hay que tener en cuenta que la aplicación aun ser sencilla en la propuesta se deja bastante al libre interpretación, ej: El objeto de obtener y enviar no contiene los mismos parámetros, da confusion al inicio.
El calendario es un sistema complejo ya que no deja una interpretación concisa, porque hay que tener en cuenta si debe o no tener fecha inicial, el tipo de formato además que implementar un componente propio dispararía el tiempo de desarrollo, se opta por usar alguno disponible. 
El sistema de navegación se interpreta de diferentes formas aun que uno opta por url amigables para el SEO
Por ultimo el sistema post es un multipart que debería especificarse en la prueba, si no tiene algun tipo de dato especial yo lo ubiera implementado en JSON


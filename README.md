API_LIBRERIA EXAMEN

Consiste en un sistema de gestión de librería, elaborado con un backend funcional conectado a una base de datos en MongoDB.

El objetivo del desarrollo fue crear una API completa que permitiera realizar operaciones CRUD, es decir: crear, leer, actualizar y eliminar libros, manejando cada solicitud a través de rutas HTTP.

¿Qué tecnologías usé?

Para construir el proyecto trabajé con:

Node.js como entorno principal

Express para manejar rutas y peticiones HTTP

MongoDB Atlas como base de datos en la nube

Mongoose para la creación del modelo y estructura de los libros

Dotenv para proteger variables de conexión

Con estas herramientas desarrollé un backend real, escalable y listo para conectarse a un frontend o aplicación móvil.

¿Cómo está organizado mi proyecto?

Mi API se divide en componentes específicos:

• Modelo (Model)
Aquí definí la estructura del libro. Incluí datos como título, autor, año de publicación, género, disponibilidad e imagen.

• Controladores (Controllers)
En esta carpeta programé la lógica para procesar las solicitudes. Aquí ocurre la creación, obtención, actualización y eliminación de libros.

• Rutas (Routes)
Definí los endpoints que el usuario puede consumir para comunicarse con la API.

• Base de datos (DB)
Configuro la conexión con MongoDB Atlas utilizando credenciales desde un archivo .env

• index.js
Es el archivo principal que levanta el servidor y activa toda la aplicación.

Esta arquitectura permite que mi proyecto funcione como backend independiente y pueda integrarse fácilmente con una interfaz gráfica más adelante.

¿Cómo funciona la API?

Mi API responde a cinco rutas principales:

Método	Ruta	Para qué sirve
GET	/api/libros	Muestra todos los libros
GET	/api/libros/:id	Busca un libro específico
POST	/api/libros	Crea un nuevo libro
PUT	/api/libros/:id	Edita un libro existente
DELETE	/api/libros/:id	Elimina un libro de la base

Cada una de ellas devuelve un código de estado adecuado como 200, 201, 404 o 500 según el resultado.
Esto confirma que la API está construida bajo el estandar REST correctamente.

¿Cómo se ejecuta?

Se descargan las dependencias con npm install

Se configura el archivo .env con la URL de MongoDB

Se inicia el servidor con:

nodemon index.js

La API comienza a funcionar y lista para recibir peticiones desde Thunder Client.

Para complementar mi API, desarrollé un frontend que permite al usuario interactuar de manera visual y directa con la base de datos. La idea principal del frontend es ofrecer una interfaz sencilla, ordenada y funcional, donde se pueda gestionar la información de los libros registrados en mi sistema.

Lo construí utilizando tres tecnologías principales:

HTML, para la estructura y contenido visible de la página.

CSS, para mejorar la apariencia visual, la organización, los colores y el espaciado.

App.js para la lógica y conexión con el backend.

¿Qué permite hacer el frontend?

Mi interfaz gráfica permite:

Registrar nuevos libros utilizando un formulario.
El usuario ingresa los datos del libro como título, autor, año de publicación, género.
Al enviar el formulario, la información se envía directamente al servidor por medio de la API.

Mostrar todos los libros almacenados en la base de datos.
Estos se presentan en una tabla de manera ordenada y visual, usando una estructura responsiva con Bootstrap.
Cada registro del libro incluye imagen, título, autor, año y género.

Editar un libro existente mediante un botón.
Al seleccionar la opción de editar, se puede modificar la información del libro y volver a guardarla.

Eliminar libros si el usuario desea quitarlos del registro.
Esto permite llevar un control limpio y mantener la base de datos actualizada.

¿Cómo funciona internamente?

Cada acción que el usuario realiza desde el frontend —ya sea ver, crear, modificar o eliminar un libro— se comunica con mi API a través de métodos HTTP. Todo el proceso se hace de manera asíncrona, utilizando funciones con async y await para que las peticiones sean fluidas y no bloqueen la página.

También utilicé manipulación del DOM, lo que significa que los datos que vienen desde la API se colocan automáticamente dentro de la tabla sin necesidad de recargar la página. Esto hace que la experiencia sea más rápida y dinámica.

El diseño lo construí usando Bootstrap para darle estilo profesional, con una estructura limpia, accesible, responsive y visualmente agradable para el usuario.

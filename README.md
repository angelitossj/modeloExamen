# modeloExamen

  

Uso de Nodejs y Express para Servidor



Para ejecutar se debe tener instalado Node.js y npm.

Para Instalar las dependencias:
![](https://www.google.com/url?sa=i&url=https://mayankpatel99.medium.com/node-js-express-a-beginners-guide-edf205316ae9&psig=AOvVaw0R_mIM6gvjouI8zdGFNrjr&ust=1665842844974000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCMDinKry3_oCFQAAAAAdAAAAABAc)
npm i

Para ejecutar el proyecto en modo Desarrollo, ejecutar el siguiente comando:

npm run nodemon

Para el proyecto en modo Producción, ejecutar el siguiente comando:

npm start

![enter image description here](https://www.google.com/url?sa=i&url=https://www.toptal.com/nodejs/secure-rest-api-in-nodejs&psig=AOvVaw0R_mIM6gvjouI8zdGFNrjr&ust=1665842844974000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCMDinKry3_oCFQAAAAAdAAAAABAX)





  
  

Pasos:

  
  

comenzar es registrarte como usuario:

HTTP: POST :http://localhost:3000/usuario

=> requiere del siguiente body:

{

"usuario":"angelitossj",

"password":"xxxxxxxxx",

"email":"Email Válido(xxxx@xxxx.com)"

}

  
  

iniciar sesión para acceder a las funciones:

HTTP: POST: http://localhost:3000/login

=> requiere del siguiente body:

{

"usuario":"angelitossj",

"password":"xxxxxx"

}

  

Una vez recibido el Token,

cópielo y uselo como header Authorization y así acceder a las funciones:

  

HTTP: GET: http://localhost:3000/usuario

Sirve para ver la información de tu cuenta.

HTTP: DELETE: http://localhost:3000/usuario

En caso de que quieras eliminar la cuenta.

Funciones de Tareas con el Token:

HTTP: GET: http://localhost:3000/tarea

Mostraría todas las tareas existentes en la Base de Datos:

HTTP: GET http://localhost:3000/tarea/:idTarea

Para tener en cuenta; Para obtener el :idTarea preferiblemente que  un realice un GET de las tareas ( /tarea/usuario) y copie el "_id" de la tarea que desea modificar:

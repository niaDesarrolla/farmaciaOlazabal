//requerimos express
const express = require ('express'); 
const cors = require('cors');
const dbConnection = require('../database/database')
//const dbConection = require('../database/database')

//Iniciamos una clase llamada servidor
class Server {
   constructor () {
       this.app = express()
       this.port = process.env.PORT;
       this.medicamentosPath = "/api/medicamentos";//Ruta inicial de nuestra páginas (ruta ppal de medicamentos)
       //this.mathPath = "/api/maths"; //aquí le decimos: vas a tener en existencia una ruta inicial de este tipo
       
       //Middlewares
       this.middlewares();

      //Rutas de mi aplicación
       this.routes();

       //se ejecuta la base de datos
       this.conectarDB();
  }
//va a disparra adentro la funcion DB conection de la hoja database.js

  async conectarDB(){//hago la función que se ejecuta cando se instancia la case server
    await dbConnection();
  }
  //Definimos los métodos

  middlewares() {
    //Estos middlewares serán ejecutados antes de que las solicitudes lleguen a las rutas
    //CORS
    this.app.use(cors());

    //Lectura y parseo del body
    this.app.use(express.json()); 

    //Directorio Público
    this.app.use(express.static("public")); 
  }

  //Aquí nos traemos en nuestra función routes esas rutas que creamos
  routes() {
    this.app.use(this.medicamentosPath, require("../routes/medicamentos.js"));
    //this.app.use(this.mathPath, require('../routes/maths')); //cuando se acceda a esta ruta, requiera todos los valores que necesita desde routes math
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;



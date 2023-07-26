const { Router } = require('express'); 
const router = Router();

const { //importo los controladores 
  
  MedicamentosPost,
  MedicamentosGet,
  MedicamentosGetById
} = require("../controllers/medicamentos");

//Aquí le enviamos información al serviidor (importamos) desde controllers 
router.get('/', MedicamentosGet); //ruta get para ver todos los productos
//router.get('/saludo/:nombre/:apellido', medicamentosSaludo);  //le enviamos información al servidor por params (:) porque ya sabemos que solo necesitamos solo 2 parámetros especificos (nombre y apellido)
router.get('/:id', MedicamentosGetById);//ruta get para ver un producto por su ID 
router.post('/',MedicamentosPost);//ruta para agregar un nuevo medicamento


module.exports = router; //aqui hacemos la exportación para que pueda ser importado y utilizado en el archivo ppal de la aplicacion app.js
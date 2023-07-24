const { Router } = require('express'); 
const router = Router();

const { //importo los controladores 
  
  MedicamentosPost,
  MedicamentosGet,
} = require("../controllers/medicamentos");

//Aquí le enviamos información al serviidor (importamos) desde controllers 
router.get('/', MedicamentosGet); //a la ruta principal
//router.get('/saludo/:nombre/:apellido', medicamentosSaludo);  //le enviamos información al servidor por params (:) porque ya sabemos que solo necesitamos solo 2 parámetros especificos (nombre y apellido)
router.post('/',MedicamentosPost);


module.exports = router; //aqui hacemos la exportación para que pueda ser importado y utilizado en el archivo ppal de la aplicacion app.js
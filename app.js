
require ('dotenv').config();
const Server = require('./models/server'); 
//const ServerDatabase = require('../database/database'); 

const server = new Server();


server.listen();

                  
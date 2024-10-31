import express  from "express";
import "dotenv/config.js";
import "./config/database.js";
import cors from "cors";
import morgan from "morgan";
import router from "./router/index.js";


const server = express();
const PORT = process.env.PORT || 8080;  
const ready = () => console.log(`Ejecutando en el puerto ${PORT}`);


server.use(express.json()) //Confirmar que el formato para recibir y enviar información será mediante middlewares
server.use(express.urlencoded({extended:true})) //Confirmar que nos reciba peticiones complejas- (params)
server.use(cors()) //Permite la entrada de solicitudes de terceros. Por defecto express no lo deja
server.use(morgan('dev')) //Ver la trazabilidad de las peticiones HTTP

//Router
server.use("/storess",router)

server.listen(PORT, ready); 

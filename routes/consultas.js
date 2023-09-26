import express from 'express'
import controller from '../controllers/enviarConsulta/consulta.js'
import validator from "../middlewares/validator.js";
import consultaSchemas from "../schemas/consulta.js";


let router = express.Router();
const { consulta } = controller;
router.post("/queries", validator(consultaSchemas), consulta);
export default router;
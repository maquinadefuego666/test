import { entrenadores } from "../models/entrenadores.models.js";
const test = (()=>{
    console.log('el controlador de promociones funciona')
})
entrenadores.create({
    name:'Federico come pito',
    speciality:'Ensamblado',
})
export default test
import { employes } from "../models/empleados.models.js";
const test = (()=>{
    console.log('el controlador de promociones funciona')
})
employes.create({
    name:'Juanito alcachofa',
    age:'30',
    area:'Importaciones'
})
export default test
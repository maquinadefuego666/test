import { leaders } from "../models/lideres.models.js";
const test = (()=>{
    console.log('el controlador de promociones funciona')
})
leaders.create({
    name:'Federico come pito',
    age:'48',
    area:'ensamblado'
})
export default test
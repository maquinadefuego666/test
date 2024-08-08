import { cars } from "../models/autos.models.js";
const test = (()=>{
    console.log('el controlador de promociones funciona')
})
cars.create({
    name:'Tsuru Versa',
    model:'Tsuru',
    serialNumber:'9500'
})
export default test
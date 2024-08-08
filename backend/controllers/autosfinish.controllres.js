import { carsFinished } from "../models/autosfinish.models.js";
const test = (()=>{
    console.log('el controlador de promociones funciona')
})
carsFinished.create({
    name:'Tsuru Versa',
    model:'Tsuru',
    serialNumber:'9500'
})
export default test
import { nominas } from "../models/nomina.models.js";
const test = (()=>{
    console.log('el controlador de promociones funciona')
})
nominas.create({
    amount:'10000',
    restInfonavit:'300',
    restMedicalInsurence:'1000'
})
export default test
import {Schema, model} from "mongoose"

export const nomina = new Schema({
    amount:{
        type:Number
    },
    restInfonavit:{
        type:Number
    },
    restMedicalInsurence:{
        type:Number
    }
})
export const nominas = new model('nominas', nomina)
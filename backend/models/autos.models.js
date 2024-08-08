import {Schema, model} from "mongoose";

export const  car = new Schema({
    name:{
        type:String
    },
    model:{
        type:String
    },
    serialNumber:{
        type:Number
    }
})
export const cars = new model('cars', car)
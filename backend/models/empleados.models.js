import {Schema, model} from "mongoose";

export const  employe = new Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    },
    area:{
        type:String
    }
})
export const  employes = new model('employes', employe)
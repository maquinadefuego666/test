import {Schema, model} from "mongoose";

export const technic = new Schema ({
    name:{
        type:String
    },
    speciality:{
        type:String
    },
})

export const techcnics = new model('technics', technic)
import {Schema, model} from "mongoose";

export const leader = new Schema({
    name:{
        type:String
    },
    age:{
        type:number
    },
    area:{
        type:String
    }
})
export const leaders = new model('leaders', leader)
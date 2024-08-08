import {model} from "mongoose";
import {car} from "./backend/models/autos.models.js";
export const carsFinished = new model ('carsFinished',  car)
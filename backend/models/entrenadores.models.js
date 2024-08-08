import {model} from "mongoose";
import {technic} from "./backend/models/tecnicos.models.js";
export const entrenadores = new model ('Coach',  technic)
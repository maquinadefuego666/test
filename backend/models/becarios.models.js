import {model} from "mongoose";
import {employe} from "./backend/models/empleados.models.js";
export const becarios = new model ('becarios',  employe)
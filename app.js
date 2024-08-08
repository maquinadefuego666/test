import mongoose from "mongoose"
import cors from "cors"
import express from "express"
import dotenv from "dotenv"
import test_autos from ".backend/controllers/autos.controllers.js"
import test_autosfinish from ".backend/controllers/autosfinish.controllers.js"
import test_becarios from ".backend/controllers/becarios.controllers.js"
import test_empleados from ".backend/controllers/empleados.controllers.js"
import test_entrenadores from ".backend/controllers/entrenadores.controllers.js"
import test_lideres from ".backend/controllers/lideres.controllers.js"
import test_nomina from ".backend/controllers/nomina.controllers.js"
import test_tecnicos from ".backend/controllers/tecnicos.controllers.js"
dotenv.config()

mongoose.connect(process.env.url_bd)

.then(() =>{
    console.log('funciona la promesa')
})
.catch((err) => {
    console.log('no funciono la promesa')
})

const app = express ()

app.use(cors())

app.listen(4007,() =>{
    console.log('el servidor escucha')
})
test_autos()
test_autosfinish()
test_becarios()
test_empleados()
test_entrenadores()
test_lideres()
test_nomina()
test_tecnicos()

import express  from "express"
import dotenv from "dotenv"
import cors from 'cors'
import dbConnect from "./config/db.js"
import usuariosRoutes from "./routes/usuariosRoutes.js"
import proyectoRoutes from './routes/proyectoRoutes.js'
import tareaRoutes from './routes/tareaRoutes.js'

const app = express()
app.use(express.json())

dotenv.config()

dbConnect()

//Configurar CORS
const whithlist = [process.env.FRONTEND_URL]

const corsOptions = {
    origin: function(origin, callback){
        if(whithlist.includes(origin)){
            //Permitido
            callback(null, true)
        }else{
            //No permitido
            callback(new Error ("Error de Cors"))
        }
    }
}
app.use(cors(corsOptions))

//Rutas
app.use("/api/usuarios", usuariosRoutes)
app.use("/api/proyectos", proyectoRoutes)
app.use("/api/tareas", tareaRoutes)

const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
    console.log(`Servidor en el puerto ${PORT}`)

})
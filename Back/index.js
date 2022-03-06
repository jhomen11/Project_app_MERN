import express  from "express"
import dotenv from "dotenv"
import dbConnect from "./config/db.js"
import usuariosRoutes from "./routes/usuariosRoutes.js"
import proyectoRoutes from './routes/proyectoRoutes.js'

const app = express()
app.use(express.json())

dotenv.config()

dbConnect()

//Rutas
app.use("/api/usuarios", usuariosRoutes)
app.use("/api/proyectos", proyectoRoutes)

const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
    console.log(`Servidor en el puerto ${PORT}`)

})
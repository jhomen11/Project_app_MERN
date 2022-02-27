import express  from "express"
import dotenv from "dotenv"
import dbConnect from "./config/db.js"

const app = express()

dotenv.config()

dbConnect()

const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
    console.log(`Servidor en el puerto ${PORT}`)

})
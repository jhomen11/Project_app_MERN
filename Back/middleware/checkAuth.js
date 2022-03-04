import jwt from "jsonwebtoken"
import Usuario from "../models/Usuario.js"
 
//Función para chequear que el usuario este autenticado
const checkAuth = async (req, res, next) => {
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {

        try {
            token = req.headers.authorization.split(' ')[1]

            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            
            req.usuario = await Usuario.findById(decoded.id).select("-password -confirmado -token -createdAt -updatedAt -__v")
            console.log(req.usuario)

            return next()

        } catch (error) {
            return res.status(400).json({msg: "Hubo un Error"})
        }
    }

    if(!token){
        const error = new Error('Token no Válido')
        res.status(401).json({ msg: error.message })
    }

    next()
}

export default checkAuth
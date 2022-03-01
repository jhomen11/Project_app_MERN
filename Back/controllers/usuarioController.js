import Usuario from "../models/Usuario.js"

const registrarUsuario = async (req, res) => {

    //validacion de datos duplicados
    const { email } = req.body
    const usuarioExiste = await Usuario.findOne({ email })
    
    if(usuarioExiste){
        const error = new Error("El correo ingresado ya existe en la base de dtos")
        return res.status(400).json({msg: error.message})
    }
    
    try {
        //Almacenar información en la BD
        const usuario = new Usuario(req.body)
        const usuarioGuardado = await usuario.save()
        res.json(usuarioGuardado)
    } catch (error) {
        console.log(error)
    }
}



export {
    registrarUsuario
}
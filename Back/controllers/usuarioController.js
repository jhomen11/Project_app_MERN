import Usuario from "../models/Usuario.js"

const registrarUsuario = async (req, res) => {
    
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
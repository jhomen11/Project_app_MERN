import Usuario from "../models/Usuario.js"
import generarId from "../helpers/generaId.js"
import generarJWT from "../helpers/generarJWT.js"


//Registro de nuevos usuarios
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
        usuario.token = generarId()
        const usuarioGuardado = await usuario.save()
        res.json(usuarioGuardado)
    } catch (error) {
        console.log(error)
    }
}

//Login de usuarios
const autenticarUsuario = async (req, res) =>{

    const { email, password } = req.body
  

    //Comprobar si existe el usuario en la bd
    const usuario = await Usuario.findOne({ email })
    if(!usuario){
        const error = new Error("El correo ingresado no existe")
        return res.status(404).json({msg: error.message})
    }
    //Comprobar si el usuario confirmo su cuenta
    if(!usuario.confirmado){
        const error = new Error("Tu cuenta no ha sido confirmada")
        return res.status(404).json({msg: error.message})
    }
  
    //Verificar contraseña
    if(await usuario.comprobarPassword(password)){
        res.json({
            _id: usuario._id,
            nombre: usuario.nombre,
            email: usuario.email,
            token: generarJWT(usuario._id)
        })
    }else{
        const error = new Error("Contraseña incorrecta")
        return res.status(404).json({msg: error.message})
    }
}

const confirmarCuenta = async (req, res) => {
    //Validamos si el token existe en la bd
    const { token } = req.params
    const usuarioConfirmar = await Usuario.findOne({token})
    if(!usuarioConfirmar){
        const error = new Error("Token Invalido")
        return res.status(404).json({msg: error.message})
    }

    try {
        //si el token existe se cambia el estado confirmado a true
        usuarioConfirmar.confirmado = true
        //Eliminamos el token luego de confirmar la cuenta de usuario
        usuarioConfirmar.token = ''
        await usuarioConfirmar.save()
        res.json({msg: 'Usuario Confirmado Correctamente'})
    } catch (error) {
        console.log(error)
    }
}


export {
    registrarUsuario, autenticarUsuario, confirmarCuenta
}
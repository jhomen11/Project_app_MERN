import mongoose from "mongoose";
import bcrypt from 'bcrypt'


const usuarioSchema = mongoose.Schema({
    nombre:{
        type: String,
        require: true,
        trim:true
    },
    password:{
        type: String,
        require: true,
        trim:true
    },
    email:{
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    token:{
        type:String
    },
    confirmado:{
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

//Encriptado de password de usuario
usuarioSchema.pre('save', async function(next){
    //verificar si el password cambio
    if(!this.isModified('password')){
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

//verificacion de clave introducida para el login
usuarioSchema.methods.comprobarPassword = async function(passwordFormulario){
    return await bcrypt.compare(passwordFormulario, this.password)
}


const Usuario = mongoose.model("Usuario", usuarioSchema)

export default Usuario
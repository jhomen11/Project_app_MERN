import mongoose from "mongoose";

const proyectosSchema = mongoose.Schema({
    nombre:{
        type: String,
        require: true,
        trim:true
    },
    descripcion:{
        type: String,
        require: true,
        trim:true
    },
    fechaEntrega: {
        type: Date,
        default: Date.now()
    },
    cliente:{
        type: String,
        require: true,
        trim:true
    },
    creador: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario"
    },
    colaboradores: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Usuario"
        }
    ],    
},{
    timestamps: true
})

const Proyecto = mongoose.model("Proyecto", proyectosSchema)

export default Proyecto
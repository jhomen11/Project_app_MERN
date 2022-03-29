import Proyecto from "../models/Proyecto.js"
import Tarea from "../models/Tarea.js"


const agregarTarea = async (req, res) =>{
    
    //Validar si el proyecto existe
    const { proyecto } = req.body

    const existeProyecto = await Proyecto.findById(proyecto)
    
    if(!existeProyecto){
        const error = new Error('El Proyecto no existe')
        return res.status(404).json({msg: error.message})
    }

    //Comprobar si la persona quien esta creando la tarea es quien creo el proyecto
    if(existeProyecto.creador.toString() !== req.usuario._id.toString()){
        const error = new Error("No tiene permisos para agregar tareas")
        return res.status(401).json({msg: error.message})
    }
    try {
        const tareaGuardada = await Tarea.create(req.body)
        res.json(tareaGuardada)
    } catch (error) {
        console.log(error)
    }
}
const obtenerTarea = async (req, res) =>{
    
}
const actualizarTarea = async (req, res) =>{
    
}
const eliminarTarea = async (req, res) =>{
    
}
const cambiarEstado = async (req, res) =>{
    
}

export {
    agregarTarea,
    obtenerTarea,
    actualizarTarea,
    eliminarTarea,
    cambiarEstado
}


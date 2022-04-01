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
        return res.status(403).json({msg: error.message})
    }
    try {
        const tareaGuardada = await Tarea.create(req.body)
        res.json(tareaGuardada)
    } catch (error) {
        console.log(error)
    }
}
const obtenerTarea = async (req, res) =>{
    const { id } = req.params

    //Consultar si la tarea existe en la bd
    const tarea = await Tarea.findById(id).populate("proyecto")
    console.log(tarea)
    if(!tarea){
        const error = new Error("La Tarea no Existe")
        return res.status(404).json({msg: error.message})
    }
    //Validando si el id del usuario pertenece al mismo que lo esta consultando
    if(tarea.proyecto.creador.toString() !== req.usuario._id.toString()){
        const error = new Error("Accion No Permitida")
        return res.status(403).json({msg: error.message})
    }
    res.json(tarea)
}
const actualizarTarea = async (req, res) =>{
    const { id } = req.params

    //Consultar si la tarea existe en la bd
    const tarea = await Tarea.findById(id).populate("proyecto")
    console.log(tarea)
    if(!tarea){
        const error = new Error("La Tarea no Existe")
        return res.status(404).json({msg: error.message})
    }
    //Validando si el id del usuario pertenece al mismo que lo esta consultando
    if(tarea.proyecto.creador.toString() !== req.usuario._id.toString()){
        const error = new Error("Accion No Permitida")
        return res.status(403).json({msg: error.message})
    }

    tarea.nombre = req.body.nombre || tarea.nombre
    tarea.descripcion = req.body.descripcion || tarea.descripcion
    tarea.fechaEntrega = req.body.fechaEntrega || tarea.fechaEntrega
    tarea.prioridad = req.body.prioridad || tarea.prioridad

    try {
        const tareaEditada = await tarea.save()
        res.json(tareaEditada)    
    } catch (error) {
        console.log(error)
    }
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


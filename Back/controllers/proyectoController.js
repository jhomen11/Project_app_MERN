import Proyecto from "../models/Proyecto.js"

//Crear nuevo proyecto
const nuevoProyecto = async (req, res) =>{
   const proyecto = new Proyecto(req.body)
   proyecto.creador = req.usuario._id

   try {
       const proyectoGuardado = await proyecto.save()
       res.json(proyectoGuardado)
   } catch (error) {
       console.log(error)
   }
}
// Mostrar los proyectos de un usuario
const obtenerProyectos = async (req, res) =>{
    const proyecto = await Proyecto.find().where('creador').equals(req.usuario)
    res.json(proyecto)
}

const obtenerProyecto = async (req, res) =>{
    const { id } = req. params
    
    //Consultar si el proyecto existe en la bd
    const proyecto = await Proyecto.findById(id)
    if(!proyecto){
        const error = new Error("El Proyecto no Existe")
        return res.status(404).json({msg: error.message})
    }
    //Validando si el id del usuario pertenece al mismo que lo esta consultando
    if(proyecto.creador.toString() !== req.usuario._id.toString()){
        const error = new Error("Accion No Permitida")
        return res.status(401).json({msg: error.message})
    }
    res.json(proyecto)
}

const editarProyectos = async (req, res) =>{}
const eliminarProyectos = async (req, res) =>{}
const agregarColaborador = async (req, res) =>{}
const eliminarColaborador = async (req, res) =>{}
const obtenerTareas = async (req, res) =>{}

export {
    nuevoProyecto,
    obtenerProyectos,
    obtenerProyecto,
    editarProyectos,
    eliminarProyectos,
    agregarColaborador,
    eliminarColaborador,
    obtenerTareas
}
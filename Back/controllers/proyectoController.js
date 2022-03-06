import Proyecto from "../models/Proyecto.js"

const nuevoProyecto = async (req, res) =>{
    //Crear nuevo proyecto
   const proyecto = new Proyecto(req.body)
   proyecto.creador = req.usuario._id

   try {
       const proyectoGuardado = await proyecto.save()
       res.json(proyectoGuardado)
   } catch (error) {
       console.log(error)
   }
}

const obtenerProyectos = async (req, res) =>{
    const proyecto = await Proyecto.find().where('creador').equals(req.usuario)
    res.json(proyecto)
}
const obtenerProyecto = async (req, res) =>{}
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
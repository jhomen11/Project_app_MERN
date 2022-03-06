import  express  from 'express'

import {
    nuevoProyecto,
    obtenerProyectos,
    obtenerProyecto,
    editarProyectos,
    eliminarProyectos,
    agregarColaborador,
    eliminarColaborador,
    obtenerTareas
} from '../controllers/proyectoController.js'
import checkAuth from '../middleware/checkAuth.js'
const router = express.Router()

router.get('/', checkAuth, obtenerProyectos)
router.post('/', checkAuth, nuevoProyecto)

router.route('/:id').get(checkAuth, obtenerProyecto).put(checkAuth, editarProyectos).delete(checkAuth, eliminarProyectos)
router.get('/tareas/:id', checkAuth, obtenerTareas)
router.post('/agregar-colaborador/:id', checkAuth, agregarColaborador)
router.post('/eliminar-colaborador/:id', eliminarColaborador)

export default router


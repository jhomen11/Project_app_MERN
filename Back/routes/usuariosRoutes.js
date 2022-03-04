import express from 'express'
const router = express.Router()

import { 
    registrarUsuario, 
    autenticarUsuario, 
    confirmarCuenta,
    olvidoPassword, 
    comprobarToken,
    nuevoPassword,
    perfil
} from '../controllers/usuarioController.js'

import checkAuth from '../middleware/checkAuth.js'

router.post('/', registrarUsuario)
router.post('/login', autenticarUsuario)
router.get('/confirmar/:token', confirmarCuenta)
router.post('/olvido-password', olvidoPassword)
router.get('/olvido-password/:token', comprobarToken)
router.post('/olvido-password/:token', nuevoPassword)

//Rutas para manejar la información privada del usuario
router.get('/perfil', checkAuth, perfil)



export default router
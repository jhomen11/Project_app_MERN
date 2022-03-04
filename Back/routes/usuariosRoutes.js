import express from 'express'
const router = express.Router()

import { 
    registrarUsuario, 
    autenticarUsuario, 
    confirmarCuenta,
    olvidoPassword, 
    comprobarToken,
    nuevoPassword
} from '../controllers/usuarioController.js'

router.post('/', registrarUsuario)
router.post('/login', autenticarUsuario)
router.get('/confirmar/:token', confirmarCuenta)
router.post('/olvido-password', olvidoPassword)
router.get('/olvido-password/:token', comprobarToken)
router.post('/olvido-password/:token', nuevoPassword)



export default router
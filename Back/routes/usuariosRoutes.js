import express from 'express'
const router = express.Router()

import { registrarUsuario, 
    autenticarUsuario, 
    confirmarCuenta,
    olvidoPassword, 
    comprobarToken
} from '../controllers/usuarioController.js'

router.post('/', registrarUsuario)
router.post('/login', autenticarUsuario)
router.get('/confirmar/:token', confirmarCuenta)
router.post('/olvido-password', olvidoPassword)
router.get('/olvido-password/:token', comprobarToken)



export default router
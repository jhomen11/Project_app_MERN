import express from 'express'
const router = express.Router()

import { registrarUsuario, autenticarUsuario, confirmarCuenta } from '../controllers/usuarioController.js'

router.post('/', registrarUsuario)
router.post('/login', autenticarUsuario)
router.get('/confirmar/:token', confirmarCuenta)



export default router
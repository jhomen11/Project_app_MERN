import express from 'express'
const router = express.Router()

import { registrarUsuario, autenticarUsuario } from '../controllers/usuarioController.js'

router.post('/', registrarUsuario)
router.post('/login', autenticarUsuario)



export default router
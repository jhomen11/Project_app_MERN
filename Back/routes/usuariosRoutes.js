import express from 'express'
const router = express.Router()

import { registrarUsuario } from '../controllers/usuarioController.js'

router.post('/', registrarUsuario)



export default router
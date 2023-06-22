import {Router} from 'express'
import {getClientes, getCliente, createClientes, actClientes, delClientes} from '../controllers/clientes.controllers.js'

const router = Router()

router.get('/clientes', getClientes)
router.get('/clientes/:id', getCliente)
router.post('/clientes', createClientes)
router.patch('/clientes/:id', actClientes)
router.delete('/clientes/:id', delClientes)

export default router
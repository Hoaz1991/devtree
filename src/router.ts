import { Router } from 'express'
import { body } from 'express-validator'
import User from './models/User'
import { createAccount } from './handlers'

const router = Router()

//  ** Autenticacion y registro
router.post('/auth/register', 
    body('handle').notEmpty(),
    createAccount)

 export default router
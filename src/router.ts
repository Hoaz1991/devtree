import { Router } from 'express'
import { body } from 'express-validator'
import User from './models/User'
import { createAccount, login } from './handlers'

const router = Router()

//  ** Autenticacion y registro
router.post('/auth/register', 
    body('handle')
    .notEmpty()
    .withMessage('probando...'),
    body('name')
    .notEmpty()
    .withMessage('el nombre no puede ir vacío...'),
    body('email')
    .isEmail()
    .withMessage('e-mail no válido'),
    body('password')
    .isLength({min: 8})
    .withMessage('el pasword es muy corto mínimo 8 caracteres'),
    createAccount)

    router.post('/auth/login',
    body('email')
        .isEmail()
        .withMessage('e-mail no válido'),
    body('password')
        .notEmpty()
        .withMessage('el pasword es obligatorio'),
        login
    )


 export default router
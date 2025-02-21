import { Router } from 'express'

const router = Router()

//Routing
// router.get('/', (req, res) =>{
//     res.send('Hola mundo en express / TypeScript')
//  })
// router.get('/nosotros', (req, res) =>{
//     res.send('Nosotros')
//  })
// router.get('/blog', (req, res) =>{
//     res.send('Blog')
//  })

//  ** Autenticacion y registro
router.post('/auth/register', (req, res) => {
    console.log('Desde register')
})

 export default router
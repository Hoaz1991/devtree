import { Router } from 'express'
import User from './models/User'

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
router.post('/auth/register', async (req, res) => {
    const user = new User(req.body)
    // console.log(req.body)

    await user.save()


})

 export default router
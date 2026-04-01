import express from 'express' // ESM Ecmascript modules
import cors from 'cors'
import 'dotenv/config'
import router from './router'
import { connectBD } from './config/db'
import { corsConfig } from './config/cors'

connectBD()

const app = express()

// Configuración de CORS
app.use(cors(corsConfig))



//Leer datos de formularios
app.use(express.json())

app.use('/', router)

// app.use('/ecommerce', () => {
//     console.log('desde Ecommerce')
// })

export default app
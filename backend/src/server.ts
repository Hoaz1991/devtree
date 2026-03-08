import express from 'express' // ESM Ecmascript modules
import 'dotenv/config'
// const express = require('express') // CJS Common JS
import router from './router'
// console.log(express)
import { connectBD } from './config/db'

const app = express()

connectBD()


//Leer datos de formularios
app.use(express.json())

app.use('/', router)

// app.use('/ecommerce', () => {
//     console.log('desde Ecommerce')
// })

export default app
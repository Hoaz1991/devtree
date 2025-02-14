import express from 'express' // ESM Ecmascript modules
// const express = require('express') // CJS Common JS
import router from './router'
// console.log(express)

const app = express()

app.use('/', router)

// app.use('/ecommerce', () => {
//     console.log('desde Ecommerce')
// })

export default app
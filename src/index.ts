import express from 'express' // ESM Ecmascript modules
// const express = require('express') // CJS Common JS

// console.log(express)

const app = express()

//Routing
app.get('/', (req, res) =>{
   res.send('Hola mundo en express / TypeScript')
})

const port = process.env.port || 4000

app.listen(port, ()=>{
    console.log('Servidor funcionando en el puerto:', port)
})
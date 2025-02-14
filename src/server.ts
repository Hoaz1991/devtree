import express from 'express' // ESM Ecmascript modules
// const express = require('express') // CJS Common JS

// console.log(express)

const app = express()

//Routing
app.get('/', (req, res) =>{
   res.send('Hola mundo en express / TypeScript')
})

export default app
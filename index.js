const express = require('express')

// console.log(express)

const app = express()

//Routing
app.get('/', (req, res) =>{
   res.send('Hola mundo en express')
})

app.listen(4000, ()=>{
    console.log('Servidor funcionando...')
})
import server from './server'

const port = process.env.port || 4000

server.listen(port, ()=>{
    console.log('Servidor funcionando en el puerto:', port)
})
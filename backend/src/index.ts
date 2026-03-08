import colors from 'colors'
import server from './server'


const port = process.env.port || 4000

server.listen(port, ()=>{
    console.log( colors.bgBlue.magenta.italic(`Servidor funcionando en el puerto: ${port}`) )
})

let productName = "Tablet"
let isAuth = false
let price = 30

interface Product {
    id: number
    price: number
    name: string
}
// interface FullProduct extends Product {
//     image: string
// }

type ProductID = Pick<Product, 'id'>



let product : Product = {
    id: 1,
    price: 30,
    name: "tablet"
}

// let product2 : FullProduct = {
//     id: 2,
//     price: 40,
//     name: "tablet2",
//     image: "product.jpg"
// }

const numbers = [10, 20, 30]

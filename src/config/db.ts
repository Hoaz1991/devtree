import mongoose from "mongoose"
import colors from 'colors'

export const connectBD = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI)
        const url = `${connection.host}:${connection.port}`
        // console.log(connection)
        console.log(colors.cyan.bold(`MongoDB Conectado ${url}`))
    } catch (error) {
        console.log(colors.bgRed.bold(error.message))
        process.exit()
    }
}
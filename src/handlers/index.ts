import User from "../models/User"
import type { Request, Response } from "express"
import { hashPassword } from "../utils/auth"

export const createAccount = async (req: Request, res: Response) => {

    const {email, password} = req.body

   const userExists = await User.findOne({email})

   if(userExists){
      const error = new Error('El usuario ya esta registrado')
     res.status(409).json({error : error.message})
     return 
   } 



    const user = new User(req.body)
    user.password = await hashPassword(password)

    await user.save()

    res.send('Registro Creado correctamente')


}
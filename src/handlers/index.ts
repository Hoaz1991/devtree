import User from "../models/User"
import type { Request, Response } from "express"

export const createAccount = async (req: Request, res: Response) => {

    const {email} = req.body

   const userExists = await User.findOne({email})

   if(userExists){
      const error = new Error('El usuario ya esta registrado')
     res.status(409).json({error : error.message})
     return 
   } 



    const user = new User(req.body)

    await user.save()

    res.send('Registro Creado correctamente')


}
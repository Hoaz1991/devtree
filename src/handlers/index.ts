import type { Request, Response } from "express"
import slugify from 'slugify';
import User from "../models/User"
import { hashPassword } from "../utils/auth"

export const createAccount = async (req: Request, res: Response) => {

    const {email, password} = req.body

   const userExists = await User.findOne({email})
   if(userExists){
      const error = new Error('Email registrado con otro usuario')
     res.status(409).json({error : error.message})
     return 
   } 
   
   const handle = slugify(req.body.handle, '')
   const handleExists = await User.findOne({handle})
   if(handleExists){
      const error = new Error('Nombre de usuario no disponible')
     res.status(409).json({error : error.message})
     return 
   } 


    const user = new User(req.body)
    user.password = await hashPassword(password)
    user.handle =  handle

    console.log(slugify(handle, '_'))

    await user.save()

    res.send('Registro Creado correctamente')


}
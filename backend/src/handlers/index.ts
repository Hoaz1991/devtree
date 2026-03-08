import type { Request, Response } from "express"
import { validationResult} from 'express-validator'
import slugify from 'slugify';
import User from "../models/User"
import { checkPassword, hashPassword } from "../utils/auth"

export const createAccount = async (req: Request, res: Response) => {

  //manejar errores
  let errors =  validationResult(req)
  if(!errors.isEmpty()){
     return res.status(400).json({errors: errors.array()})
  }

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

    export const login = async (req: Request, res: Response) =>{

       //manejar errores
  let errors =  validationResult(req)
  if(!errors.isEmpty()){
     return res.status(400).json({errors: errors.array()})
  }

const {email, password} = req.body

    //validar si el usuario esta registrado
   const user = await User.findOne({email})
   if(!user){
      const error = new Error('El usuario no existe')
     return  res.status(404).json({error : error.message})
     
   } 
   //comprobar password
   const isPasswordCorrect = await checkPassword(password, user.password)
    if(!isPasswordCorrect) {
   const error = new Error('password incorrecto')
     return  res.status(401).json({error : error.message})
  }
  res.send('Autenticado...')

}
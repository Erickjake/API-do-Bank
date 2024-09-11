import { Request, Response } from "express"
import { UserService } from "../services/UserService"



export class UserController {
    userService: UserService

    constructor(
        userService = new UserService()
    ){
        this.userService = userService
    }
    createUser =  (request: Request, response:Response)=>{
        const user = request.body

        if(!user.name || !user.email){
            return response.status(400).json({ message: 'Bad request: Name Obrigatorio e Email Obrigatorio'})
        }

        this.userService.createUser(user.name, user.email)
        return response.status(201).json({ message: 'Usuário criado'})
    }

    getAllUsers = (request:Request, response:Response)=> {

        const users = this.userService.getAllUsers()
        return response.status(200).json( users )
    }

    deleteUser = (request: Request, response:Response)=>{
        const { name, email} = request.body
        
        if(!name || !email) {
            return response.status(400).json({message: 'Nome e email são obrigatórios'  })
        }

        const indiceUser = this.userService.db.findIndex(user => user.name === name && user.email === email);
        
        if (indiceUser !== -1) {
            this.userService.db.splice(indiceUser, 1); // Remove o usuário
            return response.status(200).json({ message: `Usuário ${name} deletado com sucesso.` });
          } else {
            return response.status(404).json({ message: `Usuário ${name} não encontrado.` });
          }
    }
}
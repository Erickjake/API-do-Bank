export interface User {
  name: string
  email: string
}

const db = [
    {
        name: 'Joana',
        email: 'joana@bank.com',
    }   
]

export class UserService {
  db: User[]

  constructor(
    database = db
  ){
    this.db = database
  }
  createUser = (name: string, email: string) => {
    const user = {
      name,
      email,
    };
    this.db.push(user)
    console.log('DB atualizado', this.db);
  };

  getAllUsers = ()=>{
    return this.db
  }
  deleteUser = (name: string, email: string)=>{
   const indiceUser = this.db.findIndex(user => user.name === name && user.email === email)
   if (indiceUser !== -1) {
    this.db.splice(indiceUser, 1)
    console.log(`Usuário ${name} deletado com sucesso.`)
   }else{
    console.log(`Usuário ${name} não encontrado.`)
   } 
    console.log('DB atualizado:', this.db) 
  }
  }

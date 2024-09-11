import { UserController } from './UserController';
import { UserService } from '../services/UserService';
import { Request, Response } from 'express';

describe('UserController', () => {
  let userService: UserService;
  let userController: UserController;
  let req: Partial<Request>;
  let res: Partial<Response>;

  beforeEach(() => {
    userService = new UserService(); // Inicializa o serviço com uma instância correta
    userController = new UserController(userService); // Passa o serviço para o controller

    req = {
      body: {
        name: 'Joana',
        email: 'joana@bank.com',
      },
    };

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  it('Deve excluir um usuário', () => {
    // Adiciona um usuário ao banco de dados para testar a exclusão
    userService.createUser('', '');

    userController.deleteUser(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(200); // Verifica se retornou sucesso
    expect(res.json).toHaveBeenCalledWith({ message: 'Usuário Joana deletado com sucesso.' });
  });
});

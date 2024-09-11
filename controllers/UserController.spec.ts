import { UserService } from "../services/UserService";
import { UserController } from "./UserController"
import { makeMockRequest } from "../__mocks__/mockRequest.mock";
import { makeMockResponse } from "../__mocks__/mockResponse.mock";
import { Request } from "express";
describe('UserController', ()=>{
    let req: Partial<Request>;
    let res: Partial<Response>;
    const mockUserService: Partial<UserService> = {
        createUser:jest.fn(),
        deleteUser:jest.fn()
        
    }

    const userController = new UserController(mockUserService as UserService)


    it('Deve adicionar um novo Usuário ', () => {
        const mockRequest = {
            body: {
                name: 'Erick',
                email: 'erick@test.com'
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({message: 'Usuário criado'})
    });

    it('Verificar se o Usuario e o Email foi informado', () => {
        const Requisicao = {
            body: {
                name: '',
                email: ''
            }
        } as Request
        const Resposta = makeMockResponse()
        userController.createUser(Requisicao, Resposta)
        expect(Resposta.state.status).toBe(400)
        expect(Resposta.state.json).toMatchObject({message: 'Bad request: Name Obrigatorio e Email Obrigatorio'})

    })
})

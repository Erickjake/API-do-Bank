import { User, UserService } from "./UserService";

describe("UseService", () => {
    const mockDB: User[] = []
    const useService = new UserService(mockDB);

    it('Deve adiconar um novo usuário', () => {
        const mockConsole = jest.spyOn(global.console,'log')
        useService.createUser('erick','erick@email.com');
        expect(mockConsole).toHaveBeenCalledWith('DB atualizado', mockDB)
    });
});

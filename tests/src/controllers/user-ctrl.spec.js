const UserCtrl = require("../../../src/controllers/user-ctrl");
const CpfValidator = require("../../../src/utils/cpf-validator");
const CheckPassword = require("../../../src/utils/check-password");
const UserModel = require("../../../src/models/User");

describe("UserCtrl", () => {
    describe("createUser", () => {
        test("Should return status 400 if the cpf is not valid", async () => {
            const reqMock = {
                body: {
                    name: "teste",
                    cpf: "123",
                    password: "123456",
                    confirmPassword: "123456",
                },
            };

            // TODO: I didn't understand, I took the code from lesson 04
            const resMock = {
                status: jest.fn(() => {
                    console.log("STATUS");
                    return {
                        json: jest.fn(() => {
                            console.log("json");
                        }),
                    };
                }),
            };

            const cpfValidatorSpy = jest
                .spyOn(CpfValidator, "isValid")
                .mockReturnValue(false);

            await UserCtrl.create(reqMock, resMock);

            expect(resMock.status).toHaveBeenCalledWith(400);
            expect(cpfValidatorSpy).toHaveBeenCalledWith(reqMock.body.cpf);
        });

        test("Should return status 400 if the password and confirmPassword are different", async () => {
            const reqMock = {
                body: {
                    name: "teste",
                    cpf: "29473671032",
                    password: "123456",
                    confirmPassword: "12345",
                },
            };

            // TODO: I didn't understand, I took the code from lesson 04
            const resMock = {
                status: jest.fn(() => {
                    console.log("STATUS");
                    return {
                        json: jest.fn(() => {
                            console.log("json");
                        }),
                    };
                }),
            };

            const cpfValidatorSpy = jest
                .spyOn(CpfValidator, "isValid")
                .mockReturnValue(true);

            const checkPasswordSpy = jest
                .spyOn(CheckPassword, "match")
                .mockReturnValue(false);

            //TODO: Eu não coloco essa parte se o teste quebra antes ou adiciono e depois coloco no expect que não foi chamado?
            const userSpy = jest
                .spyOn(UserModel, "create")
                .mockReturnValue(reqMock.body);

            await UserCtrl.create(reqMock, resMock);

            expect(resMock.status).toHaveBeenCalledWith(400);
            expect(cpfValidatorSpy).toHaveBeenCalledWith(reqMock.body.cpf);
            expect(checkPasswordSpy).toHaveBeenCalledWith(
                reqMock.body.password,
                reqMock.body.confirmPassword
            );
            expect(userSpy).not.toHaveBeenCalled();
        });

        test("Should return status 200 if the user is created", async () => {
            const reqMock = {
                body: {
                    name: "teste",
                    cpf: "29473671032",
                    password: "123456",
                    confirmPassword: "123456",
                },
            };

            // TODO: I didn't understand, I took the code from lesson 04
            const resMock = {
                status: jest.fn(() => {
                    console.log("STATUS");
                    return {
                        json: jest.fn(() => {
                            console.log("json");
                        }),
                    };
                }),
            };

            const cpfValidatorSpy = jest
                .spyOn(CpfValidator, "isValid")
                .mockReturnValue(true);

            const checkPasswordSpy = jest
                .spyOn(CheckPassword, "match")
                .mockReturnValue(true);

            const userSpy = jest
                .spyOn(UserModel, "create")
                .mockReturnValue(reqMock.body);

            await UserCtrl.create(reqMock, resMock);

            expect(resMock.status).toHaveBeenCalledWith(200);
            expect(cpfValidatorSpy).toHaveBeenCalledWith(reqMock.body.cpf);
            expect(checkPasswordSpy).toHaveBeenCalledWith(
                reqMock.body.password,
                reqMock.body.confirmPassword
            );
            expect(userSpy).toHaveBeenCalledWith(reqMock.body);
        });
    });
});

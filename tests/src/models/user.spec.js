const user = require("../../../src/models/User");

describe("User", () => {
    describe("create", () => {
        test("Should return the user object", async () => {
            const userMock = {
                name: "teste",
                cpf: "29473671032",
                password: "123456",
                confirmPassword: "123456",
            };

            const result = await user.create(userMock);

            expect(result).toEqual(userMock);
        });
    });
});

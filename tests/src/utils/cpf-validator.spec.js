const CpfValidator = require("../../../src/utils/cpf-validator");

describe("CheckCpfValidatorTest", () => {
    test("Should return true if cpf is valid", () => {
        const cpf = "29473671032";

        const isValidSpy = jest
            .spyOn(CpfValidator, "isValid")
            .mockReturnValue(true);

        const result = CpfValidator.isValid(cpf);

        expect(result).toBe(true);
        expect(isValidSpy).toHaveBeenCalledWith(cpf);
    });

    test("Should return false if cpf is not valid", () => {
        const cpf = "123";

        const isValidSpy = jest
            .spyOn(CpfValidator, "isValid")
            .mockReturnValue(false);

        const result = CpfValidator.isValid(cpf);

        expect(result).toBe(false);
        expect(isValidSpy).toHaveBeenCalledWith(cpf);
    });
});

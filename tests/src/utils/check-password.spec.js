const CheckPassword = require("../../../src/utils/check-password");

describe("CheckPasswordTest", () => {
    test("Should return true if password and confirmPassword are equal", () => {
        const password = "123456";
        const confirmPassword = "123456";

        const result = CheckPassword.match(password, confirmPassword);
        expect(result).toBe(true);
    });
    test("Should return false if password and confirmPassword are different", () => {
        const password = "123456";
        const confirmPassword = "12345";

        const result = CheckPassword.match(password, confirmPassword);
        expect(result).toBe(false);
    });
});

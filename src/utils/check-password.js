class CheckPassword {
    static match(password, confirmPassword) {
        return password === confirmPassword
    }
}

module.exports = CheckPassword
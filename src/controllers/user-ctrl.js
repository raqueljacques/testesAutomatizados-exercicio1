const UserModel = require('../models/User')
const CheckPassword = require('../utils/check-password')
const CpfValidator = require('../utils/cpf-validator')

class CharacterController {
    static async create(req, res) {
        try {
            const { name, cpf, password, confirmPassword } = req.body
    
            if(!CpfValidator.isValid(cpf)) {
                res.status(400).json({ error: 'CPF Inválido'})
                return
            }
            
            if(!CheckPassword.match(password, confirmPassword)) {
                res.status(400).json({ error: 'As senhas não conferem'})
                return
            }

            const user = await UserModel.create({
                name, 
                cpf, 
                password, 
                confirmPassword
            })
            
            res.status(200).json(user)
        } catch (error) {
            res.status(error.status || 500).json(error?.message || error)
        }
    }
}

module.exports = CharacterController
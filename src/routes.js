const { Router } = require('express')
const routes = Router()

const UserController = require('./controllers/user-ctrl')

routes.post('/user', UserController.create)

module.exports = routes
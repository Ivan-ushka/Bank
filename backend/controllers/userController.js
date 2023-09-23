const userService = require('../service/userService')
class UserController {
    async registration(req, res, next) {
        try {
            const {name, age, sex, money, experience} = req.body
            const userData = await userService.registration(name, age, sex, money, experience)
            console.log(userData)
            return res.json(userData)

        } catch (e) {
            console.log(e)
        }
    }

    async getUsers(req, res, next) {
        try {
            const users = await userService.getAllUsers();
            return res.json(users)
        } catch (e) {
            console.log(e)
        }
    }

}

module.exports = new UserController();
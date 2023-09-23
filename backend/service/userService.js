const UserDto = require('../dto/UserDto')
const UserModel = require('../models/userModel')
const generateUniqueId = require('generate-unique-id');
class UserService{
    async registration(name, age, sex, money, experience){
        const id = generateUniqueId();
        const user = await UserModel.create({name, age, sex, money, experience, id})
        const userDto = new UserDto(user)

        return {user: userDto}
    }

    async getAllUsers(){
        const users = UserModel.find();

        return users;
    }
}

module.exports = new UserService()
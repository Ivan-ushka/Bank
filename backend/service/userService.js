const UserDto = require('../dto/UserDto')
const UserModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const tokenService = require("./tokenService");
const generateUniqueId = require('generate-unique-id');
const ApiError = require("../exseptions/apiError");
class UserService{
    async registration(name, pwd){
        const candidate = await UserModel.findOne({name})

        if(candidate) throw ApiError.BadRequest(`Пользователь с таким ником ${name} уже существует `);

        const hashPassword = await bcrypt.hash(pwd, 3)

        const id = generateUniqueId();

        const user = await UserModel.create({name, pwd: hashPassword, id})
        const userDto = new UserDto(user)

        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return { ...tokens, user: userDto }
    }

    async login(name, pwd){
        const user = await UserModel.findOne({name})

        if(!user) throw ApiError.BadRequest('Пользователь с таким ником не найден');

        const passwordMatch = await bcrypt.compare(pwd, user.pwd);

        if(!passwordMatch) throw new ApiError.BadRequest('Неверный пароль');

        const userDto = new UserDto(user);

        const tokens = tokenService.generateTokens({...userDto});

        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto}
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken);

        return token;
    }

    async refresh(refreshToken){
        if(!refreshToken) throw ApiError.UnauthorizedError();

        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await tokenService.findToken(refreshToken);

        if(!userData || !tokenFromDb)  throw ApiError.UnauthorizedError();

        const user = await UserModel.findById(userData.id)
        const userDto = new UserDto(user);

        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return { ...tokens, user: userDto, }
    }

    async checkPwd(email, password){
        const user = await UserModel.findOne({email})

        return await bcrypt.compare(password, user.password);
    }

    async getAllUsers(){
        const users = UserModel.find();

        return users;
    }
}

module.exports = new UserService()
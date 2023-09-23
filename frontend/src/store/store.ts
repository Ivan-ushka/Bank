import {IUser} from "../models/IUser";
import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService"

export default class Store {
    user = {} as IUser

    constructor() {
        makeAutoObservable(this)
    }

    setUser(user: IUser) {
        this.user = user;
    }

    async registration(name: string, age: number, sex: string, money: number, experience: string) {
        try {
            const response = await AuthService.registration(name, age, sex, money, experience)
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e)
        }
    }
}
import {AxiosResponse} from "axios/index";
import $api from "../http";
import {AuthResponse} from "../models/response/AuthResponse";

export default class AuthService{
    static async registration(name: string, age: number, sex: string, money: number, experience: string): Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>('/registration', {name,age,sex,money,experience})
    }
}
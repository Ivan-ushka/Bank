import {AxiosResponse} from "axios/index";
import $api from "../http";
import {AuthResponse} from "../models/response/AuthResponse";

export default class AuthService{
    static async registration(name: string, pwd: string): Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>('/registration', {name, pwd})
    }

    static async login(name: string, pwd: string): Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>('/login', {name, pwd})
    }

    static async logout(): Promise<void>{
        return $api.post('/logout')
    }

    static async checkPassword(name: string, pwd: string): Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>('/checkPwd', {name, pwd})
    }




}
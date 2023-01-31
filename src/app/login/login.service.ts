import { Injectable } from "@angular/core";
import { ILogin } from "./login";

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    getUsers(): ILogin {
        return {
            username: '',
            password: ''
        }
    }
    
}
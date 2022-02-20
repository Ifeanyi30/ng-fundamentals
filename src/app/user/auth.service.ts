import { Injectable } from "@angular/core";
import { IUser } from "./user.model";


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    currentUser!: IUser

    loginUser(userName: string, password: string){
        this.currentUser = {
            id: 1,
            userName: userName,
            password: password,
            firstName: 'John',
            lastName: 'Eze'
        }
    }

    isAuthenticated(){
        return !!this.currentUser;
    }

    updateCurrentUser(firstName: string, lastName: string): void {
        this.currentUser.firstName = firstName
        this.currentUser.lastName =lastName

    }
}
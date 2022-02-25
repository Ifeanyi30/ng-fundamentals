import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { IUser } from "./user.model";


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    currentUser!: IUser

    constructor(private http: HttpClient){}

    loginUser(userName: string, password: string){

        let logInfo = {username: userName, password: password}
        let options = {headers: new HttpHeaders({'Content-type': 'application/json'})}

        return this.http.post('/api/login', logInfo, options).pipe(
            tap(data => {
                this.currentUser = <IUser>data
            })
        ).pipe(
            catchError(err =>{
                return of(false)
            })
        )
        // this.currentUser = {
        //     id: 1,
        //     userName: userName,
        //     password: password,
        //     firstName: 'John',
        //     lastName: 'Eze'
        // }

    }

    isAuthenticated(){
        return !!this.currentUser;
    }

    updateCurrentUser(firstName: string, lastName: string): void {
        this.currentUser.firstName = firstName
        this.currentUser.lastName =lastName

    }
}
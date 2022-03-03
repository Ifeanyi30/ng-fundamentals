import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { IUser } from "./user.model";


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    currentUser?: IUser

    constructor(private http: HttpClient){}

    loginUser(userName: string, password: string){

        const logInfo = {username: userName, password: password}
        const options = {headers: new HttpHeaders({'Content-type': 'application/json'})}

        return this.http.post('/api/login', logInfo, options).pipe(
            tap(data => {
                return data
            })
        ).pipe(
            catchError(() =>{
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

    updateCurrentUser(firstName: string, lastName: string): Observable<Object> {
        this.currentUser!.firstName = firstName
        this.currentUser!.lastName =lastName

        const options = {headers: new HttpHeaders({'Content-type': 'application/json'})}

        return this.http.put(`/api/users/${this.currentUser!.id}`, this.currentUser, options)
    }

    checkAuthStatus() {
        this.http.get('/api/currentIdentity').pipe(tap(data => {
            if(data instanceof Object){
                this.currentUser = <IUser>data
            }
        })).subscribe()
    }

    logout(){
        this.currentUser = undefined
        const options = {headers: new HttpHeaders({'Content-type': 'application/json'})}

        return this.http.post('/api/logout', {}, options)
    }
}
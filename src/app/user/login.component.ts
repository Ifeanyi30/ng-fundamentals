import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";



@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent {
    userName: string | undefined
    password: string | undefined
    mouseoverLoginButton: boolean | undefined

    constructor(private authService: AuthService, private router: Router) {}

    login(formValues: any) {
        this.authService.loginUser(
            formValues.userName,
            formValues.password
        )
        this.router.navigate(['/events'])
    }

    cancel(){
        this.router.navigate(['/events'])
    }
}
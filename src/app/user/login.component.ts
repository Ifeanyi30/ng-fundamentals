import { Component, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { Toastr, TOASTR_TOKEN } from "../common/toaster.service";
import { AuthService } from "./auth.service";



@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent {
    userName: string | undefined
    password: string | undefined
    mouseoverLoginButton: boolean | undefined

    constructor(
        private authService: AuthService,
        private router: Router,
        @Inject(TOASTR_TOKEN) private toastr: Toastr,
        ) {}

    login(formValues: any) {
        this.authService.loginUser(
            formValues.userName,
            formValues.password
        ).subscribe((resp: any) => {
            if (!resp) {
                this.toastr.error('Sorry! Invalid user login')
            } else {
                this.router.navigate(['events'])
            }
        })
        
    }

    cancel(){
        this.router.navigate(['/events'])
    }
}
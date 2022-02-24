import { Component, Inject, OnInit } from "@angular/core";
import { inject } from "@angular/core/testing";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Toastr, TOASTR_TOKEN } from "../common/toaster.service";
import { AuthService } from "./auth.service";



@Component({
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    profileForm: FormGroup = new FormGroup({});

    constructor(
        private authService: AuthService,
        private router: Router,
        @Inject(TOASTR_TOKEN) private toastr: Toastr
    ) { }

    ngOnInit(): void {
        let firstName = new FormControl(
            this.authService.currentUser?.firstName,
            [Validators.required, Validators.pattern('^[A-Z][a-z]*') ]
        )
        let lastName = new FormControl(
            this.authService.currentUser?.lastName,
            [Validators.required, Validators.pattern('^[A-Z][a-z]*') ]
        )

        this.profileForm = new FormGroup({
            firstName: firstName,
            lastName: lastName
        })
    }

    saveProfile(formValues: any){
        if (this.profileForm.valid) {
            this.authService.updateCurrentUser(
                formValues.firstName,
                formValues.lastName
            )
            this.router.navigate(['events'])
            this.toastr.success('Profile Saved')
        }
    }

    cancel() {
        this.router.navigate(['events'])
    }

    validateFirstName(){
        return this.profileForm.controls['firstName']
        .invalid && this.profileForm.controls['firstName'].touched
    }

    validateLastName(){
        return this.profileForm.controls['lastName']
        .invalid && this.profileForm.controls['lastName'].touched
    }
}
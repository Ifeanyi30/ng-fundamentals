import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login.component";
import { ProfileComponent } from "./profile.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProfileGuard } from "./profile.guard";



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {path: 'profile', component: ProfileComponent, canActivate:[ProfileGuard]},
            {path: 'login', component: LoginComponent},
        ])
    ],
    declarations: [
        ProfileComponent,
        LoginComponent,
    ],
    exports: [
        FormsModule
    ]
})
export class UserModule {}
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { ToastrService } from "../common/toaster.service";
import { AuthService } from "./auth.service";



@Injectable({
    providedIn: 'root'
})
export class ProfileGuard implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router,
        private toaster: ToastrService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (!this.authService.isAuthenticated()){
            this.router.navigate([''])
            this.toaster.info('User must be registered to view and edit profile', 'Unauthorized Access!')
            return false
        }
        return true
    }
}
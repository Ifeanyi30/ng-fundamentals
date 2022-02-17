import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { EventService } from "../shared/event.service";


@Injectable({
    providedIn: 'root'
})
export class EventRouteActivator implements CanActivate {
    constructor(private eventService: EventService, private router: Router) {

    }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const eventExist = this.eventService.getEvent(Number(route.params['id'])) != null || isNaN(Number(route.params['id'])) ? true : false

        if (eventExist == false){
            this.router.navigate(['/404'])
            return false
        }
        return true
    
    }
}
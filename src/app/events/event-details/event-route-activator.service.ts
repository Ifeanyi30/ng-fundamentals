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
        const id: number = Number(route.paramMap.get('id'))
        const eventExist = !!this.eventService.getEvent(id)
        
        if (isNaN(id) || !eventExist){
            this.router.navigate(['/404'])
            return false
        }
        return true
    
    }
}
import { Injectable } from "@angular/core";
import { 
    // ActivatedRouteSnapshot,
    CanDeactivate,
    // RouterStateSnapshot,
    UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { CreateEventComponent } from "../create-event.component";


@Injectable({
    providedIn: 'root'
})
export class CreateEventGaurd implements CanDeactivate<CreateEventComponent> {
    // constructor() {}

    canDeactivate(
            component: CreateEventComponent,
            // currentRoute: ActivatedRouteSnapshot,
            // currentState: RouterStateSnapshot,
            // nextState: RouterStateSnapshot
        ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
            if (component.isDirty){
                return window.confirm('You have not saved created event, do you still want to cancel?')
            }
            return true
    }
} 
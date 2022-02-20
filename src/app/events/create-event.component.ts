import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from "./shared/event.service";


@Component({
    templateUrl: './create-event.component.html',
    styles: [`em {
        float: right;
        color: #E05C65;
        padding-left: 10px;
    }

    .error input {
        background-color: #E3C3C5;
    }

    .error ::-webkit-input-placeholder {background-color: #E3C3C5;}
    .error ::-moz-placeholder {background-color: #E3C3C5;}
    .error :-moz-placeholder {background-color: #E3C3C5;}
    .error :-ms-input-placeholder {background-color: #E3C3C5;}
    `]
})
export class CreateEventComponent {
    newEvent: any
    isDirty: boolean = true
    constructor(private router: Router, private eventService: EventService){}

    cancel(): void{
        this.router.navigate(['/events'])
    }

    saveEvent(formValues: any){
        this.eventService.saveEvent(formValues)
        this.cancel()
        this.isDirty =false
    }
}
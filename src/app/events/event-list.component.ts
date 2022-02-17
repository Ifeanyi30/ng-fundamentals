import { Component } from "@angular/core";
import { EventService } from "./shared/event.service";

@Component({
    selector: 'nf-list',
    templateUrl: './event-list.component.html',
})
export class EventListComponent {

  constructor(private eventService: EventService){}
    events = this.eventService.getEvents()

    // handleEvent(data : string): void {
    //     console.log(`data received: ${data}`)
    // }
}
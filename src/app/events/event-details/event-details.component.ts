import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";
import { IEvent, ISession } from "../shared/event.model";
import { EventService } from "../shared/event.service";


@Component({
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit{
    event: IEvent | undefined
    addMode: boolean = false
    events!: IEvent[]
    filterBy: string = 'all'
    sortBy: string = 'votes'

    constructor(private eventService: EventService, private route: ActivatedRoute){}

    ngOnInit(){
        this.event = this.eventService.getEvent(Number(this.route.snapshot.params['id']))
    }

    addSession() {
        this.addMode = true
    }
    
    sessionsList(){
        this.addMode = false
    }

    saveNewSession(data: ISession){
        const nextId = Math.max.apply(null, this.event!.sessions.map(s => s.id))
        data.id = nextId + 1
        this.event?.sessions.push(data)
        this.eventService.updateEvent(this.event!)
        this.addMode = false
    }

    cancelAddSession() {
        this.addMode = false
    }

    filterSessions(param : string) {
        this.filterBy = param
    }
}
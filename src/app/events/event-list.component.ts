import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ToastrService } from "../common/toaster.service";
import { EventService } from "./shared/event.service";


@Component({
 
    templateUrl: './event-list.component.html',
})
export class EventListComponent implements OnInit, OnDestroy {
events: any[] = []
sub! : Subscription
  constructor(private eventService: EventService, private toastr: ToastrService){}
    

    // handleEvent(data : string): void {
    //     console.log(`data received: ${data}`)
    // }
    ngOnInit(){
      this.sub = this.eventService.getEvents().subscribe(events => {
        this.events = events
      })
    }

    ngOnDestroy(){
      this.sub.unsubscribe()
    }

    handleThumbnailClick(data: string): void {
      this.toastr.success(data)
    }
}
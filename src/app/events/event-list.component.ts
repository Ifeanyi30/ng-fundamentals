import { Component, OnInit } from "@angular/core";
import { ToastrService } from "../common/toaster.service";
import { EventService } from "./shared/event.service";


@Component({
 
    templateUrl: './event-list.component.html',
})
export class EventListComponent implements OnInit {
events: any[] = []
  constructor(private eventService: EventService, private toastr: ToastrService){}
    

    // handleEvent(data : string): void {
    //     console.log(`data received: ${data}`)
    // }
    ngOnInit(){
      this.events = this.eventService.getEvents()
    }

    handleThumbnailClick(data: string): void {
      this.toastr.success(data)
    }
}
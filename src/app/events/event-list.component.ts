import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
// import { ToastrService } from "../common/toaster.service";
import { IEvent } from "./shared/event.model";


@Component({
 
    templateUrl: './event-list.component.html',
})
export class EventListComponent implements OnInit, OnDestroy {
  events: IEvent[] = [];
  constructor(
    // private toastr: ToastrService,
    private route: ActivatedRoute){}
    

    // handleEvent(data : string): void {
    //     console.log(`data received: ${data}`)
    // }
    ngOnInit(){
     this.events = this.route.snapshot.data['events']
    }

    ngOnDestroy(){
    }

    // handleThumbnailClick(data: string): void {
    //   this.toastr.success(data)
    // }
}
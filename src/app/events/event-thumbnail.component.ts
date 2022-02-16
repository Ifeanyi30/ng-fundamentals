import { Component, Input, Output, EventEmitter } from "@angular/core";
//import { EventEmitter } from "stream";

@Component({
    selector: 'nf-thumbnail',
    templateUrl: './event-thumbnail.component.html',
})
export class EventThumbnailComponent {
    @Input() event: any
    @Output() buttonClick : EventEmitter<string> = new EventEmitter()

    // handleClickMe(): void {
    //     this.buttonClick.emit(this.event.name);
    // }

    // someProperty: string = 'some value';

    // logFoo(): void {
    //     console.log('foo')
    // }
}
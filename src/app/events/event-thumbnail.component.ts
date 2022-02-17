import { Component, Input, Output, EventEmitter } from "@angular/core";
//import { EventEmitter } from "stream";

@Component({
    selector: 'nf-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styleUrls:['./event-thumbnail.component.css' ]
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

    getStartTimeClass(): Object {
        const isEarlyStart = this.event && this.event.time === '8:00 am'
        // you can return a string or array of the class names
        // separated by space and comma respectively
        return {green: isEarlyStart, bold: isEarlyStart}
    }
}
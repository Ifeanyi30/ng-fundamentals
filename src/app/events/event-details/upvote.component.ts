import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ISession } from "../shared/event.model";



@Component({
    selector: 'nf-upvote',
    templateUrl: './upvote.component.html',
    styleUrls: ['./upvote.component.css'],
})
export class UpvoteComponent {
    @Input() count!: number
    @Input() set hasVoted(val: boolean){
        this.iconColor = val ? 'red': 'white'
    }
    @Output() vote: EventEmitter<any> = new EventEmitter()
    iconColor!: string


    onClick(){
        this.vote.emit({})
    }
}
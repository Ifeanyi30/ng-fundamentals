import { Component, Input, OnChanges } from "@angular/core";
import { AuthService } from "src/app/user/auth.service";
import { ISession } from "../shared/event.model";
import { VoterService } from "./voters.service";



@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
    @Input() sessions?: ISession[]
    @Input() filterBy: string = 'all'
    @Input() sortBy!: string
    @Input() eventId?: number
    visibleSessions : ISession[] = []

    constructor(public authService: AuthService, private voterService: VoterService){}

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy)
            this.sortBy === 'name' ? this.visibleSessions.sort(sortByName)
            : this.visibleSessions.sort(sortByVotes)
        }
    }

    filterSessions(filter: string) {
        if (filter === 'all'){
            this.visibleSessions = this.sessions!.slice(0)
        } else{
            this.visibleSessions = this.sessions!.filter(session => {
                return session.level.toLocaleLowerCase() === filter
            })                
        }
    }

    toggleVote(session: ISession) {
        if(this.userHasVoted(session)) {
            this.voterService.deleteVoter(this.eventId!, session,
                this.authService.currentUser!.userName)
        } else {
            this.voterService.addVoter(this.eventId!, session,
                this.authService.currentUser!.userName)
        }
        if (this.sortBy === 'votes')
        this.visibleSessions.sort(sortByVotes);
    }

    userHasVoted(session: ISession): boolean{

        return this.voterService.userHasVoted(session,
            this.authService.currentUser!.userName)
    }

}

function sortByName(s1: ISession, s2: ISession) {
    if (s1.name > s2.name) return 1
    else if (s1.name === s2.name) return 0
    else return -1
}

function sortByVotes(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length
}
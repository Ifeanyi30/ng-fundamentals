import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ISession } from '../events/shared/event.model';
import { EventService } from '../events/shared/event.service';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'nf-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm: string = ''
  foundSessions: any[] = []
  sub!: Subscription

  constructor(
    public authService: AuthService,
    private eventService: EventService
    ) { }

  ngOnInit(): void {
  }

  searchSessions(term: string){
    this.sub = this.eventService.searchSessions(term).subscribe(
      (sessions: ISession[]) => {
        this.foundSessions = sessions
      }
    )
  }

}

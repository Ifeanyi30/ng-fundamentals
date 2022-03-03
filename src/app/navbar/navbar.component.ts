import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IEvent, ISession } from '../events/shared/event.model';
import { EventService } from '../events/shared/event.service';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'nf-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm = ''
  foundSessions: ISession[] = []
  sub!: Subscription
  events!: IEvent[]

  constructor(
    public authService: AuthService,
    private eventService: EventService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((events) => {
      this.events = events
    })
  }

  searchSessions(term: string){
    this.sub = this.eventService.searchSessions(term).subscribe(
      (sessions: ISession[]) => {
        this.foundSessions = sessions
      }
    )
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['login'])
    })
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './errors/404.component';
import { CreateEventComponent } from './events/create-event.component';
import { CreateEventGaurd } from './events/event-details/create-event.gaurd';
import { CreateSessionsComponent } from './events/event-details/create_session.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { SessionListComponent } from './events/event-details/session-list.component';
import { EventListResolver } from './events/event-list-resolver.service';
import { EventListComponent } from './events/event-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionsComponent,
    SessionListComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      
      {path:'events', component: EventListComponent, resolve: {events: EventListResolver}},
      {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
      {path: 'events/session/new', component: CreateSessionsComponent},
      {path: 'create', component: CreateEventComponent, canDeactivate: [CreateEventGaurd]},
      {path: '404', component: Error404Component},
      {path:'', redirectTo: '/events', pathMatch: 'full'},
    //   {path: 'user', loadChildren: () => import('./user/user.module')
    //   .then(m => m.UserModule)
    // }
    // the above method could be used to import other ng modules
    // but I refer just direct import as below.
    ]),
    UserModule,
  ],
  providers: [
    // {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState,}
    // this is good when using function as gaurds, just use the provide string value
    // to the appropriate route.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// export function checkDirtyState(component: CreateEventComponent) {
//   if (component.isDirty)
//     return window.confirm('You have not saved created event, do you still want to cancel?')
//   return false
// }

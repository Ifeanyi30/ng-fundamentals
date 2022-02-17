import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './errors/404.component';
import { CreateEventComponent } from './events/create-event.component';
import { CreateEventGaurd } from './events/event-details/create-event.gaurd';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListComponent } from './events/event-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      
      {path:'events', component: EventListComponent},
      {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
      {path: 'create', component: CreateEventComponent, canDeactivate: [CreateEventGaurd]},
      {path: '404', component: Error404Component},
      {path:'', redirectTo: '/events', pathMatch: 'full'},
      
    ])
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

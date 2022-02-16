import { Component } from "@angular/core";

@Component({
    selector: 'nf-list',
    templateUrl: './event-list.component.html',
})
export class EventListComponent {
    event = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2022',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/assets/Images/angularconnect-shield.png',
        location: {
        address: '1057 DT',
        city: 'London',
        country: 'England',
        },
    };

    // handleEvent(data : string): void {
    //     console.log(`data received: ${data}`)
    // }
}
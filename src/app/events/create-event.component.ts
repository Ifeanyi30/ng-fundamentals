import { Component } from "@angular/core";
import { Router } from "@angular/router";


@Component({
    template: `
    <h1>New Event</h1>
    <hr>
    <div>
        <h3>[Create Event form will go here]</h3>
        <br>
        <br>
        <button type="submit" class="btn btn-primary">Save</button>
        <button class="btn btn-danger" (click)="cancel()">Cancel</button>
    </div>
    `
})
export class CreateEventComponent {
    isDirty: boolean = true
    constructor(private router: Router){}

    cancel(): void{
        this.router.navigate(['/events'])
    }
}
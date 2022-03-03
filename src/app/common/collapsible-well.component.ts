import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component } from "@angular/core";



@Component({
    selector: 'collapsible-well',
    styles: [
        `
        div {
            overflow: hidden;
            text-wrap: softwrap;
        }
        `
    ],
    template: `
    <div (click)="toggleContent()"  class="well pointable">
        <h4>
          <ng-content select="[title]"></ng-content>
        </h4>
        <div [@openClose]="visible ? 'open' : 'closed'">
            <ng-content select="[body]" ></ng-content>
        </div>
        
    </div>
    `,
    animations: [
        trigger('openClose', [
      // ...
      state('open', style({
        height: '170px',
        opacity: 1,
      })),
      state('closed', style({
        height: '0px',
        opacity: 0,
      })),
      transition('open => closed', [
        animate('.3s')
      ]),
      transition('closed => open', [
        animate('.3s')
      ]),
    ]),
    ]
})
export class CollapsibleWellComponent {
    visible = true

    toggleContent() {
        this.visible = !this.visible
    }
}
import { Component } from '@angular/core'

@Component({
  template: `
    <div class="errorMessage">
        <h1 >404'd</h1>
        <p>Page not found, Check the url for any corrections or try again later</p>
    </div>
     `,
  styles: [`
    .errorMessage { 
      margin-top:150px; 
      /* font-size: 100px; */
      color: #bbb;
      text-align: center; 
    },
    p{
        font-size: 24;
    }
    `]
})
export class Error404Component{
  constructor() {

  }

}
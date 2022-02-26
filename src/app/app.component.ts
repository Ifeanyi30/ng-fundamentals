import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'nf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-fundamentals'

  constructor(private authservice: AuthService){}
  ngOnInit(): void {
    this.authservice.checkAuthStatus()
  }

  
}

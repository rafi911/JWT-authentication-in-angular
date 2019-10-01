import { Component, OnInit, AfterViewInit } from '@angular/core';

import { User } from './models/user';
import { AuthenticationService } from './shared/authentication.service';
import { UserService } from './shared/user.service';
import { first, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'Post';
  currentUser: User;
   
  ngOnInit(): void {
    this.authenticationService.currentUser.subscribe(x => { 
      this.currentUser = x;   
      console.log("user", x);
    });
   
  }

  constructor(
    public userService : UserService,
    private router : Router,
    private authenticationService: AuthenticationService,
    private titleService: Title
    ){
      this.titleService.setTitle("Post")
   
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
  
}

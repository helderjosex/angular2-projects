import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../auth/auth.service';
import { User } from './../users/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
  private loading = false;
  private error = '';
  private urlImg = '../assets/images/login-image.jpg';
  private user: User = new User();

  constructor(
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin(){    
    this.loading = true;
    this.authService.login(this.user)
        .subscribe(
              result  => {
                  this.router.navigate(['/']);
              },
              error => {
                 this.error = 'Username or password is incorrect';
                 this.loading = false;
              }
            );                  
  }

}

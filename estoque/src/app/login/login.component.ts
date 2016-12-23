import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';
  urlImg = '../assets/images/login-image.jpg';

  constructor(
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin(){
    console.log('onLogin');
    this.loading = true;
    this.authService.login(this.model.username, this.model.password)
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

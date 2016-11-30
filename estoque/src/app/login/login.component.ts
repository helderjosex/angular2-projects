import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

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
    private loginService: LoginService) { }

  ngOnInit() {
  }

  onLogin(){
    console.log('onLogin');
    this.loading = true;
    this.loginService.login(this.model.username, this.model.password)
        .subscribe(result => {
            if (result === true) {
                this.router.navigate(['/']);
            } else {
                this.error = 'Username or password is incorrect';
                this.loading = false;
            }
        });
  }

}

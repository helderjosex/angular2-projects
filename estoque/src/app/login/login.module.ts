import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginGuard } from './login.guard';
import { LoginService } from './login.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [LoginComponent],
  providers: [LoginGuard,LoginService],
})
export class LoginModule { }

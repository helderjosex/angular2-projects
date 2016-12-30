import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { UsersModule } from './../users/users.module';

@NgModule({ 
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    UsersModule
  ],
  exports: [HomeComponent],
})
export class HomeModule { }

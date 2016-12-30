import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './../auth/auth.guard';
import { UsersComponent } from './../users/users.component';


const usersRoutes: Routes = [
    { path: 'users', component: UsersComponent, canActivate: [AuthGuard]  }
];

@NgModule({
    imports: [RouterModule.forChild(usersRoutes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {}
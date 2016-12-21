import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'users', component: UsersComponent, canActivate: [LoginGuard]  },
    { path: '', component: HomeComponent, canActivate: [LoginGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
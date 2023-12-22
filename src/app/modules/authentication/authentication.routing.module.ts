import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const AuthenticationRoutes: Routes = [
  {
    path:'login', component: LoginComponent
  },
];


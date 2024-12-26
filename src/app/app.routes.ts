import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

export const routes: Routes = [


    { path: 'register', component: RegisterComponent },
    { path: 'login', component:LoginComponent }


];

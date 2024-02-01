import { Routes } from '@angular/router';
import { AppLayoutComponent } from './core/components/app-layout/app-layout.component';
import { HomeComponent } from './features/components/home/home.component';
import { LoginComponent } from './features/auth/components/login/login.component';

export const routes: Routes = [
    {
        path: 'auth-login', component: LoginComponent
    },
    {
    path: '',
    component: AppLayoutComponent,
    children: [
        {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
        },
        {
            path: 'home',
            component: HomeComponent
        }
]
    }
];

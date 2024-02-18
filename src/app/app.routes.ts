import { Routes } from '@angular/router';
import { AppLayoutComponent } from './core/components/app-layout/app-layout.component';
// import { HomeComponent } from './features/components/home/home.component';
import { LoginComponent } from './features/auth/components/login/login.component';
import { RegisterComponent } from './features/register/register.component';
// import { IntroductionComponent } from './features/components/introduction/introduction.component';
import { GiayNuComponent } from './features/components/giay-nu/giay-nu.component';

export const routes: Routes = [
  {
    path: 'auth-login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      // {
      // path: '',
      // pathMatch: 'full',
      // redirectTo: '/Home'
      // },
      // {
      //     path: 'Home',
      //     component: HomeComponent
      // },

      // {
      //   path: '',
      //   pathMatch: 'full',
      //   redirectTo: '/Intro'
      // },
      // {
      //   path: 'Intro',
      //   component: IntroductionComponent
      // },

      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/giayNu'
      },
      {
        path: 'giayNu',
        component: GiayNuComponent
      }
    ]
  }
];

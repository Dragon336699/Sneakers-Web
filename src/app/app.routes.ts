import { Routes } from '@angular/router';
import { AppLayoutComponent } from './core/components/app-layout/app-layout.component';
// import { HomeComponent } from './features/components/home/home.component';
import { LoginComponent } from './features/auth/components/login/login.component';
import { RegisterComponent } from './features/register/register.component';
// import { IntroductionComponent } from './features/components/introduction/introduction.component';
// import { GiayNuComponent } from './features/components/giay-nu/giay-nu.component';
// import { PhuKienComponent } from './features/components/phu-kien/phu-kien.component';
// import { GiayNamComponent } from './features/components/giay-nam/giay-nam.component';
// import { TreEmComponent } from './features/components/tre-em/tre-em.component';
// import { NewsComponent } from './features/components/news/news.component';
import { ShoppingCartComponent } from './features/components/shopping-cart/shopping-cart.component';

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

      // {
      //   path: '',
      //   pathMatch: 'full',
      //   redirectTo: '/giayNu'
      // },
      // {
      //   path: 'giayNu',
      //   component: GiayNuComponent
      // },

      // {
      //   path: '',
      //   pathMatch: 'full',
      //   redirectTo: '/phuKien'
      // },
      // {
      //   path: 'phuKien',
      //   component: PhuKienComponent
      // },

      // {
      //   path: '',
      //   pathMatch: 'full',
      //   redirectTo: '/giayNam'
      // },
      // {
      //   path: 'giayNam',
      //   component: GiayNamComponent
      // },

      // {
      //   path: '',
      //   pathMatch: 'full',
      //   redirectTo: '/treEm'
      // },
      // {
      //   path: 'treEm',
      //   component: TreEmComponent
      // },

      // {
      //   path: '',
      //   pathMatch: 'full',
      //   redirectTo: '/news'
      // },
      // {
      //   path: 'news',
      //   component: NewsComponent
      // },

      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/shoppingCart'
      },
      {
        path: 'shoppingCart',
        component: ShoppingCartComponent
      },
    ]
  }
];

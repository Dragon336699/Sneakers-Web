import { Routes } from '@angular/router';
import { AppLayoutComponent } from './core/components/app-layout/app-layout.component';
import { HomeComponent } from './features/components/home/home.component';
import { LoginComponent } from './features/auth/components/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { IntroductionComponent } from './features/components/introduction/introduction.component';
import { GiayNuComponent } from './features/components/giay-nu/giay-nu.component';
import { PhuKienComponent } from './features/components/phu-kien/phu-kien.component';
import { GiayNamComponent } from './features/components/giay-nam/giay-nam.component';
import { TreEmComponent } from './features/components/tre-em/tre-em.component';
import { NewsComponent } from './features/components/news/news.component';
import { ShoppingCartComponent } from './features/components/shopping-cart/shopping-cart.component';
import { DetailProductComponent } from './features/components/detail-product/detail-product.component';
import { AuthGuard } from './features/auth/authInterceptor/auth.guard';
import { ContactComponent } from './features/components/contact/contact.component';
import { loginGuard } from './features/auth/authInterceptor/login.guard';

export const routes: Routes = [
  {
    path: 'auth-login',
    component: LoginComponent,
    canActivate: [loginGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [loginGuard]
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/Home'
      },
      {
        path: 'Home',
        component: HomeComponent
      },
      {
        path: 'Intro',
        component: IntroductionComponent
      },
      {
        path: 'giayNu',
        component: GiayNuComponent
      },
      {
        path: 'phuKien',
        component: PhuKienComponent
      },
      {
        path: 'giayNam',
        component: GiayNamComponent
      },
      {
        path: 'treEm',
        component: TreEmComponent
      },
      {
        path: 'news',
        component: NewsComponent
      },
      {
        path: 'shoppingCart',
        component: ShoppingCartComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'detailProduct',
        component: DetailProductComponent
      },
    ]
  }
];

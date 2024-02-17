import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from '../app-header/app-header.component';
<<<<<<< HEAD
import { MatInputModule } from '@angular/material/input';
import { AppNavbarComponent } from '../app-navbar/app-navbar.component';
// import { HomeComponent } from '../../../features/components/home/home.component';
=======
import {MatInputModule} from '@angular/material/input';
import { AppNavbarComponent } from '../app-navbar/app-navbar.component';
>>>>>>> 0e6c2719fa1a5c75b389a2b331fa3d08a8b3535d

@Component({
  selector: 'app-app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    AppHeaderComponent,
    MatInputModule,
<<<<<<< HEAD
    AppNavbarComponent,
    // HomeComponent,
=======
    AppNavbarComponent
>>>>>>> 0e6c2719fa1a5c75b389a2b331fa3d08a8b3535d
  ],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss'
})
export class AppLayoutComponent {

}

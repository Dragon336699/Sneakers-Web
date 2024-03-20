import { Component } from '@angular/core';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-app-navbar',
  standalone: true,
  imports: [
    OverlayPanelModule,
    ButtonModule,
  ],
  templateUrl: './app-navbar.component.html',
  styleUrl: './app-navbar.component.scss'
})
export class AppNavbarComponent {

}

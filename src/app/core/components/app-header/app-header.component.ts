import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  selector: 'app-app-header',
  standalone: true,
  imports: [
    InputTextModule,
    RouterModule,
    OverlayPanelModule,
  ],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {
  
}

import { AfterViewInit, Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { BaseComponent } from '../../commonComponent/base.component';
import { AvatarModule } from 'primeng/avatar';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { UserService } from '../../services/user.service';
import { filter, takeUntil, tap } from 'rxjs';
@Component({
  selector: 'app-app-header',
  standalone: true,
  imports: [
    InputTextModule,
    RouterModule,
    OverlayPanelModule,
    AvatarModule,
    MenuModule
  ],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent extends BaseComponent implements AfterViewInit,OnInit{
  public token: string | null = null;
  public itemsMenuAvatar: MenuItem[] | undefined;
  public userName : string | undefined;
  constructor(
    private userService : UserService
  ) {
    super();
    if (typeof localStorage !== 'undefined') {
      this.token = localStorage.getItem('token');
    }
  }

  ngOnInit(): void {
    if (this.token != null){
      this.userService.getInforUser(this.token).pipe(
        filter((userInfo) => !!userInfo),
        tap((userInfo) => {
          this.userName = userInfo.fullname;
        }),
        takeUntil(this.destroyed$)
      ).subscribe()
    }

    this.itemsMenuAvatar = [
      {
        label: 'Your Profile',
        icon: 'pi pi-user'
      },
      {
        label: 'Setting',
        icon: 'pi pi-cog'
      },
      {
        label: 'Sign out',
        icon: 'pi pi-power-off',
        command: () => {
          this.signOut();
        }
      }
    ]   
  }

  ngAfterViewInit(): void {
    
  }
  
  signOut(){
    localStorage.removeItem("token");
    window.location.reload();
  }
}

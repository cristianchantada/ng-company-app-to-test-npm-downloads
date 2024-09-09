import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '../../../shared/components/side-menu/side-menu.component';
import { CvcSideMenuComponent, TitleColor } from 'cvc-side-menu';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SideMenuComponent,
    CvcSideMenuComponent,
  ],
  templateUrl: './admin-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AdminLayoutComponent {

  public isAuthenticated = signal(false);
  public TitleColor = TitleColor;

  onLogin(){
    this.isAuthenticated.set(true);
  }

  onLogout(){
    this.isAuthenticated.set(false);
  }

}

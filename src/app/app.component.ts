import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { CommonModule } from '@angular/common';
import { AuthService } from './core/services/auth.service';
import { DashboardComponent } from "./features/dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HeaderComponent, CommonModule, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pre';

  constructor(public authService: AuthService, private router: Router) {}

  showHeader(): boolean {
    // Solo muestra el header si el usuario está autenticado y no está en la página de inicio de sesión
    return this.authService.isAuthenticated() && this.router.url !== '/login';
  }

  showDashboard(): boolean {
    // Solo muestra el dashboard si el usuario está autenticado
    return this.authService.isAuthenticated();
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faChartBar, faCog, faUsers, faFileAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterOutlet,RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isCollapsed = false;
  rol: string = '';
  username: string = '';
  profileImage: string = '';

  faHome = faHome;
  faChartBar = faChartBar;
  faCog = faCog;
  faUsers = faUsers;
  faFileAlt = faFileAlt;
  faSignOutAlt = faSignOutAlt;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.rol = this.authService.getUserRol().toLowerCase();  // Convertir a minúsculas
    this.username = this.authService.getUsername();
    console.log('Rol from AuthService:', this.rol);  // Confirmar el rol en minúsculas
    this.setProfileImage();
  }

  setProfileImage(): void {
    const rol = this.rol.toLowerCase();  // Convertir a minúsculas para evitar problemas de coincidencia
  
    if (rol === 'coordinador') {
      this.profileImage = 'https://img.freepik.com/fotos-premium/paloma-corbata-que-tiene-corbata_771335-50496.jpg';
    } else if (rol === 'admin') {
      this.profileImage = 'https://img.freepik.com/fotos-premium/paloma-corbata-que-tiene-corbata_771335-50496.jpg';
    } else if (rol === 'estudiante') {
      this.profileImage = 'https://i.pinimg.com/originals/e7/fd/e7/e7fde7197f89cac7846e66ad629287cc.jpg';
    } else {
      console.warn('Unknown rol, using default profile image');
      this.profileImage = 'https://i.pinimg.com/originals/e7/fd/e7/e7fde7197f89cac7846e66ad629287cc.jpg';
    }
  
    console.log('Profile image URL assigned:', this.profileImage);
  }

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

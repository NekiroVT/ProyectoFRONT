import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }

    // Obtener el rol del usuario
    const userRol = this.authService.getUserRol();

    // Verificar si el rol del usuario está en los roles permitidos para la ruta
    const allowedRoles = route.data['role'] as Array<string>;
    if (allowedRoles && !allowedRoles.includes(userRol)) {
      // Redirigir si el rol del usuario no está permitido
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}

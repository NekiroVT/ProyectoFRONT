// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, { username, email, password });
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { username, password }).pipe(
      tap((response: any) => {
        if (response.accessToken) {
          localStorage.setItem('accessToken', response.accessToken);
          localStorage.setItem('username', response.username);
          localStorage.setItem('rol', response.rol);
          this.toastr.success('Has accedido al sistema correctamente', 'Éxito');
        }
      }),
      catchError((error) => {
        // Extraer el mensaje de error específico, si está disponible
        const errorMessage = error.error?.message || 'Usuario o contraseña incorrectos';
        this.toastr.error(errorMessage, 'Error');
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  getWelcomeMessage(): string {
    const rol = localStorage.getItem('rol');
    return rol === 'ADMIN' ? 'Hola Admin' : rol === 'secretaria' ? 'Hola Secretaria' : 'Hola Usuario';
  }

  getUsername(): string {
    return localStorage.getItem('username') || '';
  }

  getUserRol(): string {
    return (localStorage.getItem('rol') || '').toLowerCase(); // Asegura que siempre esté en minúsculas
  }

  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('username');
    localStorage.removeItem('rol');
    this.toastr.info('Sesión cerrada correctamente', 'Logout');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('accessToken');
  }
}

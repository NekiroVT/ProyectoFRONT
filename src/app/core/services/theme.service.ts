import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  // Método para activar el modo oscuro
  enableDarkMode(): void {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark'); // Guardamos la preferencia
  }

  // Método para activar el modo claro
  enableLightMode(): void {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light'); // Guardamos la preferencia
  }

  // Verificamos si el usuario tiene una preferencia guardada
  loadCurrentTheme(): void {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      this.enableDarkMode();
    } else {
      this.enableLightMode();
    }
  }
}

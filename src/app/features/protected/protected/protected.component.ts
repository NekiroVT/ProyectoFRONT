import { Component } from '@angular/core';

@Component({
  selector: 'app-protected',
  standalone: true,
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css'],
})
export class ProtectedComponent {
  message = 'Este es un contenido protegido, solo accesible para usuarios autenticados.';
}

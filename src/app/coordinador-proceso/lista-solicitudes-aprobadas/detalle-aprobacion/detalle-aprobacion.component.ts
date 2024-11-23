import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-detalle-aprobacion',
  standalone: true,  // Este componente es standalone
  imports:[CommonModule],
  templateUrl: './detalle-aprobacion.component.html',
  styleUrls: ['./detalle-aprobacion.component.css']
})
export class DetalleAprobacionComponent {
  isModalVisible = false;  // Controla la visibilidad del modal

  constructor() {}

  // Mostrar el modal
  openModal() {
    this.isModalVisible = true;
  }

  // Cerrar el modal
  closeModal() {
    this.isModalVisible = false;
  }

  // Cancelar cambios y cerrar el modal
  cancelChanges() {
    this.closeModal();
  }

  // Guardar cambios y cerrar el modal
  saveChanges() {
    // Aquí puedes agregar la lógica para guardar los cambios
    this.closeModal();
  }
}

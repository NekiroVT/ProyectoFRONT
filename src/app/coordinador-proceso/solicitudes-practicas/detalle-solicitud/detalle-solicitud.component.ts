import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detalle-solicitud',
  standalone:true,
  templateUrl: './detalle-solicitud.component.html',
  styleUrls: ['./detalle-solicitud.component.css'],
})
export class DetalleSolicitudComponent {
  @Input() proceso: any; // Recibe el proceso seleccionado
  @Output() cerrar = new EventEmitter<void>(); // Emite un evento para cerrar el modal
  @Output() confirmar = new EventEmitter<void>(); // Emite un evento para confirmar la acción

  RegresarModal() {
    this.cerrar.emit(); // Emite el evento para cerrar el modal
  }

}
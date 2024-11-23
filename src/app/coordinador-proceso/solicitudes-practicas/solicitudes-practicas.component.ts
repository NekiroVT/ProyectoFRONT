import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { CommonModule, NgClass, NgIf } from '@angular/common';
import { DetalleSolicitudComponent } from './detalle-solicitud/detalle-solicitud.component';

interface Proceso {
  nombre: string;
  codigo: string;
  empresa: string;
  ruc: string;
  estado: string;
}

@Component({
  selector: 'app-solicitudes-practicas',
  standalone:true,
  imports: [CommonModule, NgClass, NgIf, DetalleSolicitudComponent],
  templateUrl: './solicitudes-practicas.component.html',
  styleUrls: ['./solicitudes-practicas.component.css']
})
export class SolicitudesPracticasComponent implements OnInit {
  procesos: Proceso[] = [];
  procesoSeleccionado: Proceso | null = null;

  // Flags para mostrar las ventanas de confirmación
  showConfirmRechazo: boolean = false;
  showConfirmAceptar: boolean = false;

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.cargarSolicitudes();
  }

  cargarSolicitudes(): void {
    this.http.get<Proceso[]>('http://localhost:8080/api/solicitud').subscribe(
      (data) => {
        this.procesos = data;
      },
      (error) => {
        this.toastr.error('Error al cargar las solicitudes', 'Error');
      }
    );
  }

  mostrarDetalle(proceso: Proceso): void {
    this.procesoSeleccionado = proceso;
  }

  cerrarDetalle(): void {
    this.procesoSeleccionado = null;
  }

  confirmarRechazo(): void {
    this.showConfirmRechazo = true;
  }

  cancelarRechazo(): void {
    this.showConfirmRechazo = false;
  }

  rechazarSolicitud(): void {
    this.showConfirmRechazo = false;
    this.toastr.warning('Solicitud rechazada', 'Rechazada');
  }

  confirmarAceptar(): void {
    this.showConfirmAceptar = true;
  }

  cancelarAceptar(): void {
    this.showConfirmAceptar = false;
  }

  aceptarSolicitud(): void {
    this.showConfirmAceptar = false;
    this.toastr.success('Solicitud aceptada', 'Aceptada');
  }
}

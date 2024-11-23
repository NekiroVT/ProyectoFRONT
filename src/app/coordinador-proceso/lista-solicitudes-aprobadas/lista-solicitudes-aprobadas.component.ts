import { Component, ViewChild, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DetalleAprobacionComponent } from './detalle-aprobacion/detalle-aprobacion.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Solicitud {
  nombre: string;
  codigo: string;
  empresa: string;
  ruc: string;
  estado: string;
}

@Component({
  selector: 'app-lista-solicitudes-aprobadas',
  standalone: true,
  imports: [DetalleAprobacionComponent, CommonModule, FormsModule],
  templateUrl: './lista-solicitudes-aprobadas.component.html',
  styleUrls: ['./lista-solicitudes-aprobadas.component.css']
})
export class ListaSolicitudesAprobadasComponent implements OnInit {
  @ViewChild(DetalleAprobacionComponent) detalleAprobacionComponent!: DetalleAprobacionComponent;

  solicitudes: Solicitud[] = [
    { nombre: 'Practicante 001', codigo: '202420900', empresa: 'ArTec Geoperary express', ruc: '20100022004', estado: 'En espera' },
    { nombre: 'Practicante 002', codigo: '202420901', empresa: 'XYZ Corp', ruc: '20100022005', estado: 'Aprobada' },
  ];

  showRejectConfirmModal = false;
  showRejectReasonModal = false;
  rejectReason = '';
  selectedSolicitud: Solicitud | null = null;

  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {}

  openEditModal(solicitud: Solicitud): void {
    this.selectedSolicitud = solicitud;
    // Implementa la lógica del modal de edición
  }

  openRejectModal(solicitud: Solicitud): void {
    this.selectedSolicitud = solicitud;
    this.showRejectConfirmModal = true;
  }

  closeRejectConfirmModal(): void {
    this.showRejectConfirmModal = false;
    this.selectedSolicitud = null;
  }

  confirmReject(): void {
    this.showRejectConfirmModal = false;
    this.showRejectReasonModal = true;
  }

  sendRejectReason(): void {
    if (this.selectedSolicitud) {
      this.toastr.warning(`Solicitud de ${this.selectedSolicitud.nombre} rechazada: ${this.rejectReason}`);
      this.showRejectReasonModal = false;
      this.rejectReason = '';
      this.selectedSolicitud = null;
    }
  }

  mostrarDetalle(solicitud: Solicitud): void {
    this.toastr.info('Mostrando detalles de: ' + solicitud.nombre);
    this.detalleAprobacionComponent.openModal();
  }

  aceptarSolicitud(solicitud: Solicitud): void {
    this.toastr.success('Solicitud de ' + solicitud.nombre + ' aceptada');
  }
}
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Practica {
  empresa: string;
  linea: string;
  estado: string;
}

@Component({
  selector: 'app-registro-practicas',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl: './registro-practicas.component.html',
  styleUrls: ['./registro-practicas.component.css']
})
export class RegistroPracticasComponent implements OnInit {
  practicas: Practica[] = [
    { empresa: 'Fibras de Coraza INC. Adm', linea: 'Administración', estado: 'Espera' },
    { empresa: 'Tecnología Innovadora', linea: 'TI', estado: 'En proceso' },
    { empresa: 'Soluciones Empresariales', linea: 'Software', estado: 'Finalizado' },
  ];

  lineas: string[] = ['TI', 'Software', 'Administración']; // Líneas de ejemplo para filtrar
  lineaSeleccionada: string = '';

  constructor() {}

  ngOnInit(): void {
    // Aquí no es necesario llamar a un servicio, ya que estamos usando datos estáticos
  }

  filtrarPorLinea(): void {
    // Filtro temporal con datos estáticos; ajusta esto al consumir el backend
    if (this.lineaSeleccionada) {
      this.practicas = this.practicas.filter(practica => practica.linea === this.lineaSeleccionada);
    } else {
      // Restaurar datos originales si no se selecciona una línea específica
      this.practicas = [
        { empresa: 'Fibras de Coraza INC. Adm', linea: 'Administración', estado: 'Espera' },
        { empresa: 'Tecnología Innovadora', linea: 'TI', estado: 'En proceso' },
        { empresa: 'Soluciones Empresariales', linea: 'Software', estado: 'Finalizado' },
      ];
    }
  }
}

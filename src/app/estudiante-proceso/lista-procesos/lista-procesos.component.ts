import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Proceso {
  nombre: string;
  codigo: string;
  empresa: string;
  ruc: string;
  estado: string;
}

@Component({
  selector: 'app-lista-procesos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-procesos.component.html',
  styleUrls: ['./lista-procesos.component.css']
})
export class ListaProcesosComponent implements OnInit {
  procesos: Proceso[] = [
    { nombre: 'Empresa 001', codigo: '202420900', empresa: 'Apple', ruc: '20100020004', estado: 'En espera' },
    { nombre: 'Empresa 002', codigo: '202420900', empresa: 'Apple', ruc: '20100020004', estado: 'En proceso' },
  ];

  constructor() {}

  ngOnInit(): void {}
}

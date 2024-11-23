// services/practicas.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PracticasService {
  private apiUrl = '/api/practicas'; // Cambia esta URL según tu backend

  constructor(private http: HttpClient) {}

  getPracticas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}

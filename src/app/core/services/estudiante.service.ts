import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private apiUrl = 'http://localhost:8080/api/estudiante/datos'; // URL del backend

  constructor(private http: HttpClient) {}

  getDatosEstudiante(): Observable<any> {
    const token = localStorage.getItem('accessToken'); // Obtener el token del localStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(this.apiUrl, { headers }); // Llamada HTTP al backend
  }
}


















































































































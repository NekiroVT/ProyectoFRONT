import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Linea } from '../../interfaces/linea';


@Injectable({
  providedIn: 'root'
})
export class LineaService {
  private apiUrl = 'http://localhost:8080/api/linea';

  constructor(private http: HttpClient) {}

  getLineas(): Observable<Linea[]> {
    return this.http.get<Linea[]>(this.apiUrl);
  }

  getLineaById(id: number): Observable<Linea> {
    return this.http.get<Linea>(`${this.apiUrl}/${id}`);
  }

  createLinea(linea: Linea): Observable<Linea> {
    return this.http.post<Linea>(this.apiUrl, linea);
  }

  updateLinea(linea: Linea): Observable<Linea> {
    return this.http.put<Linea>(`${this.apiUrl}/${linea.id}`, linea);
  }

  deleteLinea(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
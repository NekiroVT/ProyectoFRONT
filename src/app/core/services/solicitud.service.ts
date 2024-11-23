import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SolicitudDto } from '../../interfaces/solicitud-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  private baseUrl = 'http://localhost:8080/api/solicitud';

  constructor(private http: HttpClient) {}

  getDatosIniciales(): Observable<SolicitudDto> {
    return this.http.get<SolicitudDto>(`${this.baseUrl}`);
  }

  saveSolicitud(solicitud: SolicitudDto): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}`, solicitud);
  }
}
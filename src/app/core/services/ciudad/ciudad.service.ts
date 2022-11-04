import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ciudad } from '../../models/ciudad/ciudad';

@Injectable({
  providedIn: 'root',
})
export class CiudadesService {
  private path = 'ciudades';
  private url = environment.url_api + this.path;

  constructor(private http: HttpClient) {}

  cargarCiudad(): Observable<Ciudad[]> {
    return this.http.get<Ciudad[]>(this.url + '/sedes');
  }

  cargarCiudadFiltro(depa:number): Observable<any> {
    return this.http.get<Ciudad[]>(`${this.url}/sedes/${depa}`);
  }
}

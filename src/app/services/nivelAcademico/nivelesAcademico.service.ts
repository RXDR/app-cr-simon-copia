import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NivelesAcademico } from './nivelesAcademico';

@Injectable({
  providedIn: 'root',
})
export class NivelesAcademicoService {
  private path = 'nivelacademico';
  private url = environment.url_api + this.path;
  private nivelAcadem: any;
  constructor(private http: HttpClient) {}

  //obtener facultades
  cargarNivelAcadem(): Observable<NivelesAcademico[]> {
    this.nivelAcadem = this.http.get<NivelesAcademico[]>(`${this.url}/activas`);
     return this.nivelAcadem;
  }
  cargarNivelAcademFormacion(formacion:number): Observable<any> {
    this.nivelAcadem = this.http.get<NivelesAcademico[]>(`${this.url}/activas/${formacion}`);
     return this.nivelAcadem;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Formulario } from '../../models/form/formulario';

@Injectable({
  providedIn: 'root'
})
export class Creacion2ProgramaService {
  private path = 'programas/creacion';
  private path1='programas/edicion'
  private url = environment.url_api + this.path;
  private url1 = environment.url_api + this.path1;

  constructor(private http: HttpClient) {}

creacion2Programa(formulario:Formulario): Observable<Formulario> {
  return this.http.put<Formulario>(this.url,formulario);
}

edicion2(formulario:Formulario): Observable<Formulario> {
  return this.http.put<Formulario>(this.url1,formulario);
}
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Denominacion } from '../../models/denominacion/denominacion';


import { Programa } from '../../models/programa/programa';



@Injectable({
  providedIn: 'root'
})
export class EdicionService {
  private path = 'programas';
  private url = environment.url_api + this.path;

  constructor(private http: HttpClient) {}

edicion1( idPrograma:number , idProceso:number): Observable<Denominacion> {
  return this.http.put<Denominacion>(`${this.url}/${idPrograma}?procesoId=${idProceso}`,null);
}

}
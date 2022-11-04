import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CronogramaPrograma } from '../../models/cronoProgramas/cronogramaPrograma';

@Injectable({
  providedIn: 'root'
})
export class CronoProgramaSrvService {
  
  private path = 'programas';
  private url = environment.url_api + this.path;


  constructor(private http: HttpClient) { }

  //obtener cronogramas
  getCronoPro(
    nombre: string,
    idNivelAcademico: number,
    idFalcutad: number,
    estado:string
  ): Observable<any> {
    let params: HttpParams = new HttpParams();

    if (idFalcutad) {
      params = params.set('idFalcutad', idFalcutad);
    }

    if (nombre) {
      params = params.set('nombre', nombre);
    }

    params = params.set('idNivelAcademico', idNivelAcademico);
    params = params.set('estado', estado);

    return this.http.get<CronogramaPrograma[]>(this.url + '/filtroCronograma', { params: params });
  }
}

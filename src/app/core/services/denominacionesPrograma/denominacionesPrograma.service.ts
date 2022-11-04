import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProcesoDenominacion } from '../../models/denominacion/procesoDenomiacion';
import { Formulario } from '../../models/form/formulario';

@Injectable({
  providedIn: 'root'
})
export class DenominacionesProgramaService {

  private path = 'programas';
  private path2 ='denomicaciones';
  private url = environment.url_api + this.path;
private url2=environment.url_api + this.path2
  constructor(private http: HttpClient) {}



  //obtener programas
  cargarDenominacion(
    nombre: string,
    idNivelAcademico: number,
    idFalcutad: number, 
    estado:string,
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

    return this.http.get<ProcesoDenominacion[]>(this.url + '/filtroDenominacion', { params: params });
  }

  obtenerByProgramaId(idPrograma: number): Observable<any>{
    return this.http.get<Formulario>(this.url2+ '/programa/' + idPrograma)
  }
}

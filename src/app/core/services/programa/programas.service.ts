import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Formulario } from '../../models/form/formulario';
import { Programa } from '../../models/programa/programa';

@Injectable({
  providedIn: 'root',
})
export class ProgramasService {
  private path = 'programas';
  private url = environment.url_api + this.path;
  private programa$ = new BehaviorSubject<Programa>(new Programa());
  public  selectedProgram$ = this.programa$.asObservable();

  constructor(private http: HttpClient) { }

  //obtener programas
  cargarProgramas(
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

    return this.http.get<Programa[]>(this.url + '/filtro', { params: params });
  }

  creacionPrograma(formulario: Formulario): Observable<Formulario> {
    return this.http.post<Formulario>(this.url, formulario);
  }
  
  setPrograma(p:Programa){
    this.programa$.next(p);
  }

getPrograma(): Programa {
    return this.programa$.getValue();
  }
  getPrograma$(): Observable<Programa> {
    return this.programa$.asObservable();
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Formulario } from '../../models/form/formulario';
import { Programa } from '../../models/programa/programa';


@Injectable({
  providedIn: 'root'
})
export class InactivacionService {

  private path = 'programas/inactivacion';
  private url = environment.url_api + this.path;

  constructor(private http: HttpClient) {}

  inactivacion(programaId :number): Observable<Programa>{
    return this.http.put<Programa>(this.url+'/'+programaId,null )
  }
  cargarActivo(): Observable<Programa>{
    return this.http.get<Programa>(this.url);
  }
}
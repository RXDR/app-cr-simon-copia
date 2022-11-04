import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Formacion } from '../../models/cronograma/cronograma';

@Injectable({
  providedIn: 'root'
})
export class NivelFormacionService {

  private path = 'nivelFormacion';
  private url = environment.url_api + this.path;

  constructor(private http: HttpClient) {}

  //obtener facultades
  cargarNivelFormacion(id:number): Observable<any> {
    return this.http.get<Formacion[]>(this.url+'/nivelAcademico/'+id);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Departamento } from '../../models/departamento/departamento';

@Injectable({
  providedIn: 'root',
})
export class DepartamentosService {
  private path = 'departamentos';
  private url = environment.url_api + this.path;

  constructor(private http: HttpClient) {}

  cargarDepa(): Observable<Departamento[]> {
    return this.http.get<Departamento[]>(this.url + '/sedes');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Formulario } from '../../models/form/formulario';

@Injectable({
  providedIn: 'root'
})
export class EdicionBorradorService {
  private path = 'programas/borrador';
  private url = environment.url_api + this.path;

  constructor(private http: HttpClient) {}

edicionBorrador(formulario:Formulario): Observable<Formulario> {
  return this.http.put<Formulario>(this.url,formulario);
}

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Modalidad } from '../../models/modalidad/modalidad';

@Injectable({
  providedIn: 'root',
})
export class ModalidadService {
  private path = 'modalidades';
  private url = environment.url_api + this.path;

  constructor(private http: HttpClient) {}

  cargarModalidades(): Observable<Modalidad[]> {
    return this.http.get<Modalidad[]>(this.url + '/activas');
  }
}

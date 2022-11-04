import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pais } from '../../models/form/formulario';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private path = 'paises';
  private url = environment.url_api + this.path;

  constructor(private http: HttpClient) {}

  //obtener facultades
  cargarPais(): Observable<Pais[]> {
    return this.http.get<Pais[]>(this.url+ '/sedes');
  }


}




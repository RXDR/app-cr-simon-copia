import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NivelAcademicoPrg } from '../../models/nivelAcademicoPrg/nivelAcademicoPrg';

@Injectable({
  providedIn: 'root'
})
export class NivelAcademicoPrgService {
  private path = 'nivelesAcademicosPrg';
  private url = environment.url_api + this.path;

  constructor(private http: HttpClient) {}

  //obtener facultades
  cargarNivelesPr(): Observable<any> {
    return this.http.get<NivelAcademicoPrg[]>(this.url + '/activas');
  }
}

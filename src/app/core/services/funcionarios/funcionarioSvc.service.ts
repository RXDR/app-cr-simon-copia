import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Funcionarios } from '../../models/funcionarios/funcionarios';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioSvcService {
  private path = 'persona';
  private url = environment.url_api + this.path;

  constructor(private http: HttpClient) {}

  getFuncionarios(): Observable<Funcionarios[]> {
    return this.http.get<Funcionarios[]>(this.url + '/listar');
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TipoPrograma } from '../../models/tipoPrograma/tipoPrograma';

@Injectable({
    providedIn: 'root',
})
export class TipoProgramaService {

    private path = 'tiposPrograma';
    private url = environment.url_api + this.path;

    constructor(private http: HttpClient) { }

    cargarTipoPrograma(): Observable<any> {
        return this.http.get<TipoPrograma>(this.url + '/activas');
    }
}

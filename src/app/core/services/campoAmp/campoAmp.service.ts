import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Campos } from '../../models/campoAmp/Campos';

@Injectable({
  providedIn: 'root'
})
export class CampoAmpService {
private url =environment.url_api
private path = 'campoAmplio/listar'
private path1 ='campoEspecifico/campoAmplio/'
private path2='campoDetallado/campoespecifico/'
constructor(private http:HttpClient) { }

getCampoAmp():Observable<Campos>{

  return this.http.get<Campos>(this.url+this.path)
}

getCampoEspe(id:number):Observable<Campos>{

  return this.http.get<Campos>(this.url+this.path1+id)
}

getCampoDeta(id:number):Observable<Campos>{

  return this.http.get<Campos>(this.url+this.path2+id)
}

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cronograma } from '../../models/cronograma/cronograma';

@Injectable({
  providedIn: 'root'
})
export class CronogramaServicesService {
  private path = 'cronograma';
  private path2='cronogramaactividad'
  private path3='actividadavance';
  
  private url = environment.url_api + this.path;
  private url2 = environment.url_api + this.path2;
  private url3 = environment.url_api + this.path3;
  private url4= environment.url_api + this.path;
  private url0=environment.url_api;
constructor(private http: HttpClient) { }

creacionCronograma(formulario: Cronograma): Observable<Cronograma> {
  return this.http.post<Cronograma>(this.url, formulario);
}
creacionDetalleCrono(formulario:Cronograma):Observable<Cronograma>{
  return this.http.post<Cronograma>(this.url2,formulario)
}
getcronoAtivi(id:number):Observable<Cronograma>{
  return  this.http.get<Cronograma>(this.url0+'cronogramaactividad/'+id)

}
getCronograma():Observable<Cronograma>{
  return this.http.get<Cronograma>(this.url+'/listar')
}
getCronogramaId(id:number):Observable<Cronograma>{
  return this.http.get<Cronograma>(this.url0+'cronograma/'+id)
}
creacionActAvance(formulario:Cronograma):Observable<Cronograma>{
  return this.http.post<Cronograma>(this.url3,formulario)
}
getActividadAvc(actidvidadId:number):Observable<Cronograma>{
  return this.http.get<Cronograma>(this.url3+'/actividad/'+actidvidadId)
}
obtenerCronoId(idPrograma: number): Observable<Cronograma> {
  return this.http.get<Cronograma>(this.url4+ '/programa/' + idPrograma)
}

ObtenerActividadId(idActividad:number):Observable<Cronograma>{
  return this.http.get<Cronograma>(this.url0+'cronogramaactividad/cronograma/'+idActividad)
}
inactivar(id:number):Observable<Cronograma>{
  return this.http.get<Cronograma>(this.url0+'cronograma/inactivar?id='+id)
}
inactivar1(id:number):Observable<Cronograma>{
  return this.http.get<Cronograma>(this.url2+'/inactivar?id='+id)
}
}

import { Proceso } from './../../models/proceso/proceso';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Programa } from '../../models/programa/programa';

@Injectable({
  providedIn: 'root'
})
export class ProcesoService {

  private path = 'procesos';
  private url = environment.url_api + this.path;
  private proceso$ = new BehaviorSubject<Proceso>(new Proceso());
  private procesosList$ = new BehaviorSubject<Proceso[]>([]);
  private programa$= new BehaviorSubject<Programa>(new Programa())
  constructor(private http: HttpClient) { }

  loadProcesos(): Observable<any> {
    return this.http.get<Proceso>(this.url + '/activas');
  }
  setProceso(p: Proceso) {
    this.proceso$.next(p);
  }
  getProceso(): Proceso {
    return this.proceso$.getValue();
  }

  getProceso$(): Observable<Proceso> {
    return this.proceso$.asObservable();
  }
  setProcesosList(p: Proceso[]){
    this.procesosList$.next(p);
  }
  getProcesosList(): Proceso[]{
    return this.procesosList$.getValue();
  }
  getProcesosList$(): Observable<Proceso[]>{
    return this.procesosList$.asObservable();
  }

setPrograma(p:Programa){
  this.programa$.next(p)
}
getPrograma(){
  return this.programa$.getValue();
}

}

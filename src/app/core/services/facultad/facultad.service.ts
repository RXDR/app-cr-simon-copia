import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Facultad } from '../../models/facultad/facultad';

@Injectable({
  providedIn: 'root',
})
export class FacultadService {
  private path = 'facultades';
  private url = environment.url_api + this.path;
  private facultad$ = new BehaviorSubject<Facultad>(new Facultad());
  private facultades$ = new BehaviorSubject<Facultad[]>([]);


  constructor(private http: HttpClient) { }

  setFacultad(f: Facultad): void {
    this.facultad$.next(f);
  }
  getFacultad(): Facultad {
    return this.facultad$.getValue();
  }
  getFacultad$(): Observable<Facultad> {
    return this.facultad$.asObservable();
  }
  setFacultades(f: Facultad[]): void {
    this.facultades$.next(f);
  }
  getFacultades(): Facultad[] {
    return this.facultades$.getValue();
  }

  getFacultades$(): Observable<Facultad[]> {
    return this.facultades$.asObservable();
  }

  //obtener facultades
  loadFacultades(): Observable<any> {
    return this.http.get<Facultad[]>(this.url);
  }
}

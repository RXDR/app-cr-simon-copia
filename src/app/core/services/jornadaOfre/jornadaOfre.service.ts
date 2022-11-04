import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JornadaOfre } from '../../models/jornadaOfre/jornadaOfre';

@Injectable({
  providedIn: 'root'
})
export class JornadaOfreService {

constructor() { }
jornadaOfrec():Observable<JornadaOfre[]>{

  const jornadaOfre:JornadaOfre[] = [
    { id:1,nombre:'UNICA' },
    { id:2,nombre:'TARDE' },
    { id:3,nombre:'NOCHE' },
    { id:4,nombre:'PRESENCIAL' },
    { id:5,nombre:'VIRTUAL' },
   
    
  ]; 

  return of(jornadaOfre);

}

}

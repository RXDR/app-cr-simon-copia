import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AdmisionPrg } from '../../models/admisionProgr/admisionPrg';

@Injectable({
  providedIn: 'root'
})
export class AdmisionPrgService {

constructor() { }

admisionPrograma():Observable<AdmisionPrg[]>{

  const admisionPro:AdmisionPrg[] = [
    { id:1,nombre:'ANUAL' },
    { id:2,nombre:'BIANUAL' },
    { id:3,nombre:'BIMESTRE' },
    { id:4,nombre:'CUATRISMESTRE' },
    { id:5,nombre:'MENSUAL' },
    { id:6,nombre:'POR COHORTE' },
    { id:7,nombre:'SEMESTRAL' },
    { id:8,nombre:'SIN PERIODO DEFINIDO' },
    { id:9,nombre:'TRIMESTRAL' },
    
    
    
    
  ]; 

  return of(admisionPro);

}

duracionPrograma():Observable<AdmisionPrg[]>{

  const duracion:AdmisionPrg[] = [
    { id:1,nombre:'SEMESTRE(S)' },
    { id:2,nombre:'AÑO(S)' },
    { id:3,nombre:'TRIMESTRE(S)' },
    { id:4,nombre:'MES(ES)' },
    { id:5,nombre:'PERIODO(S)' },
    { id:6,nombre:'BIMESTRE(S)' },
    { id:7,nombre:'ASIGNATURA(S)' },
    { id:8,nombre:'CUATRIMESTRE(S)' },
    { id:9,nombre:'DÍAS(S)' },
    { id:9,nombre:'HORAS(S)' },
    { id:9,nombre:'PROMEDIO(S)' },
    { id:9,nombre:'POR COHORTE(S)' },
    
    
    
    
  ]; 

  return of(duracion);

}

}

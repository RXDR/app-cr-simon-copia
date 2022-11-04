import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { cicloRadicacion, CronoCombo, DocenciaServ, PagoTramite, presupuesto } from '../../models/cronoCombo/cronoCombo';

@Injectable({
  providedIn: 'root'
})
export class CronoComboService {

constructor() { }

cicloRadicacion():Observable<cicloRadicacion[]>{

  const cicloRadi:cicloRadicacion[] = [
    { id:1,nombre:'PRUEBA1' },
    { id:2,nombre:'PRUEBA2' },
    { id:3,nombre:'PRUEBA3' },
   
    
  ]; 

  return of(cicloRadi);

}


docenciaServ():Observable<DocenciaServ[]>{

  const docenciaServ:DocenciaServ[] = [
    { id:1,nombre:'SI' },
    { id:2,nombre:'NO APLICA'},
    
   
    
  ]; 

  return of(docenciaServ);

}

normaInterna():Observable<CronoCombo[]>{

  const normaInterna:CronoCombo[] = [
    { id:1,nombre:'SI' },
    { id:2,nombre:'NO APLICA'},
    { id:3,nombre:'PENDIENTE'},
   
    
  ]; 

  return of(normaInterna);

}

pagoTramite():Observable<PagoTramite[]>{

  const pagoTramite:PagoTramite[] = [
    { id:1,nombre:'REALIZADO' },
    { id:2,nombre:'PENDIENTE'},
    { id:3,nombre:'EN PROCESO'},
   
    
  ]; 

  return of(pagoTramite);

}
Presupuesto():Observable<presupuesto[]>{

  const presupuesto:presupuesto[] = [
    { id:1,nombre:'REALIZADO' },
    { id:2,nombre:'PENDIENTE'},
    { id:3,nombre:'EN PROCESO'},
   
    
  ]; 

  return of(presupuesto);

}

}

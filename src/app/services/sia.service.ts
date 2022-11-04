import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MenuItem,  Avance } from '../core/models/cronograma/cronograma';

@Injectable({
  providedIn: 'root'
})
export class SiaService {



  constructor() { }

  menu():MenuItem[]{

    const  menuItem:MenuItem[] = [
                 { nombre:'Home', ruta:'./programas/home',icon:'school' },
                 { nombre:'Carreras', ruta:'./programas/programs',icon:'calendar_month' },
       
           ]
    
    return menuItem;
 
   }

  
  


  guardarAvances( avance:Avance[] ){

    localStorage.setItem('avances',JSON.stringify(avance)); 

  }

  getAvances():Observable<Avance[]>{

    let avances:Avance[] = []

    if(!localStorage.getItem('avances')){
      return of(avances);  
    }

    avances = JSON.parse(localStorage.getItem('avances')!);
    
    return of(avances);  


  }
  
}

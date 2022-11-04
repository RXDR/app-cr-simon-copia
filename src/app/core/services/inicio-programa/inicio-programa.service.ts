import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InicioProgramaService {

  selectedItem:number=0;

  constructor(private http: HttpClient) { 
    this.selectedItem =1;
  }
}

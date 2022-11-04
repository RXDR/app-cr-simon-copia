import { Denominacion } from './../../models/denominacion/denominacion';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProcesoDenominacion } from '../../models/denominacion/procesoDenomiacion';

@Injectable({
  providedIn: 'root'
})
export class DenominacionService {

  private path = 'denomicaciones';
  private url = environment.url_api + this.path;
  

  
}

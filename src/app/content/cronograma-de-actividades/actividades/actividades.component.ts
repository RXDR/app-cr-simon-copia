import { Component, ComponentFactoryResolver, Inject, OnInit } from '@angular/core';
import { Avance, Cronograma } from 'src/app/core/models/cronograma/cronograma';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SiaService } from '../../../services/sia.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CronogramaServicesService } from 'src/app/core/services/creacionCronograma/cronogramaServices.service';
import { FuncionarioSvcService } from 'src/app/core/services/funcionarios/funcionarioSvc.service';


@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {

  private _cronograma!: Cronograma;

  fecha: string = '';

  avanceForm: FormGroup = this._fb.group({
    id: [],
    nombre: [''],
    fecha:[''],
    observaciones: [''],
    estado: [true],
    cronogramaActividadId: [],
  });
  

  private _avances: Avance[] = [];
  avc: any;
  formulario: any;
  dateS: Date;
  idCrono:any;
  idCronograma:any;
  nombreAct: any;
  denominaciones?:any;
  funcionario: any;

  constructor(private cronogramaServices:CronogramaServicesService,
    public dialogRef: MatDialogRef<ActividadesComponent>,
    private _fb: FormBuilder, private _siaService: SiaService,
    private funcionarioSvc:FuncionarioSvcService,

    @Inject(MAT_DIALOG_DATA) private _data: { cronograma, idCronograma, denominacion }) {
      console.log(this._data)
      this.denominaciones=this._data.denominacion
     }




  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit(): void {
    this.getActiAvc();
this.getFechaHora();
this.getcronoAct();
  }

  campoEsValido(campo: string) {
    return this.avanceForm.controls[campo].errors &&
      this.avanceForm.controls[campo].touched;
  }

  
  getActiAvc(){
    this.cronogramaServices.getActividadAvc(this._data.cronograma).subscribe(resp=>this.getAvances(resp['data']))
  }

  getAvances(campo:any) {
    this.avc=campo
console.log(this.avc)
  }
guardarActividad(){
  if(this.avanceForm.valid){
    this.avanceForm.get('cronogramaActividadId').setValue(this._data.cronograma)
    this.cronogramaServices.creacionActAvance(this.avanceForm.value).subscribe(
      resp=>{
        
       
          this.avanceForm.controls['fecha'].setValue(this.fecha);
          this.avanceForm.reset();
          this.ngOnInit();
      }
    )
  
  } 
  }
getFechaHora() {
    const fechaHoy: Date = new Date();
    const meses: string[] = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June',
      'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ];

    const [month, day, year] = [fechaHoy.getMonth(), fechaHoy.getDate(), fechaHoy.getFullYear()];
    const [hour, minutes, seconds] = [fechaHoy.getHours(), fechaHoy.getMinutes(), fechaHoy.getSeconds()];

    this.fecha = `${meses[month]} ${day}, ${year} - ${hour}:${minutes}`;

    return `${meses[month]} ${day}, ${year} - ${hour}:${minutes}`;

  }
getcronoAct(){
  this.cronogramaServices.getcronoAtivi(this._data.cronograma).subscribe(resp=>{
    console.log(resp)

    this.nombreAct=resp['data']
  })
}

cargarFuncionario(){
  this.funcionarioSvc.getFuncionarios().subscribe(resp=>{
    this.funcionario=resp['data']
  })
}

inactivar(){
  this.cronogramaServices.inactivar1(this._data.cronograma).subscribe(resp=>{
    console.log(resp+'inactivo')
    alert('Cronograma inactivo')
    this.ngOnInit();
  })
}

}

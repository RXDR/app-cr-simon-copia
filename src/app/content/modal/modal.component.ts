import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { cicloRadicacion, CronoCombo, DocenciaServ, PagoTramite, presupuesto } from 'src/app/core/models/cronoCombo/cronoCombo';
import { Cronograma } from 'src/app/core/models/cronograma/cronograma';
import { Denominacion } from 'src/app/core/models/denominacion/denominacion';
import { Funcionarios } from 'src/app/core/models/funcionarios/funcionarios';


import { CronogramaServicesService } from 'src/app/core/services/creacionCronograma/cronogramaServices.service';
import { CronoComboService } from 'src/app/core/services/cronoCombo/cronoCombo.service';
import { DenominacionesProgramaService } from 'src/app/core/services/denominacionesPrograma/denominacionesPrograma.service';
import { FuncionarioSvcService } from 'src/app/core/services/funcionarios/funcionarioSvc.service';
import { ProcesoService } from 'src/app/core/services/proceso/proceso.service';
import { ActividadesComponent } from '../cronograma-de-actividades/actividades/actividades.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  formulario?: any;
  formulario2?: any;
  _normaInterna: CronoCombo[] = [];
  _pagoTramite: PagoTramite[] = [];
  _docenciaServ: DocenciaServ[] = [];
  _presupuesto: presupuesto[] = [];
  _cicloRadicacion: cicloRadicacion[] = [];
  _cronograma!: Cronograma;
  facultadName?: any;
  modalidadName?; any;
  ubicacionName?: Denominacion;
  formacionName?: any;
  nombreCronograma?: any;
  proceso?: any;
  proId: any;
  procesoCronograma: String;
  codigo: number;
  denocrono: any;
  programa:any;
  actividades: any;
  nombreAct: any;
  idCrono: any;
  disbled1:boolean=true;
  
public cronoGrama:Cronograma;
  personas: any;


  get cronograma(): Cronograma {

    return this._cronograma;
  }
  constructor(private procesoService: ProcesoService,
    public dialogRef: MatDialogRef<ModalComponent>,
    private formBuild: FormBuilder,
    private cronoCombo: CronoComboService,
    private creacionCronogramaService: CronogramaServicesService,
    private getDenominacion:DenominacionesProgramaService,
    private dialogService: MatDialog,
    private FuncionarioSvc:FuncionarioSvcService,
    @Inject(MAT_DIALOG_DATA) public _data: { denominacion: Denominacion ,idCronograma}
  ) {

    console.log(this._data.idCronograma +'este es')
    this.idCrono=this._data.idCronograma 
    this.proId =this._data.denominacion.id;
    this.codigo=parseInt(this.proId)
    
    
   
  }
  ngOnInit() {
    
    this.buildForm();
    this.getNormaInterna();
    this.getPresupuesto();
    this.getDocencia();
    this.getCiclo();
    this.cargardatos();
    this.buildForm2();
    this.cargarTabAct();
  this.cargarFuncionario();
    
   
  }
  block(){
    this.disbled1=false;
  }
  

  openDialog(item, item2) {


    const nuevoRef = this.dialogService.open(ActividadesComponent,
      {
        data: { cronograma: item,
                idcronograma:item2,
                denominacion:this._data.denominacion
        },
        width: '6000px',
      });
    nuevoRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  //select
  getNormaInterna(): void {
    this.cronoCombo.normaInterna().subscribe(
      resp => this._normaInterna = resp
    )
  }
  //
  getPresupuesto(): void {
    this.cronoCombo.Presupuesto().subscribe(
      resp => this._presupuesto = resp
    )
  }
  //
  getDocencia() {
    this.cronoCombo.docenciaServ().subscribe(
      resp => this._docenciaServ = resp
    )
  }
  //
  getCiclo() {
    this.cronoCombo.cicloRadicacion().subscribe(
      resp => this._cicloRadicacion = resp
    )
  }


private buildForm2():void{
  this.formulario2 = this.formBuild.group({

    avances: [null],
    cronogramaId: [''],
    fechaEntrega: ['', [Validators.required]],
    dias_notificacion: ['', [Validators.required]],
    id: [''],
    nombre: ['', [Validators.required]],
    notificarA: ['', [Validators.required]],
    estado:[true]


  })
  setTimeout(() => {
      this.formulario2.get('cronogramaId').setValue(this._data.idCronograma)
      
  })
}

  private buildForm(): void {



    ///Creación del programa 2
    this.formulario = this.formBuild.group({

      avances: ['', [Validators.required]],
      ciclo: ['', [Validators.required]],
      docenciaServicio: ['', [Validators.required]],
      funcionarioResp:['',],
      estado: [true,],
      fechaEntrega: ['', [Validators.required]],
      fechaFinal: ['', [Validators.required]],
      id: [''],
      normaInterna: ['', [Validators.required]],
      observaciones: ['', [Validators.required]],
      pagoTramite: ['', [Validators.required]],
      presupuesto: ['', [Validators.required]],
      programa: this.formBuild.group({
        activo: [''],
        facultad: this.formBuild.group({
          codigo: ['', ],
          nombre: ['', ]
        }),
        id: ['', Validators.required],
        nivelAcademico: this.formBuild.group({
          id: ['', ],
          nombre: ['',],
          activo: [''],
          formacion: [''],
        }),
        nombre: ['', ],
        programaVigenteId: [''],
        
      }),

    })
    setTimeout(() => {
      
      
    })
    
    }


  grabarActividad() {
    console.log(this.formulario2.value)
    if (this.formulario2.valid) {
      this.creacionCronogramaService.creacionDetalleCrono(this.formulario2.value).subscribe(
        resp => {
          alert('se ha grabado actividad')
          this.ngOnInit();
        }
      )
    } if(this.formulario2.invalid){
      alert('Error al guardar Actividad')
    }
  }

  Submit() {
    console.log(this.formulario.value)
    if (this.formulario.valid) {
      
      this.creacionCronogramaService.creacionCronograma(this.formulario.value).subscribe(
        Response => {
          alert('se ha guardo el Cronograma')
        }

      )
    } if(this.formulario.invalid){
      alert('Error al guardar cronograma')
    }
  }

  cargardatos() {
    this.getDenominacion.obtenerByProgramaId(this.proId).subscribe(
      resp=>{
        
        this.denocrono=resp['data'];
        console.log(this.denocrono.denominacion)
        this.nombreCronograma = this.denocrono.denominacion.programa.nombre
        this.ubicacionName = this.denocrono.denominacion.municipio.nombre
        this.facultadName =this.denocrono.denominacion.programa.facultad.nombre
        this.proceso = this.denocrono.proceso.nombre
        this.modalidadName=this.denocrono.denominacion.modalidad.nombre
        this.formacionName=this.denocrono.denominacion.programa.nivelAcademico.nombre
        this.programa=this.denocrono.denominacion.programa
        console.log(this.programa+'holaaaaaa')
        this.formulario.get('programa').setValue(this.programa);
      
      }
    )
    if(this._data.idCronograma>0){
      this.creacionCronogramaService.getCronogramaId(this._data.idCronograma).subscribe(resp=>{
        console.log(resp)
        this.cronoGrama=resp['data']
        this.formulario.setValue(this.cronoGrama)
        
            })
    
    }else{
      console.log('nuevo cronograma')
    }
      
    
  }
     cargarTabAct(){

      if(this._data.idCronograma>0){
        this.creacionCronogramaService.ObtenerActividadId(this._data.idCronograma).subscribe(res=>{
          console.log(res)
         this.actividades=res['data']
        }
          )
      }
      
    }
        
      
      
    
    cargarFuncionario(){
      this.FuncionarioSvc.getFuncionarios().subscribe(resp=>{
        console.log(resp)
        this.personas=resp['data']
      })
    } 
  
     
      inactivar(){
        this.creacionCronogramaService.inactivar(this._data.idCronograma).subscribe(resp=>{
          console.log(resp+'inactivo')
          alert('Cronograma inactivo')
          this.ngOnInit();
        })
      }
     
    
}
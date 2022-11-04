import { Denominacion } from './../../core/models/denominacion/denominacion';
import { DenominacionService } from './../../core/services/denominacion/denominacion.service';
import { ProcesoService } from './../../core/services/proceso/proceso.service';
import { Proceso } from './../../core/models/proceso/proceso';
import { Programa } from '../../core/models/programa/programa';
import { NivelesAcademico } from './../../services/nivelAcademico/nivelesAcademico';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { forkJoin, Subject, debounceTime, window } from 'rxjs';
import { FacultadService } from 'src/app/core/services/facultad/facultad.service';
import { NivelAcademicoPrgService } from 'src/app/core/services/nivelAcademicoPrg/nivelAcademicoPrg.service';
import { ProgramasService } from 'src/app/core/services/programa/programas.service';
import { Facultad } from '../../core/models/facultad/facultad';
import { NivelAcademicoPrg } from 'src/app/core/models/nivelAcademicoPrg/nivelAcademicoPrg';
import { Route, Router } from '@angular/router';


import {ConfirmationService} from 'primeng/api';
import { InactivacionService } from 'src/app/core/services/inactivacion/inactivacion.service';
import { EdicionBorradorService } from 'src/app/core/services/edicion/edicionBorrador.service';
import { EdicionService } from 'src/app/core/services/modificacion/edicion.service';
import { InicioProgramaService } from 'src/app/core/services/inicio-programa/inicio-programa.service';
import { DepartamentosService } from 'src/app/core/services/departamento/departamentos.service';
import { PaisesService } from 'src/app/core/services/pais/paises.service';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from 'src/app/messages/confirm/confirm.component';
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-incio-cr-programa',
  templateUrl: './incio-cr-programa.component.html',
  styleUrls: ['./incio-cr-programa.component.scss'],
  styles: [
    
  ]
})
export class IncioCrProgramaComponent implements OnInit {
  denoEdicion: Denominacion;
  edicionDenominacion: any;
  limpiar($event) {
    let clickedElement = $event.target || $event.srcElement;
    let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".page-link-visited");
    for (let i = 0; i < this.facultades.length; i++) {
      if (isCertainButtonAlreadyActive) {
        isCertainButtonAlreadyActive.classList.remove("page-link-visited");
      }
      clickedElement.className += " page-link-visited";
    }

  }

activo:any;
  nroEstudiante:any;
  snies:any
  facultades: Facultad[];
  nivelesAcPrg: NivelAcademicoPrg[];
  programas: Programa[];
  procesos: Proceso[];
  procesosToShow: Proceso[];
  showProcesosBox: boolean = false;
  hideDiv:boolean=true;
  procesoPrograma: Proceso;
  procesoPrograma1: any;
  nombreFiltro: string = null;
  nivelAcademicoIdFiltro: number = 0;
  facultadIdFiltro: number = null;
  subject: Subject<any> = new Subject();
  denominacionSelected: Denominacion;
  programaSelected: number=null;
 procesButton:any;
 selected: any;
 load:boolean=true;
 show:boolean;
 estadoFilter :string = "true";
 @Input() data: any[];
 @Output() select = new EventEmitter<any>();

  constructor(
    private facultadeService: FacultadService,
    private programaService: ProgramasService,
    private nivelAcademicoPrgService: NivelAcademicoPrgService,
    private procesoService: ProcesoService,
    private denominacionService: DenominacionService,
    private router: Router,
    private inactivacion:InactivacionService,
    private confirmationService: ConfirmationService,
    private edicionOne:EdicionService,
    public service:InicioProgramaService,
    private paisesService: PaisesService,
    private depaService: DepartamentosService,
    private dialog: MatDialog
  ) { }

 
//popup
confirm(event: Event) {
  this.confirmationService.confirm({
      target: event.target,
      message: 'Está seguro de que desea continuar?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        
      },
      reject: () => {
          //reject action
      }
  });}



  onChangeNombre(nombre: string): void {
    
    this.nombreFiltro = nombre;
this.nivelAcademicoIdFiltro=1
    this.getProgramasFiltro(
      this.nombreFiltro,
      this.nivelAcademicoIdFiltro,
      this.facultadIdFiltro
    );
  }

  hideDivProces(event:any){
    if(event==true){

      this.hideDiv = false;
    }
    
  }
 remove(){
  localStorage.removeItem('re');
 }
  ngOnInit(): void {
     this.show=this.load
     

    //Obtener informacion
    this.getInfo();
    this.nivelAcademicoIdFiltro=1
    this.subject.pipe(debounceTime(600)).subscribe(() => {
      this.getProgramasFiltro(
        this.nombreFiltro,
        this.nivelAcademicoIdFiltro,
        this.facultadIdFiltro
      );
    });
  }

  OnChangeNivelAcedemico(event: any) {
    
    this.nivelAcademicoIdFiltro=1
    this.nivelAcademicoIdFiltro = event.value;
    this.getProgramasFiltro(
      this.nombreFiltro,
      this.nivelAcademicoIdFiltro,
      this.facultadIdFiltro
    );
  }

  getInfo(): void {
    const observables = forkJoin({
      facultades: this.facultadeService.loadFacultades(),
      nivelAcademicoPrg: this.nivelAcademicoPrgService.cargarNivelesPr(),
      
      programas: this.programaService.cargarProgramas(
        this.nombreFiltro,
        this.nivelAcademicoIdFiltro,
        this.facultadIdFiltro,
        "true"
        
      ),
      procesos: this.procesoService.loadProcesos(),
      paises: this.paisesService.cargarPais(),
      departamentos: this.depaService.cargarDepa()
    });

    observables.subscribe({
      next: (value) => {
        this.facultades = value.facultades.data;
        this.nivelesAcPrg = value.nivelAcademicoPrg.data;
        this.programas = value.programas.data;
        this.procesos = value.procesos.data;
        this.procesoService.setProcesosList(value.procesos.data);
        this.facultadeService.setFacultades(value.facultades.data);
      },
    });
  }

  getProgramasFiltro(
    nombre: string,
    nivelFormacionId: number,
    facultadId: number
  ): void {
    //obtener Programas
    this.denominacionSelected = null;
    this.procesosToShow = [];
    this.programaService
      .cargarProgramas(nombre, nivelFormacionId, facultadId,this.estadoFilter)
      .subscribe((response) => {
        console.log(response);
        this.programas = response.data;
        if(this.programas.length == 0){
          this.load=true
           
        }if(this.programas.length > 0){
          this.load=false
           
        }
        console.log(this.load,"este")
      });
  }
  OnEstadoChange(){
   
    this.nivelAcademicoIdFiltro=1
    this.getProgramasFiltro(
      this.nombreFiltro,
      this.nivelAcademicoIdFiltro,
      this.facultadIdFiltro
    );
  }
//addicionar programa 
  addPrograma() {
    // let proceso: Proceso = this.procesoService.getProcesosList().find((item) => item.id == environment.creacion);
    this.procesoService.setProceso(new Proceso());
    this.service.selectedItem = 3;
    this.router.navigate(["/menu/crear"]);
    
  }

  
  crearPrograma(procesId: any, programa:any): void {
    this.procesoService.setProceso(procesId);
    this.procesoService.setPrograma(programa);
    this.service.selectedItem = 3;
    console.log('sdsad'+programa)
    this.router.navigate(["/menu/crear"]);
  }

  
  
  
  onChangeFacultad(event: any) {
    
    this.facultadIdFiltro= event.value;
    this.getProgramasFiltro(
      this.nombreFiltro,
      this.nivelAcademicoIdFiltro,
      this.facultadIdFiltro
    );
  }
 
  onKeyUp() {
    
    this.subject.next('');
  }
  selecionado(item:Facultad){
    this.facultadeService.setFacultad(item);
    this.onChangeFacultad(item.id);
  }
ff(idPp:any){
  console.log(idPp)
}
selectProcess(p: Proceso): void {
   let sw =false;
  const dialogRef = this.dialog.open (ConfirmComponent, {
    disableClose: false,
    panelClass: 'confirm-dialog'
  });

  let msn = (p.id==3)? "¿Deséa Editar el Programa?":(p.id==1) ? "¿Deséa Continuar el Proceso de Creacion?":(p.id==4) ?"¿ Deséa Inactivar El Programa?":(p.id==2) ?"¿ Deséa Continuar con el Proceso De Renovación?":"";
  
  dialogRef.componentInstance.confirmMessage = msn;

  dialogRef.afterClosed ().subscribe (result =>
  {
    if (result)
    this.afterComfirm(p);
  });

  
  }
  afterComfirm(p: Proceso){
    this.procesoService.setProceso(p);
    if (p.id == 1) {
      this.crearPrograma(p, this.denominacionSelected.programa)
    }
    if (p.id == 4) {
      this.inactivacion.inactivacion(this.denominacionSelected.programa.id).subscribe(
        c => {
          console.log('INACTIVO')

          this.router.navigate(['menu']);
             
   
        }
      )

    }
    if (p.id == 3) {
    
         this.edicionOne.edicion1( this.programaSelected,p.id).subscribe(
          resp=>{
            console.log(resp['data'])
            this.edicionDenominacion=resp['data']
         
            
          }
         )
         
          this.crearPrograma(p, this.denominacionSelected.programa);
         
    }
    if(p.id == 2){
          console.log('proceso=' + p.id, this.programaSelected);
          this.crearPrograma(p, this.denominacionSelected.programa);
     
      
    } 
  }


}



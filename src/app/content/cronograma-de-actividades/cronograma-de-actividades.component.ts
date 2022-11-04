import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { forkJoin, Subject, debounceTime } from 'rxjs';
import { Cronograma } from 'src/app/core/models/cronograma/cronograma';
import { Denominacion } from 'src/app/core/models/denominacion/denominacion';
import { ProcesoDenominacion } from 'src/app/core/models/denominacion/procesoDenomiacion';
import { Facultad } from 'src/app/core/models/facultad/facultad';
import { Programa } from 'src/app/core/models/form/formulario';
import { NivelAcademicoPrg } from 'src/app/core/models/nivelAcademicoPrg/nivelAcademicoPrg';
import { Proceso } from 'src/app/core/models/proceso/proceso';
import { CronogramaServicesService } from 'src/app/core/services/creacionCronograma/cronogramaServices.service';
import { DenominacionService } from 'src/app/core/services/denominacion/denominacion.service';
import { DenominacionesProgramaService } from 'src/app/core/services/denominacionesPrograma/denominacionesPrograma.service';
import { DepartamentosService } from 'src/app/core/services/departamento/departamentos.service';
import { FacultadService } from 'src/app/core/services/facultad/facultad.service';
import { InicioProgramaService } from 'src/app/core/services/inicio-programa/inicio-programa.service';
import { CronoProgramaSrvService } from 'src/app/core/services/listarCronograma/cronoProgramaSrv.service';
import { NivelAcademicoPrgService } from 'src/app/core/services/nivelAcademicoPrg/nivelAcademicoPrg.service';
import { PaisesService } from 'src/app/core/services/pais/paises.service';
import { ProcesoService } from 'src/app/core/services/proceso/proceso.service';
import { ProgramasService } from 'src/app/core/services/programa/programas.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-cronograma-de-actividades',
  templateUrl: './cronograma-de-actividades.component.html',
  styleUrls: ['./cronograma-de-actividades.component.scss']
})
export class CronogramaDeActividadesComponent implements OnInit {
  @Input() cronograma!: Cronograma;
  proId: any;
  idDenominacion: any;
  mostrar: boolean;
  public idCronograma: number;
  public idPrograma: any;
  lon: any;
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

  page_size?: number = 3;
  page_number?: number = 1;

  facultades: Facultad[];
  nivelesAcPrg: NivelAcademicoPrg[];
  programas: Programa[];
  procesos: Proceso[];
  nombreFiltro: string = null;
  nivelAcademicoIdFiltro: number = 0;
  facultadIdFiltro: number = null;
  subject: Subject<any> = new Subject();
  denominacionSelected: Denominacion;
  programaSelected: number = null;
  programaCronograma: ProcesoDenominacion;
  denominacion?: any;
  responsiveOptions: any;
  cronoList: any;
  denoPrograma: any;
  idCrono: any;
show:boolean=false;
  constructor(private dialogService: MatDialog,
    private facultadeService: FacultadService,
    private programaService: ProgramasService,
    private nivelAcademicoPrgService: NivelAcademicoPrgService,
    private procesoService: ProcesoService,
    private denominacionService: DenominacionService,
    public service: InicioProgramaService,
    private paisesService: PaisesService,
    private depaService: DepartamentosService,
    private cronoDenomicion: DenominacionesProgramaService,
    private getListCronograma: CronogramaServicesService,
    private cronoProgramaSrv: CronoProgramaSrvService


  ) { }

  onChangeNombre(nombre: string): void {
    this.nombreFiltro = nombre;
    this.nivelAcademicoIdFiltro = 1;
    this.getProgramasFiltro(
      this.nombreFiltro,
      this.nivelAcademicoIdFiltro,
      this.facultadIdFiltro
    );
  }

  ngOnInit(): void {

    //resolucion



    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];

    //Obtener informacion
    this.getInfo();

    this.subject.pipe(debounceTime(600)).subscribe(() => {
      this.getProgramasFiltro(
        this.nombreFiltro,
        this.nivelAcademicoIdFiltro,
        this.facultadIdFiltro
      );
    });
    this.nivelAcademicoIdFiltro = 1;
  }

  openAddcion(item) {
    console.log(item);
    const dialogRef = this.dialogService.open(ModalComponent,
      {
        data: {
          crono: this.programaCronograma, denominacion: item,
          idCronograma: 0,
        },
        width: '6000px',
      });
    console.log(this.programaCronograma, 'ese')


    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }

  openCodCrono(item, item2) {
    console.log(item);
    const dialogRef = this.dialogService.open(ModalComponent,
      {
        data: {
          crono: this.programaCronograma, denominacion: item,
          idCronograma: item2
        },
        width: '6000px',
      });
    console.log(this.programaCronograma, 'ese')


    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }

  OnchangeIdProCro(campo: any) {
    this.idPrograma = campo
    console.log(this.idPrograma)

  }


 
  onChangeIdCrn(campo: any) {
    this.idCronograma = campo
    console.log(this.idCronograma + ' este es el id')
  }

  OnChangeNivelAcedemico(event: any) {
    this.nivelAcademicoIdFiltro = 1;
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
        this.facultadIdFiltro, "true"
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

    this.nivelAcademicoIdFiltro = 1;
    this.denominacionSelected = null;

    this.cronoProgramaSrv.getCronoPro(nombre, nivelFormacionId, facultadId, "true")
      .subscribe((response) => {
        this.programas = response['data'];
        console.log( this.programas['cronogramas']);
      });


  }
  //addicionar programa 
  getCard(campo: any) {
    this.denominacion = campo
    this.lon = this.denominacion.length
    this.cronoList = campo[0]

    console.log(this.denominacion)
  }
  onChangeCarouse(campo: any) {

    console.log(campo + 'cro')
    this.mostrar = false;

  }

  crearPrograma(p: any): void {
    this.programaService.setPrograma(p)

  }

  cargarCronograma(event: any) {
   
      console.log(this.denominacionSelected)
    
  }

  onChangeFacultad(event: any) {
    this.facultadIdFiltro = event.value;
    this.getProgramasFiltro(
      this.nombreFiltro,
      this.nivelAcademicoIdFiltro,
      this.facultadIdFiltro
    );
  }

  onKeyUp() {
    this.subject.next('');
  }
  selecionado(item: Facultad) {
    this.facultadeService.setFacultad(item);
    this.onChangeFacultad(item.id);
  }
  ff(idPp: any) {
    console.log(idPp)
  }

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
    
  }


  pageSizeOptions = [3, 5, 10, 25, 100]

  public getKeyByPosition(obj: any, position = 0): any {
    return Object.keys(obj)[position];
  }

}



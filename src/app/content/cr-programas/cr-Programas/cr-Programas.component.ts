import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { FacultadService } from 'src/app/core/services/facultad/facultad.service';
import { ModalidadService } from 'src/app/core/services/modalidad/modalidad.service';
import { NivelesAcademicoService } from 'src/app/services/nivelAcademico/nivelesAcademico.service';
import { NivelAcademicoPrgService } from 'src/app/core/services/nivelAcademicoPrg/nivelAcademicoPrg.service';
import { NivelAcademicoPrg } from 'src/app/core/models/nivelAcademicoPrg/nivelAcademicoPrg';
import { Pais } from 'src/app/core/models/pais/pais';
import { Departamento } from 'src/app/core/models/departamento/departamento';
import { NivelesAcademico } from 'src/app/services/nivelAcademico/nivelesAcademico';
import { Modalidad } from 'src/app/core/models/modalidad/modalidad';
import { Facultad } from 'src/app/core/models/facultad/facultad';
import { TipoPrograma } from 'src/app/core/models/tipoPrograma/tipoPrograma';
import { Denominacion } from 'src/app/core/models/denominacion/denominacion';
import { Proceso } from 'src/app/core/models/proceso/proceso';
import { Formulario } from 'src/app/core/models/form/formulario';
import { forkJoin } from 'rxjs';
import { Message } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { InicioProgramaService } from 'src/app/core/services/inicio-programa/inicio-programa.service';
import { ProcesoService } from 'src/app/core/services/proceso/proceso.service';
import { ConfirmationService } from 'primeng/api';
import { AdmisionPrgService } from 'src/app/core/services/admisionPrg/admisionPrg.service';
import { JornadaOfreService } from 'src/app/core/services/jornadaOfre/jornadaOfre.service';
import { AdmisionPrg } from 'src/app/core/models/admisionProgr/admisionPrg';
import { JornadaOfre } from 'src/app/core/models/jornadaOfre/jornadaOfre';
import { CampoAmpService } from 'src/app/core/services/campoAmp/campoAmp.service';
import { Campos } from 'src/app/core/models/campoAmp/Campos';
import { NivelFormacionService } from 'src/app/core/services/formacion/nivelFormacion.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalidadTipoComponent } from '../../modalidadTipo/modalidadTipo/modalidadTipo.component';
import { CiudadesService } from 'src/app/core/services/ciudad/ciudad.service';
import { Ciudad } from 'src/app/core/models/ciudad/ciudad';




@Component({
  selector: 'app-cr-Programas',
  templateUrl: './cr-Programas.component.html',
  styleUrls: ['./cr-Programas.component.scss'],
  providers: [ConfirmationService]
})
export class CrProgramasComponent implements OnInit {



  msgs: Message[] = [];

  position: string;
  private _admisionPrg: AdmisionPrg[] = []
  private _jornadaOfre: JornadaOfre[] = []
  campoAmplio: any
  obligatorios: number;
  electivos: number;
  result: number;
  procesosToShow: Proceso[];
  showProcesosBox: boolean = true;
  procesoPrograma: Proceso;
  procesos: Proceso[];
  formulario: any;
  formulaCreacion: Formulario[];
  proId: any;
  denominacionSelected: Denominacion;
  facult: Facultad[];
  depa: Departamento[];
  paises: Pais[];
  nivelesAcPr: NivelAcademicoPrg[];
  nivelesAcade: any;
  modalidades: Modalidad[];
  tipoPro: TipoPrograma[];
  denominacion: Denominacion;
  disable: boolean = true;
  //---*ngif
  show1: boolean;
  show2: boolean;
  sw: Boolean = false;
  borrador: Boolean = false;
  readonly: boolean = false;
  proces2: boolean = false;
  show: boolean = false;
  slect: boolean = false;
  showMod: boolean = true;
  hideMod: boolean = false;
  readRenov: boolean = false;
  textarea: boolean = false;
  dateCreacion = false;
  public valiDat: boolean = true;
  programaId: number;
  edicionD: any;
  selected = 'option2';
  duracionesProgramas: AdmisionPrg[];
  campoEspe: any;
  idCampo: number;
  idDeta: number;
  campoDetallado: any;
  idformacion: any;
  nvlFormacion: any;
  ciudades: import("c:/app_clone/proyecto-programas-academicos/src/app/core/models/ciudad/ciudad").Ciudad[];

  get admisionPrg(): AdmisionPrg[] {

    return [...this._admisionPrg];
  }
  get jornadaOfre(): JornadaOfre[] {
    return [...this._jornadaOfre];
  }


  constructor(private formBuild: FormBuilder,
    private facultadeService: FacultadService,
    private nivelAcademicoPr: NivelAcademicoPrgService,
    private nivelesAcadem: NivelesAcademicoService,
    private modalidadService: ModalidadService,
    private primengConfig: PrimeNGConfig,
    public inicioService: InicioProgramaService,
    private procesoService: ProcesoService,
    private admisionesPrg: AdmisionPrgService,
    private jornadaOfrecim: JornadaOfreService,
    private campoAmpSvc: CampoAmpService,
    private nivelFormacion: NivelFormacionService,
    private ciudadesService:CiudadesService,
    private matDial:MatDialog,
  ) {

  }




  openAddcion() {
   
    const dialogRef = this.matDial.open(ModalidadTipoComponent,
      {
        
        width: '800px',
      });
    


    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }



  ngOnInit() {
    //message
    this.getCiudades();
    this.buildForm();
    this.getCampoAmpo()
    this.duaracionPrograma()
    this.show1 = false
    this.show2 = false
    this.getJornadaOfr();
    this.getAdmisiones();
    this.primengConfig.ripple = true;
    this.programaId = this.procesoService.getPrograma().id
    this.proId = this.procesoService.getProceso().id;
    const observables = forkJoin({
    facultades: this.facultadeService.loadFacultades(),
    nivelAcademicoPr: this.nivelAcademicoPr.cargarNivelesPr(),
    nivelAcademico: this.nivelesAcadem.cargarNivelAcadem(),
    modalidades: this.modalidadService.cargarModalidades()
    });
    observables.subscribe({
      next: (value) => {
        this.setFacultades(value.facultades['data']);
        this.setNivelAcPr(value.nivelAcademicoPr['data']);
        this.setNivelAcademico(value.nivelAcademico['data']);
        this.setModalidades(value.modalidades['data']);

      }
    });
    if (this.proId == 3) {
      this.borrador = true;
    }
  }

  setFacultades(argument: Array<any>) {
    this.facult = argument;
    console.log(this.facult)
  }
  setDepartamentos(de: []) {
    this.depa = de
  }
  setPaises(pa = []) {
    this.paises = pa
  }

  setNivelAcPr(niv = []) {
    this.nivelesAcPr = niv
  }
  setNivelAcademico(niva = []) {
    this.nivelesAcade = niva
  }
  setModalidades(mod = []) {
    this.modalidades = mod;
  }
  setTipoPrograma(tip = []) {
    this.tipoPro = tip;
  }

  getCampoAmpo() {
    this.campoAmpSvc.getCampoAmp().subscribe(resp => {
      console.log(resp)
      this.campoAmplio = resp['data']
    })
  }


  ///Formulario
  private buildForm(): void {
    this.result = parseInt(localStorage.getItem('re'))
    console.log(this.result)
    let id = this.procesoService.getProceso().id;

    //creacion 1 sin verificación
    if (id == null && id != 1 && id != 3 && id != 2) {

      this.formulario = this.formBuild.group({
        campoAmp: this.formBuild.group({
          estado: [''],
          id: [''],
          nombreCampoAmplio: [''],
        }),

        campoEspecifico: this.formBuild.group({
          campoAmplio: [''],
          estado: [''],
          id: [''],
          nombreCampoEspecifico: [''],
        }),
        campoDetall: this.formBuild.group({
          campoEspecifico: [''],
          estado: [''],
          id: [''],
          nombreCampoDetallado: [''],
        }),
        codigoRu: [''],
        estado: [''],
        fechaRes: ['',],
        id: [''],
        intExpNorma: [''],

        modalidad: this.formBuild.group({
          id: [''],
          modalidad: this.formBuild.group({
            id: [''],
            nombre: [''],
            estado: [''],
          }),
          tipoPrograma: this.formBuild.group({
            id: [''],
            nombre: ['']
          }),
          idDenominacion: ['']
        }),

        ncreditosElectivos: [''],
        ncreditosObligatorios: [''],
        ndeRes: [''],
        nivelAcademicoPrg: this.formBuild.group({
          id: ['', [Validators.required]],
          nombre: ['', [Validators.required]],
          estado: [''],

        }),
        nnorma: [''],
        normaIntCreacion: [''],
        ntotalCreditos: [''],
        numeroDeEstudientesEnPrimerPeriodo: [''],
        periodicidad: this.formBuild.group({
          id: [''],
          nombreDuracion: [''],
          nombrePeriodicidad: [''],
          cantDuracion: [''],
          estado: [''],
        }),
        porcInclTecno: [''],
        proceso: this.formBuild.group({
          estado: [''],
          id: [''],
          nombre: [''],
        }),
        programa: this.formBuild.group({
          activo: [''],
          facultad: this.formBuild.group({
            codigo: ['', [Validators.required]],
            nombre: ['', [Validators.required]],
          }),
          id: [''],
          nivelAcademico: this.formBuild.group({
            id: ['', [Validators.required]],
            nombre: [''],
            activo: [''],
            formacion: [''],
          }),
          nombre: ['', [Validators.required]],
          programaVigenteId: [''],
        }),
        registroCalificadoUnico: [''],
        resolucion: [''],
        snies: ['',],
        tituloM: ['', [Validators.required]],
        tituloF: ['', [Validators.required]],
        ubicacionOLugarDesarrolloVigenteIes: this.formBuild.group({
          id: ['', [Validators.required]],
          nombre: ['', [Validators.required]],
          ciudCodi: ['', [Validators.required]],
          departamentoId: ['', [Validators.required]],
        }),
        valorMatricula: [''],
        vigLugarDes: [''],
        cupoCohorte: [''],
        justificacion:[''],
        fechaSer: ['', [Validators.required]],

      });
      this.textarea = true;
      this.proces2 = true;
    }


  }






getCiudades(){
  this.ciudadesService.cargarCiudad().subscribe(response => {
    this.ciudades=response['data']
  });
}



onChangeCiudad(event:number){
  const pTemp: Ciudad = this.ciudades.find((p) => p.id == event )!;
  this.formulario.get('ubicacionOLugarDesarrolloVigenteIes').setValue(pTemp)
  console.log(pTemp)
}

  OnCampoEspe(event: any) {
    const pTemp: Campos = this.campoAmplio.find((p) => p.id == event)!;
    this.formulario.get('campoAmp').setValue(pTemp)

    console.log(event)
    this.idCampo = parseInt(event)
    this.campoAmpSvc.getCampoEspe(this.idCampo).subscribe(resp => {
      console.log(resp)
      this.campoEspe = resp['data']
    })
  }

  OnCampodetall(event: any) {
    const pTemp: Campos = this.campoEspe.find((p) => p.id == event)!;
    this.formulario.get('campoEspecifico').setValue(pTemp)
    console.log(event)
    this.idDeta = parseInt(event)
    this.campoAmpSvc.getCampoDeta(this.idDeta).subscribe(resp => {
      console.log(resp)
      this.campoDetallado = resp['data']
    })
  }
  //la facultad va dentro del programa

  getAdmisiones(): void {
    this.admisionesPrg.admisionPrograma().subscribe(
      admisionesPrg => this._admisionPrg = admisionesPrg
    )
  }
  duaracionPrograma() {
    this.admisionesPrg.duracionPrograma().subscribe(
      resp => {
        this.duracionesProgramas = resp
      }
    )
  }

  getJornadaOfr(): void {
    this.jornadaOfrecim.jornadaOfrec().subscribe(
      jornadaofrec => this._jornadaOfre = jornadaofrec
    )
  }


  hide() {
    this.msgs = [];
  }


  //onchangeobligatorio

  onChangeObligatorio(event: any) {
    this.obligatorios = parseInt(event)
    this.result = this.electivos + this.obligatorios
    this.formulario.get('ntotalCreditos').setValue(this.result);
  }
  //onchange Electivos
  onChangeElectivo(event: any) {
    this.electivos = parseInt(event)
    this.result = this.electivos + this.obligatorios

    this.formulario.get('ntotalCreditos').setValue(this.result);
  }


  //onChangeJornada
  onChangeJornada(event: any): void {
    const pTemp: JornadaOfre = this.jornadaOfre.find((p) => p.id == event)!;
    this.formulario.get('jornadaDeOfrecimiento').setValue(pTemp)
  }
  //onChangeAdmision
  onChangeAdmision(event: any): void {
    const pTemp: AdmisionPrg = this.admisionPrg.find((p) => p.id == event)!;
    this.formulario.get('periodAdmision').setValue(pTemp)
  }


  //onchange nivel academicoPrg
  onChangeNivelAcademicoPrg(event: any): void {
    const pTemp: NivelAcademicoPrg = this.nivelesAcPr.find((p) => p.id == event)!;
    this.formulario.get('nivelAcademicoPrg').setValue(pTemp);
    this.idformacion = event
    console.log(event)
    this.nivelFormacion.cargarNivelFormacion(event).subscribe((response) => {
      // this.setNivelAcademico(response.data);
      this.nvlFormacion = response.data;
      console.log(this.nvlFormacion)
    })


  }
  //onchange nivel academico
  onChangeNivelAcademico(event: any): void {


    const pTemp: NivelesAcademico = this.nivelesAcade.find((p) => p.id == event)!;
    this.formulario.get('programa.nivelAcademico').setValue(pTemp)


  }

  //onchange campo detallado
  onChangeDetall(event: any): void {
  const pTemp: Campos = this.campoDetallado.find((p) => p.id == event)!;
  this.formulario.get('campoDetall').setValue(pTemp)
  }
  //facultad
  onChangeFacultad(event: any): void {
    const pTemp: Facultad = this.facult.find((p) => p.id == event)!;
    this.formulario.get('programa.facultad').setValue(pTemp)
  }
  



  //prueba
  invalid(campo: AbstractControl | null): boolean {
    return campo?.touched && campo?.invalid;
  }

  valid(campo: AbstractControl | null): boolean {
    return campo?.touched && campo?.valid;
  }
  valideteField(campo: string) {
    if (this.valiDat == false) {
      return this.formulario.get(campo).invalid;

    }

    return this.formulario.get();

  }


  f(campo: string) {
    let id = this.procesoService.getProceso().id;
    if (this.valiDat == false) {
      return this.formulario.get(campo);

    }

    return this.formulario.get();

  }








  onSubmit() {


    console.log(this.formulario.value)


  }

}







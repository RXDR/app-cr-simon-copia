



export interface Denominacion {
  id_sede:                             number;
  campoAmp:                            Campos;
  campoDetall:                         Campos;
  campoEspecifico:                     Campos;
  codigoRu:                            number;
  cupoCohorte:                         number;
  estado:                              boolean;
  fechaSer:                            Date;
  fechaRes:                            Date;
  id:                                  number;
  intExpNorma:                         number;
  modalidad:                           ModalidadAr;
  periodicidad:                       Periodicidad
  ncreditosElectivos:                  number;
  ncreditosObligatorios:               number;
  ndeRes:                              number;
  nivelAcademicoPrg:                   NivelAcademicoPrg;
  nnorma:                              number;
  normaIntCreacion:                    string;
  ntotalCreditos:                      number;
  numeroDeEstudientesEnPrimerPeriodo:  number;
  porcInclTecno:                       number;
  proceso:                             Proceso;
  programa:                            Programa;
  registroCalificadoUnico:             number;
  resolucion:                          string;
  snies:                               string;
  tituloF:                             string;
  tituloM:                             string;
  valorMatricula:                      number;
  justificacion:                       string;
}


export interface ModalidadAr {
  id:             string;
  modalidad:      Modalidad;
  tipoPrograma:   TipoPrograma;
  idDenominacion: number;
}

export interface Modalidad {
  id:     number;
  nombre: string;
  estado: boolean;
}

export interface TipoPrograma {
  id:     number;
  nombre: string;
}

export interface Municipio {
  ciudCodi:       number;
  departamentoId: number;
  id:             number;
  nombre:         string;
}



export interface Programa {
  activo:            boolean;
  facultad:          Facultad;
  id:                number;
  nivelAcademico:    NivelAcademico;
  nombre:            string;
  programaVigenteId: number;
}

export interface Facultad {
  codigo: number;
  nombre: string;
}

export interface NivelAcademico {
  activo:    boolean;
  formacion: Modalidad;
  id:        number;
  nombre:    string;
}


export interface Campos {
  campoEspecifico:      CampoEspecifico;
  estado:               boolean;
  id:                   number;
  nombreCampoDetallado: string;
}

export interface CampoEspecifico {
  campoAmplio:           CampoAmplio;
  estado:                boolean;
  id:                    number;
  nombreCampoEspecifico: string;
}

export interface CampoAmplio {
  estado:            boolean;
  id:                number;
  nombreCampoAmplio: string;
}
export class NivelAcademicoPrg {
  id:number;
  nombre:String;
}
export interface Periodicidad {
  id:number;
  nombreDuracion:string;
  nombrePeriodicidad:string;
  cantDuracion:number;
  estado:boolean;

}
export class Proceso {
  id: number;
  nombre: String;
  estado:boolean;
}
export interface Formulario {
    campoAmp:                            string;
    campoDetall:                         string;
    campoEspecifico:                     string;
    codigoRu:                            number;
    cupoCohorte:                         number;
    denominacionVigenteId:               number;
    departamento:                        Departamento;
    duracion:                            number;
    estado:                              boolean;
    fechaSer:                            Date;
    fechaRes:                            Date;
    id:                                  number;
    intExpNorma:                         number;
    jornadaDeOfrecimiento:               string;
    modalidad:                           Modalidad;
    municipio:                           Municipio;
    ncreditosElectivos:                  number;
    ncreditosObligatorios:               number;
    ndeRes:                              number;
    nivelAcademicoPrg:                   Modalidad;
    nnorma:                              number;
    normaIntCreacion:                    string;
    ntotalCreditos:                      number;
    numeroDeEstudientesEnPrimerPeriodo:  number;
    pais:                                Pais;
    periodAdmision:                      number;
    porcInclTecno:                       number;
    proceso:                             Modalidad;
    programa:                            Programa;
    registroCalificadoUnico:             number;
    resolucion:                          string;
    snies:                               string;
    textareaObserv:                      string;
    tipoPrograma:                        TipoPrograma;
    tituloF:                             string;
    tituloM:                             string;
    ubicacionOLugarDesarrolloVigenteIes: Municipio;
    valorMatricula:                      number;
    vigLugarDes:                         number;
}

export interface Departamento {
    depaCodi: number;
    id:       number;
    nombre:   string;
}

export interface Modalidad {
    estado: boolean;
    id:     number;
    nombre: string;
}

export interface Municipio {
    ciudCodi:       number;
    departamentoId: number;
    id:             number;
    nombre:         string;
}

export interface Pais {
    id:       number;
    nombre:   string;
    paisCodi: number;
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

export interface TipoPrograma {
    id:     number;
    nombre: string;
    estado:boolean;
}

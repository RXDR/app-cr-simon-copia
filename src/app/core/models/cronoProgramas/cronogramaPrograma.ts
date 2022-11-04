export interface CronogramaPrograma {
    programa:    Programa;
    cronogramas: Cronograma[];
}

export interface Cronograma {
    id:               number;
    ciclo:            string;
    fechaEntrega:     Date;
    avances:          string;
    fechaFinal:       Date;
    docenciaServicio: null;
    normaInterna:     null;
    pagoTramite:      null;
    presupuesto:      string;
    observaciones:    string;
    estado:           boolean;
    programa:         Programa;
    detalle:          any[];
}

export interface Programa {
    id:                number;
    nombre:            string;
    nivelAcademico:    NivelAcademico;
    facultad:          Facultad;
    programaVigenteId: null;
    activo:            boolean;
}

export interface Facultad {
    codigo: number;
    nombre: string;
}

export interface NivelAcademico {
    id:        number;
    nombre:    string;
    activo:    boolean;
    formacion: Formacion;
}

export interface Formacion {
    id:     number;
    nombre: string;
    estado: boolean;
}
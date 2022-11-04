export interface Cronograma {
    avances:          string;
    ciclo:            string;
    detalle:          Detalle[];
    docenciaServicio: string;
    estado:           boolean;
    fechaEntrega:     Date;
    fechaFinal:       Date;
    id:               number;
    normaInterna:     string;
    observaciones:    string;
    pagoTramite:      string;
    presupuesto:      string;
    programa:         Programa;
}

export interface Detalle {
    avances:           string;
    cronogramaId:      number;
    dias_notificacion: number;
    fechaEntrega:      Date;
    id:                number;
    nombre:            string;
    notificarA:        number;
}

export interface Programa {
    activo:            boolean;
    codProgramaDb2:    number;
    facultad:          Facultad;
    fechaCambio:       Date;
    id:                number;
    ip:                string;
    nivelAcademico:    NivelAcademico;
    nivelDb2:          number;
    nombre:            string;
    programaVigenteId: number;
    usuario:           string;
}

export interface Facultad {
    codigo: number;
    nombre: string;
}

export interface NivelAcademico {
    activo:      boolean;
    codNivelDb2: number;
    formacion:   Formacion;
    id:          number;
    nombre:      string;
    sedeId:      number;
}

export interface Formacion {
    estado: boolean;
    id:     number;
    nombre: string;
}

export interface Avance{
    idAvance?:string; 
    comentario:string;
    fechaCreacion:string; 
}





export interface MenuItem{
    nombre: string; 
    ruta:string; 
    icon:string; 
    clases?:string; 
}



export interface Facultad {
    id:string; 
    nombre:string; 
}



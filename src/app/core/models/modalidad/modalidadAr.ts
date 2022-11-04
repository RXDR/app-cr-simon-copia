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
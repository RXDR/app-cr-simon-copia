export interface Formacion {
    estado:               boolean;
    id:                   number;
    nivelAcademico:       NivelAcademico;
    nombreNivelFormacion: string;
}

export interface NivelAcademico {
    estado: boolean;
    id:     number;
    nombre: string;
}
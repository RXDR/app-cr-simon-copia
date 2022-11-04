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

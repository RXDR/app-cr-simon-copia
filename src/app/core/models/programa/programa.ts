import { Facultad } from '../facultad/facultad';
import { NivelesAcademico } from './../../../services/nivelAcademico/nivelesAcademico';
export class Programa {
  id: number;
  nombre: string;
  nivelAcademico: NivelesAcademico;
  facultad: Facultad;
}

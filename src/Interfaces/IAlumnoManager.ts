import { IAlumno } from "../Interfaces/IAlumno";
import { IMateria } from "../Interfaces/IMateria";

export interface IAlumnoManager {
    agregarAlumno(alumno: IAlumno): void;
}
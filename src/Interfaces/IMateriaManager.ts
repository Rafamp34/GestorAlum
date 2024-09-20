import { IAlumno } from "../Interfaces/IAlumno";
import { IMateria } from "../Interfaces/IMateria";

export interface IMateriaManager {
    agregarAlumno(alumno: IAlumno): void;
    crearMateria(id: number, nombreAsig: string): void;
}
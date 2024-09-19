import { IAlumno } from "../Interfaces/IAlumno";
import { IMateria } from "../Interfaces/IMateria";

export interface IMateriaManager {
    agregarAlumno(alumno: IAlumno): void;
    obtenerAlumnos(): IAlumno[];
    crearMateria(id: number, nombreAsig: string): void;
    inscribirAlumnoEnMateria(materiaId: number, alumno: IAlumno): void;
    darBajaAlumnoDeMateria(materiaId: number, alumnoId: number): void;
    obtenerMateria(materiaId: number): IMateria | undefined;
}
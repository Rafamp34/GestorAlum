import { Alumno } from "../Alumnos/alumno";
import { IAlumno } from "../Interfaces/IAlumno";
import { IMateria } from "../Interfaces/IMateria";
import { IMateriaManager } from "../Interfaces/IMateriaManager";
import { Materia } from "./materia";

export class MateriaManager implements IMateriaManager{
    private materias: Map<number, Materia>;
    private alumnos: Alumno[] = [];

    constructor() {
        this.materias = new Map<number, Materia>();
    }

    agregarAlumno(alumno: IAlumno): void {
        throw new Error("Method not implemented.");
    }
    obtenerAlumnos(): IAlumno[] {
        throw new Error("Method not implemented.");
    }
    crearMateria(id: number, nombreAsig: string): void {
        throw new Error("Method not implemented.");
    }
    inscribirAlumnoEnMateria(materiaId: number, alumno: IAlumno): void {
        throw new Error("Method not implemented.");
    }
    darBajaAlumnoDeMateria(materiaId: number, alumnoId: number): void {
        throw new Error("Method not implemented.");
    }
    obtenerMateria(materiaId: number): IMateria | undefined {
        throw new Error("Method not implemented.");
    }

    
}














































































































































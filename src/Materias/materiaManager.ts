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
    agregarAlumno(alumno: Alumno): void {
        this.alumnos.push(alumno);
    }
    crearMateria(id: number, nombreAsig: string): void {
        this.materias.set(id, new Materia(id, nombreAsig));
    }
    
    getAlumnos(): Alumno[] {
        return this.alumnos;
    }

    getMateria(): Materia[] {
        return Array.from(this.materias.values());
    }

    
}














































































































































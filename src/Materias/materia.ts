import { Alumno } from "../Alumnos/alumno";
import { IAlumno } from "../Interfaces/IAlumno";
import { IMateria } from "../Interfaces/IMateria";

export class Materia implements IMateria {
    private static nextId: number = 1;
    private idMateria: number;
    private nombreAsig: string;
    private alumnos: Map<number, Alumno>;

    constructor(nombreAsig: string) {
        this.idMateria = Materia.nextId++;
        this.nombreAsig = nombreAsig;
        this.alumnos = new Map<number, Alumno>();
    }

    public getIdMateria(): number {
        return this.idMateria;
    }

    getNombreAsig(): string {
        return this.nombreAsig;
    }

    getAlumnos(): Map<number, Alumno> {
        return this.alumnos;
    }
}























































































































































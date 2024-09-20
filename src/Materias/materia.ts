import { Alumno } from "../Alumnos/alumno";
import { IAlumno } from "../Interfaces/IAlumno";
import { IMateria } from "../Interfaces/IMateria";


export class Materia implements IMateria {
    private id: number;
    private nombreAsig: string;
    private alumnos: Map<number, Alumno>;

    constructor(id: number, nombreAsig: string) {
        this.id = id;
        this.nombreAsig = nombreAsig;
        this.alumnos = new Map<number, Alumno>();
    }

    public getId(): number {
        return this.id;
    }

    getNombreAsig(): string {
        return this.nombreAsig;
    }

    getAlumnos(): Map<number, Alumno> {
        return this.alumnos;
    }
}
























































































































































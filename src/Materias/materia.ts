import { Alumno } from "../Alumnos/alumno";
import { IAlumno } from "../Interfaces/IAlumno";
import { IMateria } from "../Interfaces/IMateria";


export class Materia implements IMateria {
    private id: number;
    private nombreAsig: string;
    private alumnos: Map<number, Alumno>;
    private notas: Map<number, number>;

    constructor(id: number, nombreAsig: string) {
        this.id = id;
        this.nombreAsig = nombreAsig;
        this.alumnos = new Map<number, Alumno>();
        this.notas = new Map<number, number>();
    }

    inscribirAlumno(alumno: IAlumno): void {
        throw new Error("Method not implemented.");
    }
    darBajaAlumno(alumnoId: number): void {
        throw new Error("Method not implemented.");
    }
    asignarNota(alumnoId: number, nota: number): void {
        throw new Error("Method not implemented.");
    }
    obtenerNotas(): Map<IAlumno, number> {
        throw new Error("Method not implemented.");
    }
    getInfo(): string {
        throw new Error("Method not implemented.");
    }
}
























































































































































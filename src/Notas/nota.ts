import { Alumno } from "../Alumnos/alumno";
import { INota } from "../Interfaces/INota";
import { Materia } from "../Materias/materia";

export class Nota implements INota{
    private idNota: number;
    private nota: number;
    private idAlumnos: number;
    private idMateria: number;

    private static currentId: number = 0;

    constructor(nota: number, idAlumnos: number, idMateria: number) {
        this.idNota = Nota.currentId++;
        this.nota = nota;
        this.idAlumnos = idAlumnos;
        this.idMateria = idMateria;
    }

    getIdNota(): number {
        return this.idNota;
    }

    getNota(): number {
        return this.nota;
    }

    getIdAlumnos(): number {
        return this.idAlumnos;
    }

    getIdMateria(): number {
        return this.idMateria
    }
}
import { Alumno } from "../Alumnos/alumno";
import { INota } from "../Interfaces/INota";
import { Materia } from "../Materias/materia";

export class Nota implements INota{
    private idNota: number;
    private nota: number;
    private idAlumnos: number;
    private idMateria: number;
    private alumno: Alumno[] = [];
    private materia: Materia[] = [];

    constructor(idNota: number, nota: number, idAlumnos: Alumno, idMateria: number) {
        this.idNota= idNota;
        this.nota= nota;
        this.idAlumnos= idAlumnos.getId();
        this.idMateria= idMateria.getId();
    }

}
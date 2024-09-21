import { Alumno } from "../Alumnos/alumno";

export interface IAlumnoManager {
    agregarAlumno(alumno: Alumno): void;
    borrarAlumno(id: number): void;
    getAlumnos(): Alumno[];
    getAlumnoById(id: number): Alumno;
}
import { Alumno } from "../Alumnos/alumno";

export interface IMateria {
    getIdMateria(): number;
    getNombreAsig(): string;
    getAlumnos(): Map<number, Alumno>;
}
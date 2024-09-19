import { IAlumno } from "../Interfaces/IAlumno";

export interface IMateria {
    inscribirAlumno(alumno: IAlumno): void;
    darBajaAlumno(alumnoId: number): void;
    asignarNota(alumnoId: number, nota: number): void;
    obtenerNotas(): Map<IAlumno, number>;
    getInfo(): string;
}
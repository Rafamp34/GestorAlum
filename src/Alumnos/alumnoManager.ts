import { Alumno } from "../Alumnos/alumno";
import { IAlumnoManager } from "../Interfaces/IAlumnoManager";

export class AlumnoManager implements IAlumnoManager{
    private alumnos: Alumno[] = [];

    constructor() {
    }

    agregarAlumno(alumno: Alumno): void {
        this.alumnos.push(alumno);
    }

    borrarAlumno(id: number): void{
        this.alumnos = this.alumnos.filter(alumno => alumno.getIdAlumno() !== id);
    }
    
    getAlumnos(): Alumno[] {
        return this.alumnos;
    }

    getAlumnoById(id: number): Alumno {
        const alumno = this.alumnos.find(alumno => alumno.getIdAlumno() === id);
        if (!alumno) {
            throw new Error(`Alumno with id ${id} not found`);
        }
        return alumno;
    }
    
}
import { Alumno } from "../Alumnos/alumno";
import { IAlumno } from "../Interfaces/IAlumno";
import { IMateria } from "../Interfaces/IMateria";
import { IAlumnoManager } from "../Interfaces/IAlumnoManager";

export class alumnoManager implements IAlumnoManager{
    private alumnos: Alumno[]: [];

    constructor(alumnos: Alumno[]){
        this.alumnos= alumnos;
    }

    agregarAlumno(alumno: Alumno): void {
        this.alumnos.push(alumno);
    }

    borrarAlumno(alumno: Alumno): void{
        this.alumnos.filter(alumno => alumno === alumno);
        this.alumnos.
    }
    
    getAlumnos(): Alumno[] {
        return this.alumnos;
    }

    
}
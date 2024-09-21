import { IAlumno } from "../Interfaces/IAlumno";

export class Alumno implements IAlumno {
    private static currentId: number = 0;
    private idAlumno: number;
    private nombreAlum: string;
    private apellidoAlum: string;
    private curso: string;

    constructor(nombreAlum: string, apellidoAlum: string, curso: string) {
        this.idAlumno = ++Alumno.currentId;
        this.nombreAlum = nombreAlum;
        this.apellidoAlum = apellidoAlum;
        this.curso = curso;
    }

    public getIdAlumno(): number {
        return this.idAlumno;
    }

    public getNombre(): string {
        return this.nombreAlum;
    }

    public getApellido(): string {
        return this.apellidoAlum;
    }

    public getCurso(): string {
        return this.curso;
    }

    public getNombreCompleto(): string {
        return `${this.nombreAlum} ${this.apellidoAlum}`;
    }
}
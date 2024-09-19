import { IAlumno } from "../Interfaces/IAlumno";

export class Alumno implements  IAlumno{
    private id: number;
    private nombreAlum: string;
    private apellidoAlum: string;

    constructor(id: number, nombreAlum: string, apellidoAlum: string) {
        this.id = id;
        this.nombreAlum = nombreAlum;
        this.apellidoAlum = apellidoAlum;
    }

    public getId(): number {
        return this.id;
    }

    public getNombreCompleto(): string {
        return `${this.nombreAlum} ${this.apellidoAlum}`;
    }
}
import { INotaManager } from "../Interfaces/INotaManager";
import { Nota } from "./nota";
import { Alumno } from "../Alumnos/alumno";
import { Materia } from "../Materias/materia";

export class NotaManager implements INotaManager{
    private notas: Nota[] = [];

    private static currentId: number = 0;

    constructor() {
        this.notas = [];
    }
    
    agregarNota(nota: number, idAlumnos: number, idMateria: number): void {
        const nuevaNota = new Nota(nota, idAlumnos, idMateria);
        this.notas.push(nuevaNota);
    }

    borrarNota(id: number): void {
        this.notas = this.notas.filter(nota => nota.getIdNota() !== id);
    }

    getNotas(): Nota[] {
        return this.notas;
    }
}
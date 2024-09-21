import { Alumno } from "../Alumnos/alumno";
import { IMateriaManager } from "../Interfaces/IMateriaManager";
import { Materia } from "./materia";

export class MateriaManager implements IMateriaManager{
    private materias: Map<number, Materia>;
    private alumnos: Alumno[] = [];

    constructor() {
        this.materias = new Map<number, Materia>();
    }

    crearMateria(nombreAsig: string): void {
        const id = this.materias.size + 1;
        this.materias.set(id, new Materia(nombreAsig));
    }
    
    borrarMateria(id: number): void{
        this.materias.delete(id);
    }

    getMateria(): Materia[] {
        return Array.from(this.materias.values());
    }

    getMateriaById(id: number): Materia {
        const materia = this.materias.get(id);
        if (!materia) {
            throw new Error(`Materia with id ${id} not found`);
        }
        return materia;
    }
}














































































































































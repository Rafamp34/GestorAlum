import { IMateriaManager } from "../Interfaces/IMateriaManager";
import { Materia } from "./materia";

export class MateriaManager implements IMateriaManager{
    private materias: Materia[] = [];

    constructor() {
        this.materias = [];
    }

    crearMateria(materia: Materia): void {
        this.materias.push(materia);
    }

    borrarMateria(id: number): void{
        this.materias = this.materias.filter(materias => materias.getIdMateria() !== id);
    }

    getMateria(): Materia[] {
        return this.materias;
    }

    getMateriaById(id: number): Materia {
        const materia = this.materias.find(materias => materias.getIdMateria() === id);
        if (!materia) {
            throw new Error(`Materia with id ${id} not found`);
        }
        return materia;
    }
}














































































































































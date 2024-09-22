import { Materia } from "../Materias/materia";

export interface IMateriaManager {
    crearMateria(materia: Materia): void;
    borrarMateria(id: number): void;
    getMateria(): Materia[];
    getMateriaById(id: number): Materia;
}
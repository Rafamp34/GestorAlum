import { Materia } from "../Materias/materia";

export interface IMateriaManager {
    crearMateria(nombreAsig: string): void;
    borrarMateria(id: number): void;
    getMateria(): Materia[];
    getMateriaById(id: number): Materia;
}
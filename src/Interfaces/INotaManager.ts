import { Nota } from "../Notas/nota";

export interface INotaManager {
    agregarNota(nota: number, idAlumnos: number, idMateria: number): void;
    borrarNota(id: number): void;
    getNotas(): Nota[];
}
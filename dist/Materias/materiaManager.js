"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaManager = void 0;
const materia_1 = require("./materia");
class MateriaManager {
    constructor() {
        this.alumnos = [];
        this.materias = new Map();
    }
    crearMateria(nombreAsig) {
        const id = this.materias.size + 1;
        this.materias.set(id, new materia_1.Materia(nombreAsig));
    }
    borrarMateria(id) {
        this.materias.delete(id);
    }
    getMateria() {
        return Array.from(this.materias.values());
    }
    getMateriaById(id) {
        const materia = this.materias.get(id);
        if (!materia) {
            throw new Error(`Materia with id ${id} not found`);
        }
        return materia;
    }
}
exports.MateriaManager = MateriaManager;
//# sourceMappingURL=materiaManager.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaManager = void 0;
class MateriaManager {
    constructor() {
        this.materias = [];
        this.alumnos = [];
        this.materias = [];
    }
    crearMateria(materia) {
        this.materias.push(materia);
    }
    borrarMateria(id) {
        this.materias = this.materias.filter(materias => materias.getIdMateria() !== id);
    }
    getMateria() {
        return this.materias;
    }
    getMateriaById(id) {
        const materia = this.materias.find(materias => materias.getIdMateria() === id);
        if (!materia) {
            throw new Error(`Materia with id ${id} not found`);
        }
        return materia;
    }
}
exports.MateriaManager = MateriaManager;
//# sourceMappingURL=materiaManager.js.map
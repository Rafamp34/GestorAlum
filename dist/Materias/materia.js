"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Materia = void 0;
class Materia {
    constructor(nombreAsig) {
        this.idMateria = Materia.nextId++;
        this.nombreAsig = nombreAsig;
        this.alumnos = new Map();
    }
    getIdMateria() {
        return this.idMateria;
    }
    getNombreAsig() {
        return this.nombreAsig;
    }
    getAlumnos() {
        return this.alumnos;
    }
}
exports.Materia = Materia;
Materia.nextId = 1;
//# sourceMappingURL=materia.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaManager = void 0;
const materia_1 = require("./materia");
class MateriaManager {
    constructor() {
        this.alumnos = [];
        this.materias = new Map();
    }
    agregarAlumno(alumno) {
        this.alumnos.push(alumno);
    }
    crearMateria(id, nombreAsig) {
        this.materias.set(id, new materia_1.Materia(id, nombreAsig));
    }
    getAlumnos() {
        return this.alumnos;
    }
    getMateria() {
        return Array.from(this.materias.values());
    }
}
exports.MateriaManager = MateriaManager;
//# sourceMappingURL=materiaManager.js.map
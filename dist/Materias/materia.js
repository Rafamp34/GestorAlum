"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Materia = void 0;
class Materia {
    constructor(id, nombreAsig) {
        this.id = id;
        this.nombreAsig = nombreAsig;
        this.alumnos = new Map();
        this.notas = new Map();
    }
    inscribirAlumno(alumno) {
        throw new Error("Method not implemented.");
    }
    darBajaAlumno(alumnoId) {
        throw new Error("Method not implemented.");
    }
    asignarNota(alumnoId, nota) {
        throw new Error("Method not implemented.");
    }
    obtenerNotas() {
        throw new Error("Method not implemented.");
    }
    getInfo() {
        throw new Error("Method not implemented.");
    }
}
exports.Materia = Materia;
//# sourceMappingURL=materia.js.map
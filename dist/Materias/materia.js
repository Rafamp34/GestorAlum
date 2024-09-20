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
    getId() {
        return this.id;
    }
    getNombreAsig() {
        return this.nombreAsig;
    }
    getAlumnos() {
        return this.alumnos;
    }
    getNotas() {
        return this.notas;
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
}
exports.Materia = Materia;
//# sourceMappingURL=materia.js.map
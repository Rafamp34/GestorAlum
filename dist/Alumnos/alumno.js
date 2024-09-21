"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumno = void 0;
class Alumno {
    constructor(nombreAlum, apellidoAlum, curso) {
        this.idAlumno = ++Alumno.currentId;
        this.nombreAlum = nombreAlum;
        this.apellidoAlum = apellidoAlum;
        this.curso = curso;
    }
    getIdAlumno() {
        return this.idAlumno;
    }
    getNombre() {
        return this.nombreAlum;
    }
    getApellido() {
        return this.apellidoAlum;
    }
    getCurso() {
        return this.curso;
    }
    getNombreCompleto() {
        return `${this.nombreAlum} ${this.apellidoAlum}`;
    }
}
exports.Alumno = Alumno;
Alumno.currentId = 0;
//# sourceMappingURL=alumno.js.map
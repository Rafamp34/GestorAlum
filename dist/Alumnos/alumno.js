"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumno = void 0;
class Alumno {
    constructor(id, nombreAlum, apellidoAlum) {
        this.id = id;
        this.nombreAlum = nombreAlum;
        this.apellidoAlum = apellidoAlum;
    }
    getId() {
        return this.id;
    }
    getNombreCompleto() {
        return `${this.nombreAlum} ${this.apellidoAlum}`;
    }
}
exports.Alumno = Alumno;
//# sourceMappingURL=alumno.js.map
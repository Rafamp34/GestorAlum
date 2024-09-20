"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline-sync"));
const alumno_1 = require("./Alumnos/alumno");
const materiaManager_1 = require("./Materias/materiaManager");
const materiaManager = new materiaManager_1.MateriaManager();
materiaManager.agregarAlumno(new alumno_1.Alumno(1, 'Juan', 'Pérez'));
materiaManager.agregarAlumno(new alumno_1.Alumno(2, 'Ana', 'García'));
function showMenu() {
    console.log("\n--- Menú del Gestor de Alumnos ---");
    console.log("1. Crear Materia");
    console.log("2. Inscribir Alumno en Materia");
    console.log("3. Dar Baja a Alumno de Materia");
    console.log("4. Asignar Nota a Alumno");
    console.log("5. Mostrar Información de Materia");
    console.log("6. Mostrar Información de Alumnos");
    console.log("7. Salir");
    const opcion = readline.question('Por favor, elige una opción: ');
    handleMenuSelection(opcion);
}
function handleMenuSelection(option) {
    switch (option) {
        case '1':
            crearMateria();
            break;
        case '2':
            inscribirAlumnoEnMateria();
            break;
        case '3':
            darBajaAlumnoDeMateria();
            break;
        case '4':
            asignarNotaAAlumno();
            break;
        case '5':
            mostrarInformacionMateria();
            break;
        case '6':
            mostrarInformacionAlumnos();
            break;
        case '7':
            break;
        default:
            console.log("Opción no válida.");
            showMenu();
            break;
    }
}
showMenu();
function crearMateria() {
    throw new Error('Function not implemented.');
}
function inscribirAlumnoEnMateria() {
    throw new Error('Function not implemented.');
}
function darBajaAlumnoDeMateria() {
    throw new Error('Function not implemented.');
}
function asignarNotaAAlumno() {
    throw new Error('Function not implemented.');
}
function mostrarInformacionMateria() {
    throw new Error('Function not implemented.');
}
function mostrarInformacionAlumnos() {
    throw new Error('Function not implemented.');
}
//# sourceMappingURL=index.js.map
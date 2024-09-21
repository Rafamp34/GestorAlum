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
const alumnoManager_1 = require("./Alumnos/alumnoManager");
const notaManager_1 = require("./Notas/notaManager");
const materiaManager = new materiaManager_1.MateriaManager();
const alumnoManager = new alumnoManager_1.AlumnoManager();
const notaManager = new notaManager_1.NotaManager();
alumnoManager.agregarAlumno(new alumno_1.Alumno('Juan', 'Pérez', '1ºA'));
alumnoManager.agregarAlumno(new alumno_1.Alumno('Ana', 'García', '2ºA'));
materiaManager.crearMateria('Matemáticas');
materiaManager.crearMateria('Lengua');
notaManager.agregarNota(8, 1, 1);
notaManager.agregarNota(7, 2, 1);
function showMenu() {
    console.log("\n--- Menú del Gestor de Alumnos ---");
    console.log("1. Crear Materia");
    console.log("2. Inscribir Alumno en Materia");
    console.log("3. Dar Baja a Alumno");
    console.log("4. Dar Baja a Materia");
    console.log("5. Añadir a un alumno una nota en una materia");
    console.log("6. Eliminar la nota de un alumno en una materia");
    console.log("7. Mostrar Información de Materia");
    console.log("8. Mostrar Información de Alumnos");
    console.log("9. Mostrar Información de Notas");
    console.log("10. Salir");
    const opcion = readline.question('Por favor, elige una opción: ');
    Menu(opcion);
}
function Menu(option) {
    switch (option) {
        case '1':
            materiaManager.crearMateria(readline.question('Nombre de la materia: '));
            showMenu();
            break;
        case '2':
            alumnoManager.agregarAlumno(new alumno_1.Alumno(readline.question('Nombre del alumno: '), readline.question('Apellido del alumno: '), readline.question('Curso del alumno: ')));
            showMenu();
            break;
        case '3':
            alumnoManager.borrarAlumno(readline.questionInt('ID del alumno: '));
            showMenu();
            break;
        case '4':
            materiaManager.borrarMateria(readline.questionInt('ID de la materia: '));
            showMenu();
            break;
        case '5':
            console.log("\n--- Añadir Nota a Alumno ---");
            mostrarInformacionMateria();
            const idMateria = readline.questionInt('ID de la materia: ');
            mostrarInformacionAlumnos();
            const idAlumno = readline.questionInt('ID del alumno: ');
            const nota = readline.questionInt('Nota del alumno: ');
            notaManager.agregarNota(nota, idAlumno, idMateria);
            showMenu();
            break;
        case '6':
            console.log("\n--- Eliminar Nota de Alumno ---");
            mostrarInformacionNotas();
            const idNota = readline.questionInt('ID de la nota: ');
            notaManager.borrarNota(idNota);
            showMenu();
            break;
        case '7':
            mostrarInformacionMateria();
            showMenu();
            break;
        case '8':
            mostrarInformacionAlumnos();
            showMenu();
            break;
        case '9':
            mostrarInformacionNotas();
            showMenu();
            break;
        case '10':
            break;
        default:
            console.log("Opción no válida.");
            showMenu();
            break;
    }
}
showMenu();
function mostrarInformacionMateria() {
    console.log("\n--- Información de Materia ---");
    materiaManager.getMateria().forEach((materia) => {
        console.log(`ID: ${materia.getIdMateria()}, Nombre Asignatura: ${materia.getNombreAsig()}`);
    });
}
function mostrarInformacionAlumnos() {
    console.log("\n--- Información de Alumnos ---");
    alumnoManager.getAlumnos().forEach((alumno) => {
        console.log(`ID: ${alumno.getIdAlumno()}, Nombre Completo: ${alumno.getNombre()} ${alumno.getApellido()}`);
    });
}
function mostrarInformacionNotas() {
    console.log("\n--- Información de Notas ---");
    notaManager.getNotas().forEach((nota) => {
        const alumno = alumnoManager.getAlumnoById(nota.getIdAlumnos());
        const materia = materiaManager.getMateriaById(nota.getIdMateria());
        console.log(`ID: ${nota.getIdNota()}, Nota: ${nota.getNota()}, Alumno: ${alumno.getNombre()} ${alumno.getApellido()}, Materia: ${materia.getNombreAsig()}`);
    });
}
//# sourceMappingURL=index.js.map
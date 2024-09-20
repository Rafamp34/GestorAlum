import * as readline from 'readline-sync';
import { Alumno } from "./Alumnos/alumno";
import { Materia } from "./Materias/materia";
import { MateriaManager } from "./Materias/materiaManager";

const materiaManager = new MateriaManager();

materiaManager.agregarAlumno(new Alumno(1, 'Juan', 'Pérez'));
materiaManager.agregarAlumno(new Alumno(2, 'Ana', 'García'));

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
    handleMenuSelection(opcion)
}

function handleMenuSelection(option: string) {
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


import * as readline from 'readline-sync';
import { Alumno } from "./Alumnos/alumno";
import { Materia } from "./Materias/materia";
import { MateriaManager } from "./Materias/materiaManager";
import { AlumnoManager } from "./Alumnos/alumnoManager";
import { NotaManager } from "./Notas/notaManager";

const materiaManager = new MateriaManager();
const alumnoManager = new AlumnoManager();
const notaManager = new NotaManager();

alumnoManager.agregarAlumno(new Alumno('Juan', 'Pérez', '1ºA'));
alumnoManager.agregarAlumno(new Alumno('Ana', 'García', '2ºA'));
materiaManager.crearMateria(new Materia('Matemáticas'));
materiaManager.crearMateria(new Materia('Lengua')) ;
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
    Menu(opcion)
}


function Menu(option: string) {
    switch (option) {
        case '1':
            materiaManager.crearMateria(new Materia(readline.question('Nombre de la materia: ')));
            showMenu();
            break;
        case '2':
            alumnoManager.agregarAlumno(new Alumno(readline.question('Nombre del alumno: '), readline.question('Apellido del alumno: '), readline.question('Curso del alumno: ')));
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
    materiaManager.getMateria().forEach((materia:Materia) => {
        console.log(`ID: ${materia.getIdMateria()}, Nombre Asignatura: ${materia.getNombreAsig()}`);
    });
}

function mostrarInformacionAlumnos() {
    console.log("\n--- Información de Alumnos ---");
    alumnoManager.getAlumnos().forEach((alumno:Alumno) => {
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


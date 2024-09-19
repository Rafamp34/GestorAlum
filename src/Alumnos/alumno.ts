import {Materia} from '../Materias/materia';

class Alumno extends Materia{
    private idAlu: number;
    nameAlu: string;
    surname: string;
    age: number;
  
    constructor(idAlu: number, idAsig: number, nameAsig: string, nameAlu: string, surname: string,  age: number) {
        super(idAsig, nameAsig);
      this.idAlu = idAlu;
      this.nameAlu = nameAlu;
      this.surname= surname;
      this.age = age;
    }

    
  }
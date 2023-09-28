import { Component } from '@angular/core';

interface Alumno {
nombre : string;
fechaInscripcion: Date ;
}

@Component({
  selector: 'app-lista-de-alumnos',
  templateUrl: './lista-de-alumnos.component.html',
  styleUrls: ['./lista-de-alumnos.component.css']
})
export class ListaDeAlumnosComponent {
today = new Date();

  alumnos: Alumno[] = [
    {
      nombre: 'Leon Ali',
      fechaInscripcion: new  Date (),
    },
    {
      nombre: 'Wendy Ntaka',
      fechaInscripcion: new Date (),
    },
    {
      nombre: 'Zoe De Abreu',
      fechaInscripcion: new Date (),
    },
    {
      nombre: 'Rocio Sanchez',
      fechaInscripcion: new Date(),
    },
    {
      nombre: 'Thomas Fernandez',
      fechaInscripcion: new Date (),
    },
    {
      nombre: 'Gonzalo Lopez',
      fechaInscripcion: new Date (),
    },
  ];
  }


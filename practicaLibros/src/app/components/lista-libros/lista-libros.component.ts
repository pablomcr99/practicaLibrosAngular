import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.scss']
})
export class ListaLibrosComponent implements OnInit {

  libros: any[];

  constructor() {
    const libro1={
      id:"id del libro",
      titulo:"titulo del libro",
      autor:"autor del libro",
      editorial:"editorial del libro",
      descripcion:"descripcion del libro",
      img:"portada del libro"
    };
    const libro2={
      id:"id del libro",
      titulo:"titulo del libro",
      autor:"autor del libro",
      editorial:"editorial del libro",
      descripcion:"descripcion del libro",
      img:"portada del libro"
    }

    this.libros= [];
    this.libros.push(libro1);
    this.libros.push(libro2);

   }

  ngOnInit(): void {
  }

}

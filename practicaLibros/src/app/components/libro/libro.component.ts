import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.scss']
})
export class LibroComponent implements OnInit {

  libro: any;
  constructor() {
    this.libro ={
      id:"id del libro",
      titulo:"titulo del libro",
      autor:"autor del libro",
      editorial:"editorial del libro",
      descripcion:"descripcion del libro",
      img:"portada del libro"

    }
   }

  ngOnInit(): void {
  }

}

import { Idea } from './../idea/idea';
import { Component } from '@angular/core';




@Component({
  selector: 'app-datos',
  imports: [],
  templateUrl: './datos.component.html',
  styleUrl: './datos.component.css'
})

export class DatosComponent {
  vec : Idea[] = [];

  size : number = 12;

  index : number = 0;

  function agregar(Titulo : string, Descripcion : string, Categoria : String, Estado : String) : void {
    if(Titulo === '' || Descripcion === '' || Categoria === '' || Estado === ''){
      alert("Debe llenar los campos");
      return;
    }
    else{
      aux : Idea = {
        Titulo = Titulo,
        Descripcion = Descripcion,
        Estado = Estado,
        Categoria = Categoria
      }

      if(this.index === this.size){
        alert("La memoria esta llena");
      return;
      }
      else{
        this.vec[this.index] = aux;
      }
    }
  }

  function eliminar(Titulo : string) : void {
    if(Titulo === ''){
      alert("Debe llenar los campos");
      return;
    }

    if(this.index === 0){
      alert("No se ha guardado nada");
      return;
    }

    for(let i = 0; i <= this.index; i++){
      if(this.vec[this.index].Titulo === Titulo){
        delete.this.vec[this.index];
      }
    }
  }
}

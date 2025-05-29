import { Component } from '@angular/core';

@Component({
  selector: 'app-idea',
  imports: [],
  templateUrl: './idea.component.html',
  styleUrl: './idea.component.css'
})
export class IdeaComponent {
  Titulo : string = '';
  Descripcion : string = '';
  Estado : string = '';
  Categoria : string = '';
}

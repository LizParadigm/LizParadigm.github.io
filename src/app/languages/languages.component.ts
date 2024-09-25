import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.css'
})
export class LanguagesComponent {
  idiomas: Array<any> = [];

  ngOnInit(): void {
    let idioma1 = {
      nombre: "Español - latino",
      lengua: "Lengua materna"
    };

    let idioma2 = {
      nombre: "Ingles - estados unidos",
      lengua: "Segunda lengua"
    };

    this.idiomas.push(idioma1);
    this.idiomas.push(idioma2);
  }
}

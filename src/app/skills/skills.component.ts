import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: Array<any> = [];

  ngOnInit(): void {
    let skill1 = {
      nombre: "Analisis de requisitos"
    }
    let skill2 = {
      nombre: "Modelado de procesos y diagramas UML"
    }
    let skill3 = {
      nombre: "Comunicacion efectiva"
    }
    let skill4 = {
      nombre: "Manejo de herramientas de gestion de proyectos"
    }
    let skill5 = {
      nombre: "Conocimientos en metodologias agiles"
    }
    let skill6 = {
      nombre: "Pruebas de aceptacion y validacion"
    }

    this.skills.push(skill1);
    this.skills.push(skill2);
    this.skills.push(skill3);
    this.skills.push(skill4);
    this.skills.push(skill5);
    this.skills.push(skill5);
  }
}

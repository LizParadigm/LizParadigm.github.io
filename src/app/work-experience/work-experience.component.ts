import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  workExperience: Array<any> = [];

  ngOnInit(): void {
    let work1 = {
      fecha: "2023-2023",
      ubicacion: "Ixtac Ver.",
      puesto: "project manager",
      empresa: "ByLizzy",
      logros: [
        { descripcion: "creacion de una app web de un gym." },
        { descripcion: "diseñador de una app web de un gym." },
        { descripcion: "programador de una app web de un gym." },
        { descripcion: "cracion de una app web sobre un reloj." }
      ]
    };

    this.workExperience.push(work1);
    console.log(this.workExperience)
  }

}

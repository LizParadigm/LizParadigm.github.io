import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  instituciones: Array<any> = [];

  ngOnInit(): void {
    let school1 = {
      //   nombre: "Escuela Tecnica Agropecuaria #39",
      //   nivel: "Secundaria.",
      //   periodo: "2016-2019",
      //   ubicacion: "Coscomatepec, Ver."
      // };

      // let school2 = {
      //   nombre: "C.B.T.A #93",
      //   nivel: "Bachiller.",
      //   periodo: "2019-2022",
      //   ubicacion: "Coscomatepec, Ver."
      // };

      // let school3 = {
      nombre: "Universidad Veracruzana - Facultad de negocios y tecnologias",
      nivel: "Universidad.",
      periodo: "2022-...",
      ubicacion: "Ixtaczoquitlán, Ver."
    };

    this.instituciones.push(school1);
    // this.instituciones.push(school2);
    // this.instituciones.push(school3);
  }
}

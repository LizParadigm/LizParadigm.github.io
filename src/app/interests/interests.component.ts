import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.css'
})
export class InterestsComponent {
  interests: Array<any> = [];

  ngOnInit(): void {
    let interes1 = {
      nombre: "Ia"
    };
    let interes2 = {
      nombre: "Musica"
    };
    let interes3 = {
      nombre: "Videojuegos"
    };
    let interes4 = {
      nombre: "Jojo"
    };
    let interes5 = {
      nombre: "Programacion"
    };

    this.interests.push(interes1);
    this.interests.push(interes2);
    this.interests.push(interes3);
    this.interests.push(interes4);
    this.interests.push(interes5);

  }
}

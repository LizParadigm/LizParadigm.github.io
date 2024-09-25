import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.css'
})
export class AchievementsComponent {
  achievements: Array<any> = [];

  ngOnInit(): void {
    let achievement1 = {
      titulo: "gerente de macdonals"
    };

    this.achievements.push(achievement1);
  }
}

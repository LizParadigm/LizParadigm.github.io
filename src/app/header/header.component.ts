import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { JojoImgService } from '../jojo-img.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  img_usuario!: string;

  constructor(private jojo_img: JojoImgService) { }

  ngOnInit(): void {
    this.img_usuario = this.jojo_img.jojoRandom();
  }

  // jojoRandom(): void {
  //   let number = Math.floor(Math.random() * 6) + 1;
  //   this.img_usuario = "assets/jojo/" + number + ".jpg"
  //   console.log(this.img_usuario)
  // }

}

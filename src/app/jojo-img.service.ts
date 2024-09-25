import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JojoImgService {

  constructor() { }

  jojo_links: string[] = [
    'https://firebasestorage.googleapis.com/v0/b/soyyo-28d2c.appspot.com/o/1.jpg?alt=media&token=5c00aed1-0684-40b9-8a7b-3fd982a200fa',
    'https://firebasestorage.googleapis.com/v0/b/soyyo-28d2c.appspot.com/o/2.jpg?alt=media&token=edfb9c79-ea23-458a-b414-b0766fa07abf',
    'https://firebasestorage.googleapis.com/v0/b/soyyo-28d2c.appspot.com/o/3.jpg?alt=media&token=79260801-0be2-4a23-989e-28c816ffb9e4',
    'https://firebasestorage.googleapis.com/v0/b/soyyo-28d2c.appspot.com/o/4.jpg?alt=media&token=1d3ef31a-9a7b-4997-9c94-2b8c71460be5',
    'https://firebasestorage.googleapis.com/v0/b/soyyo-28d2c.appspot.com/o/5.jpg?alt=media&token=76457eb5-2583-464b-80c2-36c804a49d13',
    'https://firebasestorage.googleapis.com/v0/b/soyyo-28d2c.appspot.com/o/6.jpg?alt=media&token=71b5ed17-15f4-494b-855a-0fe9636be9a9',
  ];

  jojoRandom(): string {
    const randomIndex = Math.floor(Math.random() * this.jojo_links.length); // Corrige la selección aleatoria
    const selectedLink = this.jojo_links[randomIndex]; // Selecciona el link aleatorio
    console.log(selectedLink); // Muestra el link seleccionado en consola
    return selectedLink;
  }
}

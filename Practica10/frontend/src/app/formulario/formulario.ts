import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Game } from '../services/game';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h2>Agregar Videojuego</h2>
    <form (ngSubmit)="agregar()">

      <input 
        [(ngModel)]="game.nombre" 
        name="nombre" 
        placeholder="Nombre" 
        required>

      <input 
        [(ngModel)]="game.genero" 
        name="genero" 
        placeholder="Género" 
        required>

      <input 
        [(ngModel)]="game.precio" 
        name="precio" 
        placeholder="Precio" 
        required
        type="number">

      <button type="submit">Guardar</button>

    </form>
  `
})
export class Formulario {

  game = {
    nombre: '',
    genero: '',
    precio: ''
  };

  constructor(private gameService: Game) {}

  agregar() {
    this.gameService.createGame(this.game).subscribe(() => {
      alert('Videojuego agregado correctamente');
      this.game = { nombre: '', genero: '', precio: '' };
    });
  }
}
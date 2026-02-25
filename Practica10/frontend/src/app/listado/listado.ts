import { Component, OnInit } from '@angular/core';
import { Game } from '../services/game';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Eliminar Videojuego</h2>
    <ul>
      <li *ngFor="let game of games">
        {{game.nombre}}
        <button (click)="eliminar(game._id)">Eliminar</button>
      </li>
    </ul>
  `
})
export class Listado implements OnInit {

  games: any[] = [];

  constructor(private gameService: Game) {}

  ngOnInit() {
    this.cargar();
  }

  cargar() {
    this.gameService.getGames().subscribe(data => {
      this.games = data;
    });
  }

  eliminar(id: string) {
    this.gameService.deleteGame(id).subscribe(() => {
      this.cargar();
    });
  }
}
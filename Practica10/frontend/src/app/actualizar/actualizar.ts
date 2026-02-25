import { Component, OnInit } from '@angular/core';
import { Game } from '../services/game';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-actualizar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Actualizar Videojuego</h2>

    <div *ngFor="let game of games">
      <input [(ngModel)]="game.nombre">
      <input [(ngModel)]="game.plataforma">
      <input [(ngModel)]="game.precio">
      <button (click)="actualizar(game)">Actualizar</button>
      <hr>
    </div>
  `
})
export class Actualizar implements OnInit {

  games: any[] = [];

  constructor(private gameService: Game) {}

  ngOnInit() {
    this.gameService.getGames().subscribe(data => {
      this.games = data;
    });
  }

  actualizar(game: any) {
    this.gameService.updateGame(game._id, game).subscribe(() => {
      alert('Actualizado correctamente');
    });
  }
}
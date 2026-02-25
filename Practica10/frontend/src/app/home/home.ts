import { Component, OnInit } from '@angular/core';
import { Game } from '../services/game';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {

  games: any[] = [];

  constructor(private gameService: Game) {}

  ngOnInit(): void {
    this.gameService.getGames().subscribe((data: any) => {
      this.games = data;
    });
  }

 getImagen(nombre: string): string {

  const n = nombre.toLowerCase();

  if (n.includes('god')) {
    return 'images/godofwar.jpg';
  }

  if (n.includes('zelda')) {
    return 'images/zelda.jpg';
  }

  if (n.includes('mew')) {
    return 'images/mewgenics.jpg';
  }

  return 'images/godofwar.jpg';
}
}
  




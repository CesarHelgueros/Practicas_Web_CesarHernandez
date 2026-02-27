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

}
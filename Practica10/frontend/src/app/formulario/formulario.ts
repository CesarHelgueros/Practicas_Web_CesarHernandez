import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Game } from '../services/game';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {
  game = {
    nombre: "",
    genero: "",
    precio: 0,
    imagenUrl: ""
  };

  showSuccessModal: boolean = false;
  showErrorModal: boolean = false;

  constructor(private gameService: Game) {}

  onSubmit() {
    this.gameService.createGame(this.game).subscribe({
      next: (response: any) => {
        console.log("Videojuego capturado:", this.game);
        
        this.showSuccessModal = true; 
        
        this.game = {
          nombre: "",
          genero: "",
          precio: 0,
          imagenUrl: ""
        };
      },
      error: (error: any) => {
        console.error("Error al guardar:", error);
        
        this.showErrorModal = true; 
      }
    });
  }

  closeSuccessModal() {
    this.showSuccessModal = false;
  }

  closeErrorModal() {
    this.showErrorModal = false;
  }
}
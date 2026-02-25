import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <header class="navbar">
      <h1>🎮 Videojuegos Time</h1>
      <nav>
        <a routerLink="">Inicio</a>
        <a routerLink="agregar">Agregar</a>
        <a routerLink="eliminar">Eliminar</a>
        <a routerLink="actualizar">Actualizar</a>
      </nav>
    </header>

    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Alumnos } from '../../services/alumnos';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.html'
})
export class Lista {

  alumnos: any[] = [];

  constructor(private alumnoService: Alumnos) {}

  ngOnInit() {
    this.alumnoService.obtenerAlumnos().subscribe((data: any) => {
      this.alumnos = data;
    });
  }
}

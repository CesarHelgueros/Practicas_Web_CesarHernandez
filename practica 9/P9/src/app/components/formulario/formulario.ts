import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Alumnos } from '../../services/alumnos';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.html'
})
export class Formulario {

  constructor(
    private alumnoService: Alumnos,
    private router: Router
  ) {}

  guardarAlumno(form: any) {

    const nuevoAlumno = {
      nombre: form.value.nombre,
      edad: form.value.edad,
      carrera: form.value.carrera
    };

    this.alumnoService.agregarAlumno(nuevoAlumno).subscribe({
      next: () => {
        alert("Alumno agregado correctamente");
        form.reset();
        this.router.navigate(['/']);  // ← ESTA ES LA LÍNEA IMPORTANTE
      },
      error: (err) => {
        console.error("Error:", err);
      }
    });
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Alumnos } from '../../services/alumnos';
declare var bootstrap:any;
@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  mostrarModal: boolean = false;
  constructor(private alumno:Alumnos, private router: Router){}
  guardarAlumno(form:NgForm){
    if (form.invalid) return;
    const nuevoAlumno = {
      nombre: form.value.nombre,
      edad: form.value.edad,
      carrera: form.value.carrera
};
  this.alumno.agregarAlumno(nuevoAlumno).subscribe({
    next: () => {
    this.mostrarModal = true;
    
    form.reset();
  },
  error: (err) => {
    console.error("Error al insertar:", err);
  }
});
  }
  cerrarModal() {
    this.mostrarModal = false;
    this.router.navigate(['/consulta']);
}
}
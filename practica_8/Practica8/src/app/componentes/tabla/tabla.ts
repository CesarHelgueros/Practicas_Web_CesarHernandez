import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventosService } from '../../services/eventos';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla.html',
  styleUrls: ['./tabla.css']
})
export class Tabla implements OnInit {

  eventos: any[] = [];  

  constructor(
    private eventosService: EventosService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.eventosService.obtenerEventos().subscribe(data => {
      this.eventos = data;
      this.cdr.detectChanges(); 
    });
  }
}

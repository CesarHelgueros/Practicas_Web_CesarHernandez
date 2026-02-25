import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Formulario } from './formulario/formulario';
import { Listado } from './listado/listado';
import { Actualizar } from './actualizar/actualizar';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'agregar', component: Formulario },
  { path: 'eliminar', component: Listado },
  { path: 'actualizar', component: Actualizar },
  { path: '**', redirectTo: '' }
];
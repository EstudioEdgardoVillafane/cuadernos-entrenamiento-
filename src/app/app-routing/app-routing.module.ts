import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ContctoComponent } from '../contcto/contcto.component';
import { MitrabajoComponent } from '../mitrabajo/mitrabajo.component';
import { ProductosComponent } from '../productos/productos.component';

const routes: Routes = [
  //ruta para redireccionar (a home) cuando se entra a la raíz del proyecto:
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'productos', component: ProductosComponent},
  { path: 'home', component: HomeComponent},
  { path: 'mitrabajo', component: MitrabajoComponent},
  { path: 'contcto', component:  ContctoComponent}

  
  ];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
],
  declarations: []
})
export class AppRoutingModule { }
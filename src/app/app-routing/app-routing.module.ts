import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ContctoComponent } from '../contcto/contcto.component';
import { MitrabajoComponent } from '../mitrabajo/mitrabajo.component';
import { ProductosComponent } from '../productos/productos.component';
import { BackendComponent } from '../backend/backend.component';

import { AdminComponent } from '../admin/admin.component';
import { BackendUsuarioComponent} from '../backend-usuario/backend-usuario.component';

import { CategoriasComponent } from '../categorias/categorias.component';
import {BackendContactoComponent}from '../backend-contacto/backend-contacto.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'productos', component: ProductosComponent},
  { path: 'home', component: HomeComponent},
  { path: 'mitrabajo', component: MitrabajoComponent},
  { path: 'contcto', component:  ContctoComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'bac-productos', component: BackendComponent },
  { path: 'user', component: BackendUsuarioComponent },
  { path:'contacto', component: BackendContactoComponent},
  { path: 'categoria',component: CategoriasComponent}

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


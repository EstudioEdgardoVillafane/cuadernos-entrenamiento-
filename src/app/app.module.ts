import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';

import { HomeComponent } from './home/home.component';

import { MitrabajoComponent } from './mitrabajo/mitrabajo.component';



@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ProductosComponent
=======

    HomeComponent,

    MitrabajoComponent

>>>>>>> 5c4fb8ff503bb9cb2dcca127e98aa35cf301291a
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { ContctoComponent } from './contcto/contcto.component';

import { HomeComponent } from './home/home.component';

import { MitrabajoComponent } from './mitrabajo/mitrabajo.component';


import { HomeComponent } from './home/home.component';

import { MitrabajoComponent } from './mitrabajo/mitrabajo.component';


import { ProductosComponent } from './productos/productos.component';


import { HomeComponent } from './home/home.component';

import { MitrabajoComponent } from './mitrabajo/mitrabajo.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,

    ProductosComponent


    HomeComponent,


    ContctoComponent,


 
    MitrabajoComponent,


 
    FooterComponent


  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

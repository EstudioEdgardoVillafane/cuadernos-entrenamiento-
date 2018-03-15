import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule }    from '@angular/forms';

import { CarouselModule } from 'ngx-bootstrap/carousel';


import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule }    from '@angular/forms';

//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HttpModule } from '@angular/http';
import { HttpClientModule }    from '@angular/common/http';

//Importamos los dos modulos HTTP 

import { AppComponent } from './app.component';
import { ContctoComponent } from './contcto/contcto.component';
import { ProductosComponent } from './productos/productos.component';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { CuadernoTotoService } from '../app/cuaderno-toto.service';
import { BackendComponent } from './backend/backend.component';

import { ProductosComponent } from './productos/productos.component';
import { AppComponent } from './app.component';
import { MitrabajoComponent } from './mitrabajo/mitrabajo.component';
import { HomeComponent } from './home/home.component';
import { ContctoComponent } from './contcto/contcto.component';





@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    HomeComponent,
    ContctoComponent,
    MitrabajoComponent,
    FooterComponent,
    NavbarComponent,
    BackendComponent
  ],
  imports: [
    BrowserModule,

    HttpModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule.forRoot(),
    HttpClientModule
 ],
  providers: [CuadernoTotoService],       //IMPORTAR LOS SERVICIOS

   
    //NgbModule.forRoot (),
    AppRoutingModule,
    FormsModule,


   // NgbModule,

  // NgbModule,

   CarouselModule.forRoot()

  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }

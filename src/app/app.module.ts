import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import{} from '@'
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule }    from '@angular/forms';

//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';


import { AppComponent } from './app.component';
import { ContctoComponent } from './contcto/contcto.component';

import { ProductosComponent } from './productos/productos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MitrabajoComponent } from './mitrabajo/mitrabajo.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,

    ProductosComponent,
    HomeComponent,
    ContctoComponent,
    MitrabajoComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,

    //NgbModule.forRoot (),
    AppRoutingModule,
    FormsModule,
  // NgbModule,
   CarouselModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

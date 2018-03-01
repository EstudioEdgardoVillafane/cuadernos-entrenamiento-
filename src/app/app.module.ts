import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';

//import{} from '@'
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule }    from '@angular/forms';

//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
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

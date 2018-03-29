import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule }    from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HttpModule } from '@angular/http';
import { HttpClientModule }    from '@angular/common/http';

//Importamos los dos modulos HTTP 

import { AppComponent } from './app.component';
import { ContctoComponent } from './contcto/contcto.component';
import { ProductosComponent } from './productos/productos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MitrabajoComponent } from './mitrabajo/mitrabajo.component';
import { FooterComponent } from './footer/footer.component';
import { CuadernoTotoService } from '../app/cuaderno-toto.service';
import { BackendComponent } from './backend/backend.component';

import { BackendUsuarioComponent } from './backend-usuario/backend-usuario.component';
import { AdminComponent } from './admin/admin.component';
import { UsuerService } from './usuer.service';
import { NavBackendComponent } from './nav-backend/nav-backend.component';

import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriasService } from './categorias.service';
import { ContactoService } from './contacto.service';
import { BackendContactoComponent } from './backend-contacto/backend-contacto.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    HomeComponent,
    ContctoComponent,
    MitrabajoComponent,
    FooterComponent,
    NavbarComponent,
    BackendComponent,

    BackendUsuarioComponent,
    AdminComponent,
    NavBackendComponent,

    CategoriasComponent,

    BackendContactoComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule.forRoot(),
    HttpClientModule,
    
 ],

  providers: [CuadernoTotoService, UsuerService, CategoriasService,ContactoService],       //IMPORTAR LOS SERVICIOS

  bootstrap: [AppComponent]
})
export class AppModule { }

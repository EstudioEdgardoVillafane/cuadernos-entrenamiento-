import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MitrabajoComponent } from './mitrabajo/mitrabajo.component';


@NgModule({
  declarations: [
    AppComponent,
    MitrabajoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

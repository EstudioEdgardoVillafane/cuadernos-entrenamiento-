import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import {ContactoService} from '../contacto.service'

@Component({
  selector: 'app-contcto',
  templateUrl: './contcto.component.html',
  styleUrls: ['./contcto.component.css']
})
export class ContctoComponent implements OnInit {
  constructor(private ContactoService:ContactoService) { }
   ngOnInit(){}
   nombre;
   mensaje;
   email;
   telefono;
   lix;

  altacontacto(){
    this.nombre = document.getElementById("nombre");
    this.mensaje = document.getElementById("mensaje");
    this.email = document.getElementById("email");
    this.telefono = document.getElementById("telefono");

    this.ContactoService.Conect(
    3,
    0,
    this.nombre.value,
    this.mensaje.value,
    this.email.value,
    this.telefono.value

  
    )
    .subscribe((result) => { 
      this.lix = result;
    });
   

   location.reload();
  }
 

}


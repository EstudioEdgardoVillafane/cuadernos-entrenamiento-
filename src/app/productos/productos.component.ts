import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuadernoTotoService } from './../cuaderno-toto.service';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Cuaderno } from './product-class';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

    listado;  //Definimos la variable que se va a usar para guardar el JSON.


  constructor( private totoService: CuadernoTotoService) { }
  //Definimos el servicio en forma privada MUY IMPORTANTE.

  ngOnInit() {
    this.totoService.Conect(1,0,"0","0",0,0)
    .map((response) => response.json())
    .subscribe((data) => { 
      this.listado = data;
    });
    //Llamamos a la funcion lista dentro de los servicios de toto y transformamos su resultado en un json que se almacena en Listado.
  }
  
}


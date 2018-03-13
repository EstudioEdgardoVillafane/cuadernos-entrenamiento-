import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';


import { Cuaderno } from './productos/product-class';

@Injectable()
export class CuadernoTotoService {


  constructor(private Http: Http) { }
  //Definimos como variable privada el HTTP, IMPORTANTE.

  Listar(){
     return this.Http.get('http://localhost/cuadernos/src/php/list-cuaderno.php?loko=23');
     //Devuelve el resultado del php como objeto
  }
  
}

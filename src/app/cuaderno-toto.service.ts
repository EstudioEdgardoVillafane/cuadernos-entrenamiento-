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

  Conect(Funct: number, id : number, name : string, desc : string, categ : number, precio : number){
    return this.Http.get('http://localhost/cuadernos/src/php/list-cuaderno.php?data='+Funct+'&id='+id+"&name="+name+"&desc="+desc+"&categ="+categ+"&precio="+precio);
     //Devuelve el resultado del php como objeto.
  }    
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Cuaderno } from './productos/product-class';

@Injectable()
export class CategoriasService {

  constructor(private Http: Http) { }
  //Definimos como variable privada el HTTP, IMPORTANTE.

  Conect(Funct: number, id : number, categoriaproducto : number){
    return this.Http.get('php/list-categorias.php?data='+Funct+'&id='+id+'&categoriaproducto='+categoriaproducto);
     //Devuelve el resultado del php como objeto.
  }
  getJsonID(id : number, json){
    return of(json.find(primero => primero.id === id));
  }    
  CategoriaList(){
    
  }
}

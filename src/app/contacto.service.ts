import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class ContactoService {
  constructor(private Http: Http) { }
  //Definimos como variable privada el HTTP, IMPORTANTE.
  //Warning! Define the HTTP as private variable 
  Conect(Funct: number, id : number, nombre : string, mensaje : string, email : number, telefono :string){
    return this.Http.get('http://localhost/cuadernos/src/php/contacto.php?data='+Funct+'&id='+id+"&nombre="+nombre+"&mensaje="+mensaje+"&telefono="+telefono+"&email="+email);
     //Devuelve el resultado del php como objeto.
     
  }
  Conectar(Funct: number, id : number, nombre : string, respuesta : string){
    return this.Http.get('http://localhost/cuadernos/src/php/funciones-contacto.php?data='+Funct+'&id='+id+"&respuesta="+respuesta+"&nombre="+nombre);
  }
     //Devuelve el resultado del php como objeto.
  getJsonID(id : number, json){
    return of(json.find(primero => primero.id === id));
  } 

}

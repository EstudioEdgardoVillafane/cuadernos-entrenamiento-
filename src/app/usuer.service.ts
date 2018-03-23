import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class UsuerService {

  constructor(private Http : Http) {}

  Conect(Funct: number, id : number, name : string, contra : string){
    return this.Http.get('php/user.php?data='+Funct+'&id='+id+"&name="+name+"&contra="+contra);
     //Devuelve el resultado del php como objeto.
  }
  getJsonID(id : number, json){
    return of(json.find(primero => primero.id === id));
  } 
  getJsonUSER(user : string, json){
    return of(json.find(primero => primero.usuario === user));
  } 
}

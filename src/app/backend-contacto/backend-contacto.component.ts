import { Component, OnInit } from '@angular/core';
import { UsuerService } from './../usuer.service';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { ContactoService } from'../contacto.service';
@Component({
  selector: 'app-backend-contacto',
  templateUrl: './backend-contacto.component.html',
  styleUrls: ['./backend-contacto.component.css']
})
export class BackendContactoComponent implements OnInit {

  constructor(private ContactoService:ContactoService) { }
   
  ette = true;
  listado;
  lix;
  CheckAcumulador = new Array();
  NumberAux = 0;
  PositionAux = 0;
  i=0;
  Booleano = true;
  nombre;
  respuesta;
 
  ViewInsert = true;
  ListEdit;

  ngOnInit() {
    this.Listar();
  }
  Editarcontacto(id : number){
    this.nombre = document.getElementById("nombre-ed");
    this.respuesta = document.getElementById("respuesta-ed");
   

    this.ContactoService.Conectar(
    4,
    id,
    this.nombre.value,
    this.respuesta.value   
    )
    .subscribe((data) => { 
      this.lix = data;
    });
    this.Listar();
  }
  Show(){
    this.ViewInsert = false;    
  }
  Return(){
    this.ViewInsert = true;
    this.ette = true;
  }
  Listar(){
    this.ContactoService.Conectar(1,0,"0","0")
    .map((response) => response.json())
    .subscribe((data) => { 
      this.listado = data;
    });
  }

 
  


  ShowEd(id : number){
    this.ette = false;
    this.ViewInsert=false;
    this.ContactoService.getJsonID(id,this.listado)
    .subscribe(resultado => this.ListEdit = resultado);
 
  }


 

}

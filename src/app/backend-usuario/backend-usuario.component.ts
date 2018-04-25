import { Component, OnInit } from '@angular/core';
import { UsuerService } from './../usuer.service';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-backend-usuario',
  templateUrl: './backend-usuario.component.html',
  styleUrls: ['./backend-usuario.component.css']
})
export class BackendUsuarioComponent implements OnInit {

    constructor(private totoService: UsuerService) { }
   
    ette = true;
    listado;
    lix;
    CheckAcumulador = new Array();
    NumberAux = 0;
    PositionAux = 0;
    i=0;
    Booleano = true;
    nombre;
    contrasena;
   
    ViewInsert = true;
    ListEdit;
  
    ngOnInit() {
      this.Listar();
    }
    EditIt(id : number){
      this.nombre = document.getElementById("nombre-ed");
      this.contrasena = document.getElementById("contrasena-ed");
     
  
      this.totoService.Conect(
      4,
      id,
      this.nombre.value,
      this.contrasena.value   
      )
      .subscribe((data) => { 
        this.lix = data;
      });
      location.reload();
    }
    Show(){
      this.ViewInsert = false;    
    }
    Return(){
      this.ViewInsert = true;
      this.ette = true;
    }
    Listar(){
      this.totoService.Conect(1,0,"0","0")
      .map((response) => response.json())
      .subscribe((data) => { 
        this.listado = data;
      });
    }
  
    onDelete(id : number){
      this.Booleano=true;    
      console.log("Contador: " + this.NumberAux);
      if(this.NumberAux == 0){
        this.CheckAcumulador[0] = id;
        this.NumberAux++;
        console.log("Primer numero en la lista: " + id)
      }else{
        for(this.i = 0; this.i<this.NumberAux ; this.i++){
          if(id == this.CheckAcumulador[this.i]){
            this.CheckAcumulador.splice(this.i, 1);
            this.Booleano = false;
            console.log("El numero: " + id + " está en la posicion: " + this.i);
            this.NumberAux++;
          }
        }
        if(this.Booleano){
            this.CheckAcumulador[this.NumberAux] = id;
            console.log("Se agrego en el numero: " + id + ", en la posicion: " + this.NumberAux);
            this.NumberAux++;
          }
        }
      }
    
    DeleteReg(){
      for(this.i=0; this.i<this.NumberAux; this.i++){
        if(this.CheckAcumulador[this.i] == undefined){
          console.log("Indefinido");
        }else{
          this.totoService.Conect(2, this.CheckAcumulador[this.i],"0","0")
          .subscribe((data) => { 
            this.lix = data;
          });
        }
      }
      location.reload();
    }
  
    ShowEd(id : number){
      this.ette = false;
      this.ViewInsert=false;
      this.totoService.getJsonID(id,this.listado)
      .subscribe(resultado => this.ListEdit = resultado);
   
    }
  
    ShowIt(){
      this.nombre = document.getElementById("nombre");
      this.contrasena = document.getElementById("contrasena");
     
  
      this.totoService.Conect(
      3,
      0,
      this.nombre.value,
      this.contrasena.value
    
      )
      .subscribe((result) => { 
        this.lix = result;
      });
      location.reload();
    }
   

  }


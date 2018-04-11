import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../categorias.service';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  CategoriaProducto;
  lix;
  listado;
  ViewInsert=true;
  i;
  ette = true;
  ListEdit;
  categoria;
  Booleano = true;
  NumberAux = 0;
  CheckAcumulador = new Array();

  constructor(private CategoriasServices:CategoriasService) { }

  ngOnInit() {
    this.Listar();
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
        this.CategoriasServices.Conect(2, this.CheckAcumulador[this.i],0)
        .subscribe((data) => { 
          this.lix = data;
        });
      }
    }
    location.reload();

  }
  
    
    Listar(){
      this.CategoriasServices.Conect(1,0,0)
      .map((response)=>response.json())
      .subscribe((data)=>{
      this.listado=data;
    })
  }

  Agregar(){
    this.CategoriaProducto=document.getElementById("CategoriaProducto");

    this.CategoriasServices.Conect(
    3,
    0,
      this.CategoriaProducto.value
    )
    .subscribe((data) => { 
      this.lix = data;
    });
    location.reload();

  }
  Edit(id : number){
    this.ette = false;
    this.ViewInsert=false;
    this.CategoriasServices.getJsonID(id,this.listado)
    .subscribe(resultado => this.ListEdit = resultado);
  
  }
  Show(){
    this.ViewInsert = false;    
  }
  Return(){
    this.ViewInsert = true;
    this.ette = true;
  }

  EditIt(id : number){
    this.CategoriaProducto = document.getElementById("ed-categoria");

    this.CategoriasServices.Conect(
    4,
    id,
    this.CategoriaProducto.value
    )
    .subscribe((data) => { 
      this.lix = data;
    });
    location.reload();

  }
}


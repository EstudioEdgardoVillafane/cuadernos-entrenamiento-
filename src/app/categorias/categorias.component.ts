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
  constructor(private CategoriasServices:CategoriasService) { }

  ngOnInit() {
    this.Listar();
  }
  
  DeleteReg(id:number){
    if(id == undefined){
      console.log("Indefinido");
    }else{
      this.CategoriasServices.Conect(2,id,0)
      .subscribe((data) => { 
        this.lix = data;
      });
    }
    this.Listar(); 
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
    this.Listar();

    this.ViewInsert=true;
  }
}


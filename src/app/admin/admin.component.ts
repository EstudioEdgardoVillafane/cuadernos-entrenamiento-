import { Component, OnInit } from '@angular/core';
import { UsuerService } from './../usuer.service';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private totoService : UsuerService) { }

  UserOnline = true;
  AuxOnline;
  Listado;
  user;
  contra;
  Obj;

  onClick(){
    this.user = document.getElementById("user");
    this.contra = document.getElementById("contra");
    this.totoService.getJsonUSER(this.user.value,this.Listado)
    .subscribe((data) => { 
      this.AuxOnline = data;
    });
    if(this.AuxOnline == undefined){
      console.log("contraseña incorrecta");
    }else{
      if(this.contra.value == this.AuxOnline.contrasena){
        this.UserOnline = false;
      }else{
        console.log("Datos erroneos, mal");
      }
    }
  }




  ngOnInit() {
    this.totoService.Conect(1,0,"0","0")
    .map((response) => response.json())
    .subscribe((data) => { 
      this.Listado = data;
    });
  }

}


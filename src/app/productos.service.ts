import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CommonModule } from '@angular/common';

@Injectable()
export class ProductosService {
  constructor(private http: Http) {
    // generamos las funciones que nos serviran para manipular nuestras entidadesthi

    listar(){
      return this.http.get('http://localhost/php/productos.php?opcion=1');
    }
    detallar(id:number){
      return this.http.get('http://localhost/php/productos.php?opcion=2&id=');
    }
    guardar(id:object){
      return this.http.post('http://localhost/php/productos.php?opcion=3');
    }
    modificar(id:object){
      return this.http.post('http://localhost/php/productos.php?opcion=4');
    }
    eliminar(id:number){
      throw new Error ('Método no implementado');
    }
   }

}

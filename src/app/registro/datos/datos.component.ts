import { Component } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent {
  dataPersonas: any[] = [];

  // frutas=["manzana","pera","papaya"]
  // nombres:string[] = ['Juan','Pedro'];
  // apellidos =["Villa"];
  // edades =["22"];

  agregar(nombre:string, apellido:string, edad:string){
    console.log(this.dataPersonas)
    this.dataPersonas.push({"primerNombre":nombre,"primerApellido":apellido, "edad":edad})

    
    for(let i = 0 ; i<this.dataPersonas.length;i++){

      if(this.dataPersonas[i].edad<18){
        this.dataPersonas[i].mayor="No"
      } else{
        this.dataPersonas[i].mayor="Si"
      }
    }
  }

}

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
    this.dataPersonas.push({"primerNombre":nombre,"primerApellido":apellido, "Edad":edad})
    console.log(this.dataPersonas)
  }

}

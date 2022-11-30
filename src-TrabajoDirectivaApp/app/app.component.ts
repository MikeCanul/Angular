import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registro de usuarios';
  mensaje="";
  registrado=false;
  nombre:string="";
  apellido:string="";
  cargo:string="";
  entradas: object[];

    constructor(){
      this.entradas=[
        {titulo:"Python cada dia mas presente"},
        {titulo:"Java precente desde hace mas de 29 años"},
        {titulo:"JavaScript cada vez mas funcional"},
        {titulo:"Kotlin potencia para tus apps"},
        {titulo:"Donde quedo pascal?"},
      ]
    }

  registrarUsuario(){

    this.registrado=true;

    this.mensaje="Usuario Registrado con exito";

  }
}

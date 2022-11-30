import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  // template:"<p>Aqui iria un empleado</p>",
  styleUrls: ['./empleado.component.css']
  // styles:["p{background-color: red;}"]
})
export class EmpleadoComponent implements OnInit{

  nombre="Juan";
  apellido="Diaz";
  edad=17;
  empresa="Pildoras Informaticas";




  habilitacionCuadro=false;

  usuRegistrado=false;

  textoDeRegistro="No hay nadie registrado";

  getRegistroUsuario(){
    this.usuRegistrado=true;
  }

  setusuarioRegistrado(event:Event){
    //alert("el usuario se acaba de registrar");
    // this.textoDeRegistro="El usuario se acaba de registrar";
    
    if((<HTMLInputElement>event.target).value=="si"){
      this.textoDeRegistro="El usuario se acaba de registrar";
    }else{
      this.textoDeRegistro="No hay nadie registrado";
    }
  }

  // getEdad(){
  //   return this.edad;
  // }

  constructor(){}

  ngOnInit(): void {
    
  }
}

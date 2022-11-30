import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent {
  @Input() empleadoDeLista:Empleado;
  @Input() indice:number;
  
  // empleados:Empleado[]=[

  //   new Empleado("Juan","Diaz","Presidente",7500),
  //   new Empleado("Ana","Martin","Directora",5500),
  //   new Empleado("Maria","Fdez","Jefa seccion",3500),
  //   new Empleado("Laura","Lopez","Administrativo",2500),



  // ];
  // empleadoAgregado(empleado:Empleado){
  //   this.empleados.push(empleado);
  
  // }

    arrayCaracteristicas = [''];

  agregarCaracteristica(nuevaCaracteristica: string) {
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }
  }


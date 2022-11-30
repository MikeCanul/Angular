import { Injectable } from "@angular/core";
import { DataServices } from "./data.service";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService {

  constructor(private servicioVentanaEmergente: ServicioEmpleadosService, private dataService:DataServices){


  }

  setEmpleados(misEmpleados:Empleado[]){
    this.empleados=misEmpleados;
  }

  obtenerEmpleados(){
    return this.dataService.cargarEmpleados(); 
  }
  empleados:Empleado[]=[];
// empleados:Empleado[]=[

  

//     new Empleado("Juan","Diaz","Presidente",7500),
//     new Empleado("Ana","Martin","Directora",5500),
//     new Empleado("Maria","Fdez","Jefa seccion",3500),
//     new Empleado("Laura","Lopez","Administrativo",2500),



//   ];

  agregarEmpleadoServicio(empleado:Empleado){
    this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar: " + "\n" +empleado.nombre
     + "\n" + "salario: "+empleado.salario);
    this.empleados.push(empleado);
    this.dataService.guardarEmpleados(this.empleados);
  }

  encontrarEmpleado(indice:number){
    let empleado:Empleado=this.empleados[indice];
    return empleado;
  }

  actualizarEmpleado(indice:number, empleado:Empleado){
    let empeladoModificado=this.empleados[indice];
    empeladoModificado.nombre=empleado.nombre;
    empeladoModificado.apellido=empleado.apellido;
    empeladoModificado.cargo=empleado.cargo;
    empeladoModificado.salario=empleado.salario;

    this.dataService.actualizarEmpleado(indice, empleado);
  }

  eliminarEmpleado(indice:number){
    this.empleados.splice(indice,1);
    this.dataService.eliminarEmpleado(indice);
    if(this.empleados!=null) this.dataService.guardarEmpleados(this.empleados);
  }
}
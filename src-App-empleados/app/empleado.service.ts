import { Empleado } from "./empleado.model";

export class EmpleadosService {
empleados:Empleado[]=[

    new Empleado("Juan","Diaz","Presidente",7500),
    new Empleado("Ana","Martin","Directora",5500),
    new Empleado("Maria","Fdez","Jefa seccion",3500),
    new Empleado("Laura","Lopez","Administrativo",2500),



  ];

  agregarEmpleadoServicio(empleado:Empleado){
        
    this.empleados.push(empleado);
  }
}
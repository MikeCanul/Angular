import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app'
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private loginService:LoginService){

    // this.empleados=this.empleadosService.empleados;
  }
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyAr-ZgWKIRXpmjWUUjfXnNHsBOKFZjXFPw",
      authDomain: "mis-clientes-deab5.firebaseapp.com",

    })
  }

  estaLogueado(){
    return this.loginService.estaLogeado();
  }
  logout(){
    this.loginService.logout(); 
  }
  


}

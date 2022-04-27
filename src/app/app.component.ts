import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de Usuarios';
  mensaje = '';
  registrado = false;
  nombre:string="";
  apellido:string="";
  entradas:object[];

constructor(){
  this.entradas=[
    {nombre:"python cada día más presente"},
    {nombre:"java cada día más presente desde hace 20 años"},
    {nombre:"javscript pontecia tus conocimientos"},
    {nombre:"Alejo el mejor"},
  ]
}  

  registrarUsuario(){
    this.registrado=true
    this.mensaje="usuario registrado con exito";
  }
}

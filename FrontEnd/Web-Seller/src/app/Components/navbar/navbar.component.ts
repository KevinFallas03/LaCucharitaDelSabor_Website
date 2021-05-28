import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  //ATRIBUTOS
  inicio: boolean;
  pendientes: boolean;
  completados: boolean;
  menu: boolean;
  envios: boolean;
  usuarios: boolean;

  constructor() { 
    this.inicio = true;
    this.pendientes = false;
    this.completados = false;
    this.menu = false;
    this.envios = false;
    this.usuarios = false;
    if(localStorage.length>5)
      this.retrieveData();
    }

  ngOnInit(): void {
  }

  //FUNCIONES
  switchView(value: String): void {
    this.setFalseState();
    switch(value){

      case 'inicio':
        this.inicio = true;  
        break;
      case 'pendientes': 
        this.pendientes = true; 
        break;
      case 'completados':  
        this.completados = true;
        break;
        case 'menu': 
        this.menu = true; 
        break;
      case 'envios':  
        this.envios = true;
        break;
      case 'usuarios': 
        this.usuarios = true; 
        break;
    }
    this.storeData();
  }

  setFalseState():void{
    this.inicio = false;
    this.pendientes = false;
    this.completados = false;
    this.menu = false;
    this.envios = false;
    this.usuarios = false;
  }

  retrieveData(): void{
    this.inicio =  this.getBool(localStorage.getItem("inicio"));
    this.pendientes =  this.getBool(localStorage.getItem("pendientes"));
    this.completados =  this.getBool(localStorage.getItem("completados"));
    this.menu =  this.getBool(localStorage.getItem("menu"));
    this.envios =  this.getBool(localStorage.getItem("envios"));
    this.usuarios =  this.getBool(localStorage.getItem("usuarios"));
  }

  storeData(): void{
    localStorage.setItem("inicio",this.getString(this.inicio));
    localStorage.setItem("pendientes",this.getString(this.pendientes));
    localStorage.setItem("completados",this.getString(this.completados));
    localStorage.setItem("menu",this.getString(this.menu));
    localStorage.setItem("envios",this.getString(this.envios));
    localStorage.setItem("usuarios",this.getString(this.usuarios));
  }

  getString(value: boolean): string{
    if (value){
      return '1';
    }
    return '0';
  }

  getBool(value: any) : boolean{
    return value == '1';
  }


}

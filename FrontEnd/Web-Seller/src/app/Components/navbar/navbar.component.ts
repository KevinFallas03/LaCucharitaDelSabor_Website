import { Component, OnInit } from '@angular/core';

interface Elements {
  inicio: boolean,
  pendientes: boolean,
  completados: boolean,
  menu: boolean,
  envios: boolean,
  usuarios: boolean
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {
  
  //ATRIBUTOS
  public elements: Elements;
  

  constructor() { 
    this.elements = this.retrieveData();
  }

  ngOnInit(): void {
  }

  //FUNCIONES
  switchView(value: String): void {
    this.setFalseState();
    switch(value){

      case 'inicio':
        this.elements.inicio = true;  
        break;
      case 'pendientes': 
        this.elements.pendientes = true; 
        break;
      case 'completados':  
        this.elements.completados = true;
        break;
        case 'menu': 
        this.elements.menu = true; 
        break;
      case 'envios':  
        this.elements.envios = true;
        break;
      case 'usuarios': 
        this.elements.usuarios = true; 
        break;
    }
    this.storeData();
  }

  setFalseState():void{
    this.elements.completados = false;
    this.elements.envios = false;
    this.elements.inicio = false;
    this.elements.menu = false;
    this.elements.pendientes = false;
    this.elements.usuarios = false;
  }

  retrieveData(): Elements{
    var value : String = "";
    if(localStorage.getItem("elements"))
      return JSON.parse(localStorage.getItem("elements") as string);

      
    return {
      inicio: true,
      pendientes: false,
      completados: false,
      menu: false,
      envios: false,
      usuarios: false
    }
  }

  storeData(): void{
    localStorage.setItem("elements",JSON.stringify(this.elements));
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/AuthService/auth.service';

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
  

  constructor(
    private authService: AuthService,
    private routerService: Router,
  ) { 
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
        this.routerService.navigateByUrl('/dashboard');  
        break;
      case 'pendientes': 
        this.elements.pendientes = true;
        this.routerService.navigateByUrl('/pendientes'); 
        break;
      case 'completados':  
        this.elements.completados = true;
        this.routerService.navigateByUrl('/completados'); 
        break;
        case 'menu': 
        this.elements.menu = true;
        this.routerService.navigateByUrl('/menu');   
        break;
      case 'envios':  
        this.elements.envios = true;
        this.routerService.navigateByUrl('/envios'); 
        break;
      case 'usuarios': 
        this.elements.usuarios = true;
        this.routerService.navigateByUrl('/usuarios');
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

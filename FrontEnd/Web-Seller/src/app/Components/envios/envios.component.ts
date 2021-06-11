import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-envios',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.css']
})
export class EnviosComponent implements OnInit {

  //ATRIBUTOS
  public panelOpenState = false;
  public locations = [
    {"zona":"Heredia, Barrio Limón","precio":"1500"},
    {"zona":"Puntarenas, Guapiles","precio":"3500"},
    {"zona":"Cartago, Cartago","precio":"3500"},
    {"zona":"Guanacaste, Monteverde","precio":"3500"}
  ];
  public location = '';
  public email = '';

  constructor() { }

  ngOnInit(): void {
  }

}

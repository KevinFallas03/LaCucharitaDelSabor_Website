import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {


  //ATRIBUTOS
  public panelOpenState = false;
  public locations = [{"zona":"Heredia, Barrio Limón","precio":"1500"},{"zona":"Puntarenas, Guapiles","precio":"3500"},{"zona":"Cartago, Cartago","precio":"3500"},{"zona":"Guanacaste, Monteverde","precio":"3500"}];
  public location = '';
  public email = '';

  constructor() { }

  ngOnInit(): void {
  }

  openPanel(){
    this.panelOpenState = !this.panelOpenState;
  }

  onClick(){
    console.log(this.email,this.location);
  }

}

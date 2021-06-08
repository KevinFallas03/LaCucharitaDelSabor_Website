import { Component, OnInit } from '@angular/core';

export interface Costumers {
  nombre: string;
  correo: string;
  ordenes: number;
}

const COSTUMER_DATA: Costumers[] = [
  {nombre: 'Ignacio Álvarez', correo: 'nacho.alv@gmail.com', ordenes: 35},
  {nombre: 'Kevin Fallas', correo: 'nacho.alv@gmail.com', ordenes: 20},
  {nombre: 'Andrés Aguilar', correo: 'nacho.alv@gmail.com', ordenes: 15},
  {nombre: 'Joshep Tenorio', correo: 'nacho.alv@gmail.com', ordenes: 14},
  {nombre: 'Carlos Varela', correo: 'nacho.alv@gmail.com', ordenes: 10},
];


@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {

  constructor() { }

  images = [
    {path: 'https://i.imgur.com/6MS7V8L.png'},
    {path: 'https://i.imgur.com/AWghc3b.png'},
    {path: 'https://i.imgur.com/6MS7V8L.png'},
    {path: 'https://i.imgur.com/AWghc3b.png'},
    {path: 'https://i.imgur.com/6MS7V8L.png'},
    {path: 'https://i.imgur.com/AWghc3b.png'},
    {path: 'https://i.imgur.com/6MS7V8L.png'},
    {path: 'https://i.imgur.com/AWghc3b.png'},
  ];

  displayedColumns: string[] = ['nombre', 'correo', 'ordenes'];
  dataSource = COSTUMER_DATA;

  ngOnInit(): void {
  }

}

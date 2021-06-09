import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public products = [
    {name:"Tiramisú",price:14000,portions:16,image:"https://i.imgur.com/MjnbeUg.png"},
    {name:"Prestiño",price:5000,portions:5,image:"https://i.imgur.com/6ybxzES.png"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

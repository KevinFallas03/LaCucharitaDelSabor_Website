import { Component, OnInit } from '@angular/core';

import { OrderService } from 'src/app/Services/Order/order.service';

import { Order } from 'src/app/Models/Order';

@Component({
  selector: 'app-completados',
  templateUrl: './completados.component.html',
  styleUrls: ['./completados.component.css']
})
export class CompletadosComponent implements OnInit {

  orders: Order[] = [];
  
  constructor(
    private orderService : OrderService
  ) { }

  ngOnInit(): void {
    this.loadCompletedOrders();
  }

  async loadCompletedOrders(){
    let orders = await this.orderService.getCompletedOrders();
    this.orders = orders;
  }
  
  slideConfig = {
    "slidesToShow": 1, 
    "slidesToScroll": 1, 
    "arrows":true,
    prevArrow:"<button type='button' class='slick-prev pull-left' style='font-family: slick; font-size: 40px; line-height: 1; color: #90694A;'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right' style='font-family: slick; font-size: 40px; line-height: 1; color: #90694A;'><i class='fa fa-angle-right' aria-hidden='true'></i></button>", 
    "rows":1, 
    "dots":true
  };
  
  slickInit(e: any) {
    console.log('slick initialized');
  }
    
  breakpoint(e: any) {
    console.log('breakpoint');
  }
    
  afterChange(e: any) {
    console.log('afterChange');
  }
    
  beforeChange(e: any) {
    console.log('beforeChange');
  }



}

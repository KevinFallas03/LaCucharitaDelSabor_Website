import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

import { OrderService } from 'src/app/Services/Order/order.service';

import { Order } from 'src/app/Models/Order';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.css']
})

export class PendientesComponent implements OnInit {

  orders: Order[] = [];
  
  constructor(
    private orderService : OrderService
  ) { }

  ngOnInit(): void {
    this.loadPendingOrders();
  }

  async loadPendingOrders(){
    let orders = await this.orderService.getPendingOrders();
    this.orders = orders;
    console.log(orders);
  }

  onFinish(order: any){
    this.orderService.finishOrder(order._id).subscribe(
      () => { 
        swal.fire("Orden Completada","",'success').then(function() {
          window.location.reload();
        });
    });
    // window.location.reload();
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

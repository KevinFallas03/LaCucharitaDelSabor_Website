import { Component, OnInit } from '@angular/core';
import { Delivery } from 'src/app/Models/Delivery';
import { environment } from '../../../environments/environment';
import { DeliveryService } from 'src/app/Services/delivery.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {


  //ATRIBUTOS
  public panelOpenState = false;
  public locations : Delivery[]  = [] ;
  public location = '';
  public email = '';

  constructor(private deliveryService : DeliveryService) { 
    this.loadDelivery();
  }

  ngOnInit(): void {
  }

  async loadDelivery(){
    let deliveries : Delivery[] = [];
    deliveries = await this.deliveryService.getAllDeliveries();
    this.locations = deliveries;    
  }

  openPanel(){
    this.panelOpenState = !this.panelOpenState;
  }

  onClick(){
    console.log(this.email,this.location);
  }

}

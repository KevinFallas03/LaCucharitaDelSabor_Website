import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  
  //ATRIBUTOS
  public email: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClick (){
    console.log(this.email);
  }
  

}

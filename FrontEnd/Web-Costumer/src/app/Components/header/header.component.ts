import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { CartService } from '../../Services/cart-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  //Atributos
  constructor(private cartService : CartService) { 
  }

  ngOnInit(): void {
    
  }

  get shoppingCart(): Product[] {
    return this.cartService.get();
  };


}



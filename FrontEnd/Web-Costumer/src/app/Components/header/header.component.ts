import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { CartService } from '../../Services/cart-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  //Atributos
  hidden = false;


  constructor(private cartService : CartService,public dialog: MatDialog) { 
  }

  ngOnInit(): void {
    
  }

  openShoppingCart() {
      this.hidden = !this.hidden;
      this.dialog.open(ShoppingCartComponent,{
      width: '75%',
      height: 'fit-content',
    });
  }

  get shoppingCart(): Product[] {
    return this.cartService.get();
  };


}



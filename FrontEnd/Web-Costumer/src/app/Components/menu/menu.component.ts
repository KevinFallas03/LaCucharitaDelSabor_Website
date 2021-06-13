import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { CartService } from '../../Services/cart-service.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public productList : Product[];
  public cart : Product[];
  public hidden : Boolean = false;
  public insertedSuccess : Boolean = false;
  public insertedFail : Boolean = false;

  constructor(private cartService: CartService) { 
    this.productList = this.loadProducts();
    this.cart = this.cartService.get();
    
  }

  ngOnInit(): void {
    
  }



  // FUNCIONES

  public loadProducts(): Product[]{
    let product:Product = {};
    product._id = '1';
    product.image = 'sasa';
    product.name = 'Torta Chilena';
    product.portions = 13;
    product.price = 13000;
    product.quant = 0;

    return [product,product,product,product,product];
  }

  public addProduct(product: Product){
    if (product.quant != undefined && product.quant > 0) {
      this.cart = this.cartService.get();
      this.cart.push(product);
      this.cartService.set(this.cart);
      this.insertedSuccess = true;
      this.insertedFail = false;
      }
  
      else{
        this.insertedSuccess = false;
        this.insertedFail = true;
      }
  }


  public add(product:Product): void {
    if (product.quant){
      product.quant = product.quant + 1;
    }

    else{
      product.quant = 1
    }
  }

  public substract(product:Product): void {
    if (product.quant){
      product.quant = product.quant - 1;
    }

    else{
      product.quant = 0
    }
  }

  close(){
    this.insertedFail = this.insertedSuccess = false;
  }
}

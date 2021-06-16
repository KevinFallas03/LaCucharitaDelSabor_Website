import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart-service.service';
import { Product } from 'src/app/Models/Product';
import { environment } from '../../../environments/environment';




@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  //Atributos
  apiUrl = environment.url + "/api/util/image/";
  cart : Product[] = this.shoppingCart;
  public insertedSuccess : Boolean = false;
  public insertedFail : Boolean = false;
  
  constructor(private cartService : CartService) { }

  get shoppingCart(): Product[] {
    return this.cartService.get();
  };

  ngOnInit(): void {
    console.log(this.shoppingCart);
  }

  public add(product:Product): void {
    if (product.quant){
      product.quant = product.quant + 1;
    }

    else{
      product.quant = 1
    }
    this.cartService.set(this.cart);
  }

  public substract(product:Product): void {
    if (product.quant){
      product.quant = product.quant - 1;
    }

    else{
      product.quant = 0
    }
    this.cartService.set(this.cart);
  }

  public deleteProduct(product: Product): void {
    let removeIndex : number = this.cart.indexOf(product);
    this.cart.splice(removeIndex);
    this.cartService.set(this.cart);
  }

  public getCost(product:Product): number{
    if(product.price && product.quant)
      return product.price*product.quant;
    else
      return 0;
  }

  public getTotal(): number {
    let sum : number = 0;

    this.shoppingCart.forEach(product => {
      sum += (this.getCost(product));
    });

    return sum;
  }

  public order(): void {
    if(this.cart.length != 0){
      console.log(this.cart);
      this.insertedSuccess = true;
      this.insertedFail = false;
    }
    else {
      this.insertedFail = true;
      this.insertedSuccess = false;
    }
  }

  close(){
    this.insertedFail = this.insertedSuccess = false;
  }

}

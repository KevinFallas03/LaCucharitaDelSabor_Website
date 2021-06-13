import { Injectable } from '@angular/core';
import { Product } from 'src/app/Models/Product';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  set(shoppingCart: Product[]) { 
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
   }
  get() {
    let cart : Product[] = JSON.parse(localStorage.getItem('shoppingCart') as string);

    if(cart)
      return cart;

    return []
    }
}

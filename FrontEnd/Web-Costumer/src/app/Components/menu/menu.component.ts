import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public productList : Product[];
  public cart : Product[];
  public hidden : Boolean = false;
  public product : Product = {"quant":0};

  constructor() { 
    this.productList = this.loadProducts();
    this.cart = this.retrieveData();
    
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
    this.cart.push(product);
    this.storeData();
  }

  public retrieveData(): []{
    if(localStorage.getItem("cart"))
      return JSON.parse(localStorage.getItem("cart") as string);

      
    return [];
  }

  public storeData(): void{
    localStorage.setItem("cart",JSON.stringify(this.cart));
    console.log(this.cart);
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
}

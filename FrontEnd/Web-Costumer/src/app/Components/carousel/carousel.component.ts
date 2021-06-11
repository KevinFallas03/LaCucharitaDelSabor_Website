import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  //ATRIBUTOS

  public productsLists : Product[][];
  public cart : Product[];
  public hidden : Boolean = false;

  constructor() { 
    this.productsLists = this.loadProducts();
    this.cart = this.retrieveData();
    
  }

  ngOnInit(): void {
    
  }



  // FUNCIONES

  public loadProducts(): Product[][]{
    let product:Product = {
      "_id" : '1',
    "image" : 'sasa',
    "name" : 'Torta Chilena',
    "portions" : 13,
    "price" : 13000,
    "quant" : 0
    };

    let product1:Product = {
      "_id" : '1',
    "image" : 'sasa',
    "name" : 'Torta Chilena',
    "portions" : 13,
    "price" : 13000,
    "quant" : 0
    };

    let product2:Product = {
      "_id" : '1',
    "image" : 'sasa',
    "name" : 'Torta Chilena',
    "portions" : 13,
    "price" : 13000,
    "quant" : 0
    };

    let product3:Product = {
      "_id" : '1',
    "image" : 'sasa',
    "name" : 'Torta Chilena',
    "portions" : 13,
    "price" : 13000,
    "quant" : 0
    };

    let product4:Product = {
      "_id" : '1',
    "image" : 'sasa',
    "name" : 'Torta Chilena',
    "portions" : 13,
    "price" : 13000,
    "quant" : 0
    };
    

    return [[product,product1],[product2,product3],[product4]];
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






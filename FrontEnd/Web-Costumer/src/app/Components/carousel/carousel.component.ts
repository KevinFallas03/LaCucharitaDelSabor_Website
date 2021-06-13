import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { CartService } from '../../Services/cart-service.service';



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
  public insertedSuccess : Boolean = false;
  public insertedFail : Boolean = false;


  constructor(private cartService: CartService,) { 
    this.productsLists = this.loadProducts();
    this.cart = this.cartService.get();
    
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

  public addProduct(product: Product,id: string){
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






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
    let product:Product = {};
    product._id = '1';
    product.image = 'sasa';
    product.name = 'Torta Chilena';
    product.portions = 13;
    product.price = 13000;

    return [[product,product],[product,product],[product]];
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
}






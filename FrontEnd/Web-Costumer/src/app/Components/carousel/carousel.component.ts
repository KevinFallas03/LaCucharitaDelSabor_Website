import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { CartService } from '../../Services/cart-service.service';
import { MenuService } from '../../Services/menu.service';
import { environment } from '../../../environments/environment';



@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  //ATRIBUTOS
  apiUrl = environment.url + "/api/util/image/";
  public productsLists : Product[][] = [];
  public cart : Product[];
  public hidden : Boolean = false;
  public insertedSuccess : Boolean = false;
  public insertedFail : Boolean = false;


  constructor(private cartService: CartService,private menuService: MenuService) { 
    
    this.loadProducts();
    this.cart = this.cartService.get();
    
  }

  ngOnInit(): void {
    
  }



  // FUNCIONES

  async loadProducts(){
    let products : Product[] = [];
    let productGroups : Product[][] = [];
    products = await this.menuService.getAllProducts();
    productGroups = this.getProductGroups(products);
    this.productsLists = productGroups;
  }

  public getProductGroups(products: Product[]): Product[][] {
    let productsGroups : Product[][] = [];
    let cont : number = 0;
    let group : Product[] = [];

    products.forEach(product => {
      product.quant = 0;
      if(cont < 2){
        group.push(product);
        cont += 1
      }

      else {
        productsGroups.push(group);
        group = [];
        group.push(product);
        cont = 1;
      }
    });

    if (group) {
      productsGroups.push(group);
    }

    return productsGroups
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



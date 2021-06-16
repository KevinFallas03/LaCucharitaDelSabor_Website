import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { CartService } from '../../Services/cart-service.service';
import { MenuService } from '../../Services/menu.service';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //Atributos 
  apiUrl = environment.url + "/api/util/image/";
  public productList : Product[] = [];
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
    let products : Product[] = await this.menuService.getAllProducts();
    
    products.forEach(product => {
      product.quant = 0;
    });

    this.productList = products;
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

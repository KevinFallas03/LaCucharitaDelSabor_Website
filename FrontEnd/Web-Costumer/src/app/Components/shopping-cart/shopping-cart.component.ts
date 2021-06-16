import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart-service.service';
import { Product } from 'src/app/Models/Product';
import { Delivery } from 'src/app/Models/Delivery';
import { Order } from 'src/app/Models/Order';
import { environment } from '../../../environments/environment';
import { DeliveryService } from 'src/app/Services/delivery.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { OrderService } from 'src/app/Services/order.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}




@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  //Atributos
  public apiUrl = environment.url + "/api/util/image/";
  public cart : Product[] = this.shoppingCart;
  public insertedSuccess : Boolean = false;
  public insertedFail : Boolean = false;
  public deliveriesList : Delivery[] = [];
  public selectedDelivery : Delivery = {};
  public email : string = "";
  public phone : string = "";
  public name : string = "";
  public orderNote : string = "";

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  
  constructor(private cartService : CartService,private deliveryService : DeliveryService,private orderService : OrderService) { 
    this.loadDelivery();
    
  }

  get shoppingCart(): Product[] {
    return this.cartService.get();
  };

  ngOnInit(): void {
    
  }

  async loadDelivery(){
    let deliveries : Delivery[] = [];
    deliveries = await this.deliveryService.getAllDeliveries();
    this.deliveriesList = deliveries;    
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

    if(this.selectedDelivery.price){
      sum += this.selectedDelivery.price;
    }
    return sum;
  }

  public order(): void {
    let order : Order = {
      orderNote : this.orderNote,
      orderInfo : this.cart,
      finished : false,
      totalAmount : this.getTotal(),
      deliveryInfo : this.selectedDelivery,
      customerInfo : {email : this.email,
                      contactInfo : { name : this.name,
                                      phone : this.phone

                      }}

    }
    
    if(this.completeOrder(order)){
      this.insertedSuccess = true;
      this.insertedFail = false;
      this.orderService.postOrder(order).subscribe();

    }

    else {
      this.insertedFail = true;
      this.insertedSuccess = false;
    }
    console.log(order);
  }

  close(){
    this.insertedFail = this.insertedSuccess = false;
  }

  completeOrder(order: Order) : boolean {
      
    
    return true;
  }

}

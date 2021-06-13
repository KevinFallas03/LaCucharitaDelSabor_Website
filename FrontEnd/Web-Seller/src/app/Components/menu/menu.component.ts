import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditProductComponent } from './edit-product/edit-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { Product } from 'src/app/Models/Product';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public productsLists : Product[][];
  public hidden : Boolean = false;
  
  public products = [
    {name:"Tiramisú",price:14000,portions:16,image:"https://i.imgur.com/MjnbeUg.png"},
    {name:"Prestiño",price:5000,portions:5,image:"https://i.imgur.com/6ybxzES.png"},
    {name:"Prestiño",price:5000,portions:5,image:"https://i.imgur.com/6ybxzES.png"},
    {name:"Tiramisú",price:14000,portions:16,image:"https://i.imgur.com/MjnbeUg.png"},
    {name:"Prestiño",price:5000,portions:5,image:"https://i.imgur.com/6ybxzES.png"},
    {name:"Prestiño",price:5000,portions:5,image:"https://i.imgur.com/6ybxzES.png"},
    {name:"Prestiño",price:5000,portions:5,image:"https://i.imgur.com/6ybxzES.png"},
    {name:"Tiramisú",price:14000,portions:16,image:"https://i.imgur.com/MjnbeUg.png"},
    {name:"Prestiño",price:5000,portions:5,image:"https://i.imgur.com/6ybxzES.png"},
    {name:"Prestiño",price:5000,portions:5,image:"https://i.imgur.com/MjnbeUg.png"}
  ];

  constructor(private dialog: MatDialog) {
    this.productsLists = this.loadProducts();
   }
  
  ngOnInit(): void {
  }

  slideConfig = {
    "slidesToShow": 3, 
    "slidesToScroll": 3, 
    "arrows":true,
    prevArrow:"<button type='button' class='slick-prev pull-left' style='font-family: slick; font-size: 40px; line-height: 1; color: #90694A;'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right' style='font-family: slick; font-size: 40px; line-height: 1; color: #90694A;'><i class='fa fa-angle-right' aria-hidden='true'></i></button>", 
    "rows":3, 
    "dots":true
  };
  
  slickInit(e: any) {
    console.log('slick initialized');
  }
    
  breakpoint(e: any) {
    console.log('breakpoint');
  }
    
  afterChange(e: any) {
    console.log('afterChange');
  }
    
  beforeChange(e: any) {
    console.log('beforeChange');
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    //dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    //dialogConfig.width = "60%";
    this.dialog.open(CreateProductComponent, dialogConfig);
  }

  onEdit(product: Product) {
    const dialogConfig = new MatDialogConfig();
    //dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    //dialogConfig.width = "60%";
    this.dialog.open(EditProductComponent, dialogConfig);
  }

  public loadProducts(): Product[][]{
    let product:Product = {};
    product._id = '1';
    product.image = 'https://i.imgur.com/MjnbeUg.png';
    product.name = 'Torta Chilena';
    product.portions = 13;
    product.price = 13000;


    return [[product,product,product],[product,product,product],[product]];
  }

}

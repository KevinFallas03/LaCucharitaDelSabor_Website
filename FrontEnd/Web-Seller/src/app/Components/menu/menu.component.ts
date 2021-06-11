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
  ];

  constructor(private dialog: MatDialog) {
    this.productsLists = this.loadProducts();
   }
  
  ngOnInit(): void {
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

import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditProductComponent } from './edit-product/edit-product.component';
import { CreateProductComponent } from './create-product/create-product.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public products = [
    {name:"Tiramisú",price:14000,portions:16,image:"https://i.imgur.com/MjnbeUg.png"},
    {name:"Prestiño",price:5000,portions:5,image:"https://i.imgur.com/6ybxzES.png"},
    {name:"Prestiño",price:5000,portions:5,image:"https://i.imgur.com/6ybxzES.png"},
  ];

  constructor(private dialog: MatDialog) { }
  
  ngOnInit(): void {
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    //dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    //dialogConfig.width = "60%";
    this.dialog.open(CreateProductComponent, dialogConfig);
  }

  onEdit() {
    const dialogConfig = new MatDialogConfig();
    //dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    //dialogConfig.width = "60%";
    this.dialog.open(EditProductComponent, dialogConfig);
  }

}

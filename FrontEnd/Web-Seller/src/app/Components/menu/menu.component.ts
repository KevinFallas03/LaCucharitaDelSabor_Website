import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditProductComponent } from './edit-product/edit-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import swal from 'sweetalert2';

import { MenuService } from 'src/app/Services/Menu/menu.service'

import { Product } from 'src/app/Models/Product';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  
  apiUrl = environment.url + "/api/util/image/";
  products!: Product[];

  constructor(
    private dialog: MatDialog,
    public menuService: MenuService
  ) { }
  
  ngOnInit(): void {
    this.fillProductList();
  }

  slideConfig = {
    "slidesToShow": 3, 
    "slidesToScroll": 3, 
    "arrows":true,
    prevArrow:"<button type='button' class='slick-prev pull-left' style='font-family: slick; font-size: 40px; line-height: 1; color: #90694A;'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right' style='font-family: slick; font-size: 40px; line-height: 1; color: #90694A;'><i class='fa fa-angle-right' aria-hidden='true'></i></button>", 
    "rows":2, 
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
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    //dialogConfig.width = "60%";
    //this.dialog.open(CreateProductComponent, dialogConfig);
    const dialogRef = this.dialog.open(CreateProductComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(() => { this.fillProductList(); } );
    
  }

  onEdit(product: Product) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = product;
    this.dialog.open(EditProductComponent, dialogConfig);
  }

  onDelete(product: Product) {
    console.log(product._id);
    this.menuService.deleteById(product._id).subscribe(
      () => { 
        swal.fire("Producto eliminado","",'success').then(function() {
          window.location.reload();
        });
      }
    );
  }

  fillProductList(){
    this.menuService.getAllProducts().subscribe(
        data => {
          this.products = data;
        }
      );
  }

  getImage(product: Product) {
    let url = "url(" + this.apiUrl + "/api/util/image/" + product.image + ")"as string;
    return url;
  }

}

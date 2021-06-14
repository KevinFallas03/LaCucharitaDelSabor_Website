import { Component, OnInit } from '@angular/core';
import { EditDeliveryComponent } from './edit-delivery/edit-delivery.component';
import { CreateDeliveryComponent } from './create-delivery/create-delivery.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { Delivery } from 'src/app/Models/Delivery'


@Component({
  selector: 'app-envios',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.css']
})
export class EnviosComponent implements OnInit {

  //ATRIBUTOS
  public panelOpenState = false;
  public deliveries = [
    {"location":"Heredia, Barrio Limón","price":"1500"},
    {"location":"Puntarenas, Guapiles","price":"3500"},
    {"location":"Cartago, Cartago","price":"3500"},
    {"location":"Guanacaste, Monteverde","price":"3500"}
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
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
    //dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    //dialogConfig.width = "60%";
    //this.dialog.open(Create  Component, dialogConfig);
  }

  onEdit( ) {
    const dialogConfig = new MatDialogConfig();
    //dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    //dialogConfig.width = "60%";
    this.dialog.open(EditDeliveryComponent, dialogConfig);
  }

}

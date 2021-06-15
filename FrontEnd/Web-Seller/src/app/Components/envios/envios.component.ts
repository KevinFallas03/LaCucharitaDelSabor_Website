import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditDeliveryComponent } from './edit-delivery/edit-delivery.component';
import { CreateDeliveryComponent } from './create-delivery/create-delivery.component';
import swal from 'sweetalert2';

import { DeliveryService } from 'src/app/Services/Delivery/delivery.service';

import { Delivery } from 'src/app/Models/Delivery';


@Component({
  selector: 'app-envios',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.css']
})
export class EnviosComponent implements OnInit {

  //ATRIBUTOS
  public panelOpenState = false;
  deliveries!: Delivery[];
  
  constructor(
    private dialog: MatDialog,
    public deliveryService: DeliveryService
  ) { }

  ngOnInit(): void {
    this.fillDeliveryList();
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
    //this.dialog.open(CreateDeliveryComponent, dialogConfig);
    const dialogRef = this.dialog.open(CreateDeliveryComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(() => { this.fillDeliveryList(); } );
  }

  onEdit(delivery: Delivery) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = delivery;
    this.dialog.open(EditDeliveryComponent, dialogConfig);
  }

  onDelete(delivery: Delivery) {
    this.deliveryService.deleteById(delivery._id).subscribe(
      () => { 
        swal.fire("Envio eliminado","",'success');
      }
    );
    window.location.reload(); 
  }

  fillDeliveryList(){
    this.deliveryService.getAllDeliveries().subscribe(
      data => {
        this.deliveries = data;
      }
    );
  }

}

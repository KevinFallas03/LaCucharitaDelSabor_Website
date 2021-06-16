import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import swal from 'sweetalert2';

import { DeliveryService } from 'src/app/Services/Delivery/delivery.service';

import { Delivery } from 'src/app/Models/Delivery'

@Component({
  selector: 'app-create-delivery',
  templateUrl: './create-delivery.component.html',
  styleUrls: ['./create-delivery.component.css']
})
export class CreateDeliveryComponent implements OnInit {

  form: FormGroup = new FormGroup({
    location: new FormControl(),
    price: new FormControl(),
  });

  delivery:Delivery = {
    location: '',
    price: 0
  }

  constructor(
    public dialogRef: MatDialogRef<CreateDeliveryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Delivery,
    public deliveryService: DeliveryService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.delivery.location = this.form.controls['location'].value;
    this.delivery.price = this.form.controls['price'].value;
    this.onSave();
    this.dialogRef.close();
  }

  onSave(){
    this.form.reset();
    this.deliveryService.postDelivery(this.delivery).subscribe(
      data => {
        swal.fire("Añadido", "El envio " + data.location + " se ha añadido.", 'success').then(function() {
          window.location.reload();
        });;
      }
    );
    this.deliveryService.getAllDeliveries().subscribe(
      data =>{
        swal.fire("Añadido", "El envio " + data.location + " se ha añadido.", 'success').then(function() {
          window.location.reload();
        });;
      }
    );

  }

  onClose(){
    this.form.reset();
    this.dialogRef.close();
    window.location.reload();
  }

}

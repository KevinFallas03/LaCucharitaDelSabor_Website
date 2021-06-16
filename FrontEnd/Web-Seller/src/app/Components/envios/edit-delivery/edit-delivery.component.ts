import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import swal from 'sweetalert2';

import { DeliveryService } from 'src/app/Services/Delivery/delivery.service';

import { Delivery } from 'src/app/Models/Delivery'

@Component({
  selector: 'app-edit-delivery',
  templateUrl: './edit-delivery.component.html',
  styleUrls: ['./edit-delivery.component.css']
})
export class EditDeliveryComponent implements OnInit {
  
  form: FormGroup = new FormGroup({
    location: new FormControl(),
    price: new FormControl(),
  });

  delivery:Delivery = {
    location: '',
    price: 0
  };

  constructor(
    public dialogRef: MatDialogRef<EditDeliveryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Delivery,
    public deliveryService: DeliveryService
  ) { }

  ngOnInit(): void {
    this.initializeFormGroup(this.data);
  }

  onSubmit(){
    this.delivery.location = this.form.controls['location'].value;
    this.delivery.price = this.form.controls['price'].value;
    console.log("Aqui 1");
    this.onSave();
    this.dialogRef.close();
  }

  onSave(){
    var deliveries;
    this.form.reset();
    console.log(this.data._id);
    this.deliveryService.findByIdAndUpdate(this.data._id, this.delivery).subscribe(
     () => {
        swal.fire("Editado", "La zona de envio se ha editado correctamente.", 'success').then(function() {
          window.location.reload();
        });
      }
    );
    this.deliveryService.getAllDeliveries().subscribe(
      () => {console.log("actulizando productos")}
    )

  }

  initializeFormGroup(data: Delivery){
    console.log(data);
    this.form.setValue({
      location: data.location,
      price: data.price,
    });
  }

  onClose(){
    this.dialogRef.close();
    window.location.reload();
  }

}

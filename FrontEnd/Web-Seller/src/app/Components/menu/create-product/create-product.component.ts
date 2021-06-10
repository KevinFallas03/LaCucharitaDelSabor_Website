import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})

export class CreateProductComponent implements OnInit {
  image: any;
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl(''),
    price: new FormControl(''),
    portions: new FormControl('')
  })

  constructor(public dialogRef: MatDialogRef<CreateProductComponent>) { }

  ngOnInit(): void {
  }

  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image = file;
    }
  }

  onSubmit(){
    const formData = new FormData();
    formData.append('file', this.image);
  }


}
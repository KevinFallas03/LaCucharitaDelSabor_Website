import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import swal from 'sweetalert2';

import { UtilsService } from 'src/app/Services/Utils/utils.service' 
import { MenuService } from 'src/app/Services/Menu/menu.service'

import { Product } from 'src/app/Models/Product'

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})

export class CreateProductComponent implements OnInit {

  imageData:FormData = new FormData();
  imagePreview: any;

  form: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    portions: new FormControl()
  });

  product:Product = {
    name: '',
    price: 0,
    portions: 0,
    image: ''  
  }

  constructor(
    public dialogRef: MatDialogRef<CreateProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    public utilsImageService: UtilsService,
    public menuService: MenuService 
  ) { }

  ngOnInit(): void {
    this.imagePreview = "assets/Images/Product D.png"
  }

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.imageData.append('imageFile', file);
      const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
      if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
    }
  }

  onSubmit(){
    this.utilsImageService.postImage(this.imageData).subscribe( 
      data => {
        this.product.image = data.imageName;
        this.product.name = this.form.controls['name'].value;
        this.product.price = this.form.controls['price'].value;
        this.product.portions = this.form.controls['portions'].value;
        this.onSave();
      }
    );
    this.dialogRef.close();
  }

  onSave(){

    this.form.reset();
    this.menuService.postProduct(this.product).subscribe(
      data => {
        swal.fire("Añadido", "El producto " + data.name+" se ha añadido.", 'success').then(function() {
          window.location.reload();
        });
      }
    );
    this.menuService.getAllProducts().subscribe(
      () => {console.log("actualizando productos")}
    );
    
  }

  onClose(){
    this.form.reset();
    this.dialogRef.close();
    window.location.reload();
  }

}
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import swal from 'sweetalert2';

import { UtilsService } from 'src/app/Services/Utils/utils.service' 
import { MenuService } from 'src/app/Services/Menu/menu.service'

import { Product } from '../../../Models/Product'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  
  imageData:FormData = new FormData();
  imagePreview: any;
  imageResponse: any;

  form: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    portions: new FormControl(),
  });

  product:Product = {
    name: '',
    price: 0,
    portions: 0,
    image: ''  
  }

  constructor(
    public dialogRef: MatDialogRef<EditProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    public utilsImageService: UtilsService,
    public menuService: MenuService
  ) {  }

  ngOnInit(): void {
    this.initializeFormGroup(this.data);
  }

  initializeFormGroup(data: Product){
    console.log(data);
    this.form.setValue({
      name: data.name, // this.data.name
      price: data.price,
      portions: data.portions
    });
    this.imagePreview = environment.url+ "/api/util/image/" + data.image as string;
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
    if(!this.imageData){
      console.log('Cambio imagen');
      this.utilsImageService.postImage(this.imageData).subscribe( 
        response => {
          this.product.image = response.imageName;
          this.product.name = this.form.controls['name'].value;
          this.product.price = this.form.controls['price'].value;
          this.product.portions = this.form.controls['portions'].value;
          this.onSave();
        }
      );
    }else{
      console.log('NO Cambio imagen');
      this.product.image = this.data.image;
      this.product.name = this.form.controls['name'].value;
      this.product.price = this.form.controls['price'].value;
      this.product.portions = this.form.controls['portions'].value;
      this.onSave();
    }
    
    this.dialogRef.close();
    
  }

  onSave(){
    this.form.reset();
    console.log(this.data._id);
    this.menuService.findByIdAndUpdate(this.data._id, this.product).subscribe(
     () => {
        swal.fire("Editado", "El producto se ha editado correctamente.", 'success').then(function() {
          window.location.reload();
        });
      }
    );
  }

  onClose(){
    this.dialogRef.close();
    window.location.reload();
  }


}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  image: any;
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl(''),
    price: new FormControl(''),
    portions: new FormControl('')
  })

  constructor() { this.image = 'https://i.imgur.com/MjnbeUg.png' }

  ngOnInit(): void {
  }
  
  selectImage(event: any) {
    if (event.target.files.length > 0) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(e:any) => {
        this.image = e.target.result;
      }
    }
  }

  onSubmit(){
    const formData = new FormData();
    formData.append('file', this.image);
  }

  // initializeFormGroup(){
  //   this.form.setValue({
  //     $key: null,
  //     name: 'Tres leches', // this.data.name
  //     price: '1200',
  //     portions: '5'
  //   });
  // }


}

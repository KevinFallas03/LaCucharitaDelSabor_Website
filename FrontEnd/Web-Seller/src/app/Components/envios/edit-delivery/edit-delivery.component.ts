import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-delivery',
  templateUrl: './edit-delivery.component.html',
  styleUrls: ['./edit-delivery.component.css']
})
export class EditDeliveryComponent implements OnInit {
  image: any;
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    location: new FormControl(''),
    price: new FormControl(''),
  })

  constructor() { }

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

}

import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import swal from 'sweetalert2';

import { AuthService } from 'src/app/Services/AuthService/auth.service';
import { UserService } from 'src/app/Services/User/user.service';

import { UserAuth } from 'src/app/Models/userAuth';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {


  imagePreview: any;
  imageName: any;
  imagePath = "assets/Images/";
  

  form: FormGroup = new FormGroup({
    name: new FormControl(),
    jobTitle: new FormControl(),
    email: new FormControl(),
    password: new FormControl(null)
  });

  user:User = {
    name: '',
    email: '',
    jobTitle: '',
    isAdmin: false,
    image: ''
  }
  
  
  constructor(
    public dialogRef: MatDialogRef<CreateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    public authService: AuthService,
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.imagePreview = "assets/Images/Profile D.png"
  }

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
      if (file && allowedMimeTypes.includes(file.type)) {
        const reader = new FileReader();
        reader.onload = () => {
          this.imagePreview = reader.result as string;
          this.imageName = file.name;
        };
        reader.readAsDataURL(file);
      }
    }
  }

  onSubmit(){
    var tempUser = {
      name: this.form.controls['name'].value,
      email: this.form.controls['email'].value, 
      jobTitle: this.form.controls['jobTitle'].value,
      password: this.form.controls['password'].value,
      isAdmin: this.isAdmin(), 
      image: this.imageName
    }
    this.authService.createUser(tempUser).subscribe( 
      () => {
        console.log("usuario en la base de datos de usuarios creado");
      }
    );
    this.userService.postUser(tempUser).subscribe( 
      () => {
        console.log("usuario en la base de datos de creado");
      }
    );
    swal.fire("Editado", "El usuario se ha creado correctamente.", 'success').then(function() {
      window.location.reload();
    });

    this.dialogRef.close();
   
  }

  isAdmin(){
    var jobTitle = this.form.controls['jobTitle'].value.toLowerCase();
    if (jobTitle === "administrador" || jobTitle === "administradora")
      return true;
    else
      return false;
  }

  onClose(){
    this.dialogRef.close();
    window.location.reload();
  }

}

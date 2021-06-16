import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import swal from 'sweetalert2';

import { AuthService } from 'src/app/Services/AuthService/auth.service';
import { UserService } from 'src/app/Services/User/user.service';

import { UserAuth } from 'src/app/Models/userAuth';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  imageData:FormData = new FormData();

  imagePreview: any;
  imagePath = "../../../assets/Images/";

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
    public dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    public authService: AuthService,
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.initializeFormGroup(this.data);
  }
  
  initializeFormGroup(data: User){
    console.log(data);
    this.form.setValue({
      name: data.name,
      email: data.email, 
      jobTitle: data.jobTitle,
      password: ''
    });
    this.imagePreview = this.imagePath + data.image as string;
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
    if(!this.form.controls['password'].value){
      var tempUserAuth = {
        name: this.form.controls['name'].value,
        email: this.form.controls['email'].value, 
        jobTitle: this.form.controls['jobTitle'].value,
        password: this.form.controls['password'].value,
        isAdmin: this.isAdmin(), 
        image: this.imagePreview
      }
      this.authService.updateUserAuth(tempUserAuth).subscribe( 
        () => {
          console.log("contraseña actualizada");
        }
      );
      this.userService.findByIdAndUpdate(this.data._id, tempUserAuth).subscribe( 
        () => {
          console.log("información del usuario actualizada");
        }
      );
      swal.fire("Editado", "El usuario se ha editado correctamente.", 'success');
    }else{
      var tempUser = {
        name: this.form.controls['name'].value,
        email: this.form.controls['email'].value, 
        jobTitle: this.form.controls['jobTitle'].value,
        isAdmin: this.isAdmin(), 
        password: '',
        image : this.imagePreview
      }
      this.authService.updateUserAuth(tempUser).subscribe( 
        () => {
          console.log("contraseña actualizada");
        }
      );
      this.userService.findByIdAndUpdate(this.data._id, tempUser).subscribe( 
        () => {
          console.log("información del usuario actualizada");
        }
      );
      swal.fire("Editado", "El usuario se ha editado correctamente.", 'success');
    }
    
    this.dialogRef.close();
    window.location.reload();
  }

  isAdmin(){
    var jobTitle = this.form.controls['jobTitle'].value.toLowerCase();
    if (jobTitle === "administrador")
      return true;
    else
      return false;
  }

  onClose(){
    this.dialogRef.close();
    window.location.reload();
  }

}

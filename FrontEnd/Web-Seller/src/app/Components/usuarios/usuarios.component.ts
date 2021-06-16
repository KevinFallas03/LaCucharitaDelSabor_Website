import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import swal from 'sweetalert2';

import { UserService } from 'src/app/Services/User/user.service'
import { AuthService } from 'src/app/Services/AuthService/auth.service'

import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  // ATRIBUTOS
  imagePath = "../../../assets/Images/";
  users!: User[];

  constructor(
    private dialog: MatDialog,
    public userService: UserService,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.fillUsersList();
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

    const dialogRef = this.dialog.open(CreateUserComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(() => { this.fillUsersList(); } );
  }

  onEdit(user: User) {
    console.log(user);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = user;
    this.dialog.open(EditUserComponent, dialogConfig);
  }

  onDelete(user: User) {
    this.authService.deleteUser(user.email);
    this.userService.deleteById(user._id).subscribe(
      () => { 
        swal.fire("Usuario eliminado","",'success');
      }
    );
    
    window.location.reload(); 
  }

  fillUsersList() {
    this.userService.getAllUsers().subscribe(
      data => {
        this.users = data;
      }
    );
  }

}

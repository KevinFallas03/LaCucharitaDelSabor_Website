import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotificationTrayComponent } from '../notification-tray/notification-tray.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //ATRIBUTOS

  hidden = false;

  constructor(private routerService: Router, private _snackBar: MatSnackBar,public dialog: MatDialog) { }

  ngOnInit(): void {
    
  }

  
  //FUNCIONES

  openNotificationTray() {
    this.hidden = !this.hidden;
    this.dialog.open(NotificationTrayComponent,{
      width: '400px',
      height: '500px',
      position: {top:'120px',right:'135px'}
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  logout(){
    localStorage.clear();
    this.routerService.navigateByUrl('/');
    this.openSnackBar('Has cerrado sesión','Cerrar');
  }

 

  
}


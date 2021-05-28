import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private routerService: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  onLoginClick(){
    this.routerService.navigateByUrl('/dashboard');
    this.openSnackBar('Autenticado exitosamente','Cerrar');
  }

}

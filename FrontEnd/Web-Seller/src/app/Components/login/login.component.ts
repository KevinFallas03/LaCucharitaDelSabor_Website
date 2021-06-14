import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserAuth }  from 'src/app/Models/userAuth';
import { AuthService } from 'src/app/Services/AuthService/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Atributos
  public user: UserAuth;
  public email: string = '';
  public password: string = '';

  constructor(
    private authService: AuthService,
    private routerService: Router,
    private _snackBar: MatSnackBar) {
      this.user = {};
     }

  ngOnInit(): void {
    if (this.authService.getIsAuthenticated()) {
      if (this.authService.getCurrentUser().isAdmin) {
        this.routerService.navigateByUrl('/dashboard');
      } else {
        this.routerService.navigateByUrl('/dashboard');
      }
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  onLoginClick(){

    this.user = {
      email: this.email,
      password: this.password,
    };
    
    console.log(this.user);

    this.authService.authenticateUser(this.user).subscribe(
      (res) => {
        console.log(1);
        this.authService.setAuthenticationToken(res.token);
        this.routerService.navigateByUrl('/dashboard');
        this.openSnackBar('Autenticado exitosamente','Cerrar');
      },
      (error) => {
        this.openSnackBar('Credenciales Inválidas','Cerrar');
      }
    );
  
    
    
  }

}

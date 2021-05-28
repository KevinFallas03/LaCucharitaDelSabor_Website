import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';


const MaterialComponents = [ 
  MatButtonModule,
  MatInputModule,
  MatSnackBarModule,
  MatSidenavModule,
];

@NgModule({
  imports: [MaterialComponents],
  exports : [MaterialComponents]
})
export class MaterialModule { }

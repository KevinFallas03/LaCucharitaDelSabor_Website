import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const MaterialComponents = [ 
  MatButtonModule,
  MatInputModule,
  MatSnackBarModule,
];

@NgModule({
  imports: [MaterialComponents],
  exports : [MaterialComponents]
})
export class MaterialModule { }

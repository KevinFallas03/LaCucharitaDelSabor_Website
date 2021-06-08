import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';


const MaterialComponents = [ 
  MatButtonModule,
  MatInputModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatIconModule,
  MatBadgeModule,
  MatDialogModule,
  MatMenuModule,
  MatGridListModule,
  MatTableModule,
];

@NgModule({
  imports: [MaterialComponents],
  exports : [MaterialComponents]
})
export class MaterialModule { }

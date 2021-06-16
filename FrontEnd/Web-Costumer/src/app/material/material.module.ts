import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge'
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';




const MaterialComponents = [ 
  MatButtonModule,
  MatDividerModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatExpansionModule,
  MatGridListModule,
  MatDialogModule,
  MatBadgeModule,
  MatOptionModule,
  MatSelectModule
  
];

@NgModule({
  imports: [MaterialComponents],
  exports : [MaterialComponents]
})
export class MaterialModule { }

import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';




const MaterialModules = [
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatCardModule,
  MatCheckboxModule
]

@NgModule({
  imports: [
    MaterialModules
  ],
  exports: [
    MaterialModules
  ]
})
export class MaterialModule { }

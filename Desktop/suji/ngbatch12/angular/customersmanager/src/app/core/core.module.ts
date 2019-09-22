import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { DataService } from './services/data.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports:[NavbarComponent],
  providers:[DataService]
})
export class CoreModule { }

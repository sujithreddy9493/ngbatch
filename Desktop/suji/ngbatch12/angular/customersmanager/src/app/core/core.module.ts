import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { DataService } from './services/data.service';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule
  ],
  exports:[NavbarComponent],
  providers:[DataService]
})
export class CoreModule { }

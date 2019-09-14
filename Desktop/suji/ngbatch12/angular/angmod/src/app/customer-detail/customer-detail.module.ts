import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDetailComponent } from './customer-detail.component';



@NgModule({
  declarations: [CustomerDetailComponent],
  imports: [
    CommonModule
  ],
  exports:[CustomerDetailComponent]
})
export class CustomerDetailModule { }

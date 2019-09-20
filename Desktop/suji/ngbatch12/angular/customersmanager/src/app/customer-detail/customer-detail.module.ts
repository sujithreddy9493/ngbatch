import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { CustomerDetailRoutingModule } from './customer-detail-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { CustomerOrderComponent } from './customer-order.component';
import { EditcustomerComponent } from './editcustomer.component';


@NgModule({
  declarations: [CustomerComponent, CustomerDetailComponent, CustomerOrderComponent, EditcustomerComponent],
  imports: [
    CommonModule,
    CustomerDetailRoutingModule,
    FormsModule
  ]
})
export class CustomerDetailModule { }

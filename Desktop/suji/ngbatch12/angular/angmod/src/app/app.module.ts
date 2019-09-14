import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomersModule } from './customers/customers.module';
import { CustomerDetailModule } from './customer-detail/customer-detail.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomersModule,
    CustomerDetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { CustomerOrderComponent } from './customer-order.component';
import { EditcustomerComponent } from './editcustomer.component';
import { CanActivateGaurd } from './canactivategaurd';
import { CanDeactivateGaurd } from './candeactivategaurd';


const routes: Routes = [
  {
    path:'',
    component:CustomerComponent,
    children:[
      {path:'detail',component:CustomerDetailComponent},
      {path:'order',component:CustomerOrderComponent},
      {
        path:'edit',
        component:EditcustomerComponent,
        canActivate:[CanActivateGaurd],
        canDeactivate:[CanDeactivateGaurd]
       
      },
    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerDetailRoutingModule { }

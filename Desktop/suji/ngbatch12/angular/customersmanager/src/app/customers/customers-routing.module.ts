import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent} from './customers.component'
import { CustomerscardviewComponent } from './customerscardview.component';
import { CustomerslistviewComponent } from './customerslistview.component';


const routes: Routes = [
  {path:'',
  component:CustomersComponent,
   children:[
     {path:'card',component:CustomerscardviewComponent},
     {path:'list',component:CustomerslistviewComponent},

   ] 
   
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }

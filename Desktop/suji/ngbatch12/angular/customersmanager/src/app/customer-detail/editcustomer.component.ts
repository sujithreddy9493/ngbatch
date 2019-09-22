import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../core/services/data.service';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css']
})
export class EditcustomerComponent implements OnInit {

  constructor(private route:ActivatedRoute,private dataService:DataService) {
    console.log('route',route);
  }

  CustomerInfo;
  ngOnInit() {
    // this.route.parent.params.pipe(map(p => p.id))
    this.route.parent.params.pipe(map(p => p.id)).subscribe((data) => {
      this.dataService.getCustomerDataById(data).subscribe((cust)=>{
        this.CustomerInfo = cust;
        console.log(this.CustomerInfo);
      });

    });
   
  }
      
  formDetails(d){
    console.log(d);
  

}
}
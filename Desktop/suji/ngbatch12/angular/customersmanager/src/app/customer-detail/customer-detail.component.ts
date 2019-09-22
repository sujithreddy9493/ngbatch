import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DataService } from '../core/services/data.service';
@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  
  constructor(private route:ActivatedRoute,private dataService:DataService) {
    console.log('route',route);
  }
  CustomerDetailedInfo;
  ngOnInit() {
    // this.route.parent.params.pipe(map(p => p.id))
    this.route.parent.params.pipe(map(p => p.id)).subscribe((data) => {
      this.dataService.getCustomerDataById(data).subscribe((cust)=>{
        this.CustomerDetailedInfo = cust;
        console.log(this.CustomerDetailedInfo);
      });

    });
    
  }



}

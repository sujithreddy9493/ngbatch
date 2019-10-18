import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { DataService } from '../core/services/data.service';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css']
})
export class EditcustomerComponent implements OnInit {

  constructor(private router: Router, private route:ActivatedRoute,private dataService:DataService) {
    console.log('route',route);
  }
 // @ViewChild('firstName',{static:false}) firstnamemodel;
  CustomerInfo;
  firstNameData;
  ngOnInit() {
    // this.route.parent.params.pipe(map(p => p.id))
    this.route.parent.params.pipe(map(p => p.id)).subscribe((data) => {
      this.dataService.getCustomerDataById(data).subscribe((cust)=>{
        this.CustomerInfo = cust;
        this.firstNameData = this.CustomerInfo.firstName;
        this.firstNameData = this.CustomerInfo.lastName;
        this.firstNameData = this.CustomerInfo.address;
        this.firstNameData = this.CustomerInfo.city;
        this.firstNameData = this.CustomerInfo.state.name;
        //console.log(this.firstnamemodel.value)
      //console.log  (this.firstnamemodel.value = this.CustomerInfo.firstName);
      });

    });
   
  }
      
  formDetails(d){
    console.log(d);
  

}
leavePage(){
  this.router.navigate(['/customers/cardview/1/detail']);
}
submit(){
  this.route.parent.params.pipe(map(p => p.id)).subscribe((data) => {
    this.CustomerInfo.firstName = 'krishna';
    this.CustomerInfo.lastName ='radhe'
    this.dataService.updateCustomer(this.CustomerInfo).subscribe(()=>{
      this.router.navigate(['customers/cardview']);
    });
  });
}
delete(){
  this.route.parent.params.pipe(map(p => p.id)).subscribe((data)=>{
    this.dataService.deleteCustomer(data).subscribe(()=>{
      this.router.navigate(['customers/cardview']);
    })
  })
}
}
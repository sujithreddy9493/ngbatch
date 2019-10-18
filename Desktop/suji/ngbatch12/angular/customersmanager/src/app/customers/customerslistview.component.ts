import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { SorterService } from '../core/services/sorter.services';
@Component({
  selector: 'app-customerslistview',
  templateUrl: './customerslistview.component.html',
  styleUrls: ['./customerslistview.component.css']
})
export class CustomerslistviewComponent implements OnInit {

  constructor(private dataService: DataService,private sorterService:SorterService) { }
  customersData;
  ngOnInit() {
    this.dataService.getCustomersData().subscribe((data)=>{
        this.customersData = data;
    })
  }
  sort(prop:string){
    console.log('sort method being called');
    this.sorterService.sort(this.customersData, prop);


}
}
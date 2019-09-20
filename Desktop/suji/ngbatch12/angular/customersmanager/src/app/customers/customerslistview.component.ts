import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';
@Component({
  selector: 'app-customerslistview',
  templateUrl: './customerslistview.component.html',
  styleUrls: ['./customerslistview.component.css']
})
export class CustomerslistviewComponent implements OnInit {

  constructor(private dataService: DataService) { }
  customersData;
  ngOnInit() {
    this.dataService.getCustomersData().subscribe((data)=>{
        this.customersData = data;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';
@Component({
  selector: 'app-customerscardview',
  templateUrl: './customerscardview.component.html',
  styleUrls: ['./customerscardview.component.css']
})
export class CustomerscardviewComponent implements OnInit {

  constructor(private dataService: DataService) { }
  customersData;
  ngOnInit() {
    this.dataService.getCustomersData().subscribe((data) => {
      this.customersData = data;
    });
  }

}

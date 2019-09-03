import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
 @Input() customerData;
 @Output() shareData: EventEmitter<number[]> = new EventEmitter();
 content = [0,1,2,3]
 sendData(){
  
  this.shareData.emit(this.content);
}

  constructor() { }

  ngOnInit() {
    console.log(this.customerData);
  }
 
}

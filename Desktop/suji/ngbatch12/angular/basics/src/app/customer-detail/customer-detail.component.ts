import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit, OnChanges {
num =10;
 @Input() customerData;
 @Output() shareData: EventEmitter<{ name: string}[]> = new EventEmitter();
 content = [{name: 'Balaram'}];
 ngOnChanges(obj){
  console.log(obj);
 }
 sendData(){
  
  this.shareData.emit(this.content);
}

  constructor() { 
    console.log('customer-detial component constructor');
   }

  ngOnInit() {
    console.log(this.customerData);
  }
  ngDoCheck(prev, cur){
    console.log('this.customerData', this.customerData , prev , cur);
  }
 
}

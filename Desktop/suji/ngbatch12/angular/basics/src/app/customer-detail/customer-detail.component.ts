import { Component, OnInit, Input, Output, OnChanges, ViewChild, ContentChild, ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit, OnChanges {
num =10;
 @ViewChild('wrapper',{static:false}) wrapper:ElementRef;
 @ContentChild('content',{static:false}) content1:ElementRef;
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
    
    console.log('ngOninit',this.customerData);
    console.log('this.wrapper ngOninit',this.wrapper, this.content1);
  }
  ngDoCheck(prev, cur){
    this.customerData.push({name:'krishna'})
    console.log('this.customerData ngdocheck', this.customerData , prev , cur);
  }
  ngAfterContentInit(){
    console.log('this.wrapper ngaftercontentinit',this.wrapper, this.content1);
  }
  ngAfterContentChecked(){
    console.log("this.ngAfterContentchecked ")
  }
  ngAfterViewInit(){
    console.log('this.wrapper ngafterviewinit',this.wrapper, this.content1);
  }
  ngAfterViewChecked(){
    console.log("this.ngAfterviewchecked ")
  }
}

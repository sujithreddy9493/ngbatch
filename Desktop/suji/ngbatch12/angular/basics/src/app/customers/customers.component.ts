import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  data=[
      {
        name:"suji"
      },
      {
        name:"Apple"
      },
      {
        name:"nani"
      },
      {
        name:'p.s'
      }
  ]

  constructor() { 
    console.log('customers component constructor')
   }
  ngOnChanges(){
    console.log("ng onchanges in customers commponent")
  }
  ngOnInit() {
    console.log('ngoninit CustomersComponent')
  }
  
  ngAfterContentInit(){
    console.log('ngaftercontentinit customers component');
  }
  ngAfterContentChecked(){
    console.log("ngaftercontentchecked customers component ");
  }
  ngAfterViewInit(){
    console.log('ngafterviewinit customers component');
  }
  ngAfterViewChecked(){
    console.log("ngafterviewchecked customers component ");
  }

  sharedDataFromChild(data){
    console.log('data', data);
    this.data.push(data[0]);
    console.log('pushed data', this.data);
    //this.data = data;
  }
  sendData(){
    this.data = [{name:"radha"}]
  }
  ngDoCheck(){
    console.log("ngDoCheck CustomersComponent");
  }
}

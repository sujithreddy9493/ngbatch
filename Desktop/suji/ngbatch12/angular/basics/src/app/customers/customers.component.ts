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
        name:"sree"
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
    //console.log("updated this.data", this.data)
  }
}

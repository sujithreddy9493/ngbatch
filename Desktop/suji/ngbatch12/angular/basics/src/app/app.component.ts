import { Component, ViewChild, OnInit, ElementRef , } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Welcome to Angular Session';
  username:string;
  arr = ['red','blue','green'];

 @ViewChild('user',{static: false}) userElement:ElementRef;
  constructor(){
    console.log('constructor appcomponent ')
  }
  ngOnInit(){

    console.log('ngOnInit appcomponent')

  }
  ngDoCheck(){
    console.log('ngDoCheck appcomponent');
  }
  ngAfterContentInit(){
    console.log('ngaftercontentinit appcomponent');
  }
  ngAfterContentChecked(){
    console.log("ngaftercontentchecked appcomponent ");
  }
  ngAfterViewInit(){
    console.log('ngafterviewinit appcomponent');
  }
  ngAfterViewChecked(){
    console.log("ngafterviewchecked appcomponent ");
  }

  color = 'grey';
changeColor(){
  console.log("data");
}
updateUserDetails(e){
  this.username = e;
}
changeUserDetails(e){
  this.username = e;
}
detectChange(e){
  this.username = e;
  console.log(e)
}
  
}
  

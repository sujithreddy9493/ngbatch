import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tempalte',
  templateUrl: './tempalte.component.html',
  styleUrls: ['./tempalte.component.css']
})
export class TempalteComponent implements OnInit {
 
  
  title = 'Sujithreddy';
  S = 'by @apple';

  constructor() { }

  ngOnInit() {
    
    
  }
  formDetails(d){
   console.log(d);
  }
  

}

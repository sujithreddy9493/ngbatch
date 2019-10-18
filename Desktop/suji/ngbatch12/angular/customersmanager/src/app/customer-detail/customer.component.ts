import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private route:ActivatedRoute) {
    console.log('route',route);
  }

  ngOnInit() {
    this.route.params.pipe(map(p => p.id)).subscribe((data) => {
      console.log(data);
    });
  }

}

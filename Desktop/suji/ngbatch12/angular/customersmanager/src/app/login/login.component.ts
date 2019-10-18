import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
  }
  sendData(){
    var obj = {
      email:'krishna@gmail.com',
      password:'abcd1234'
    }
    this.authService.login(obj).subscribe((data)=> {
      console.log('data',data,typeof data); 
      if(data){
        if(!this.authService.urlPath){
          this.authService.urlPath = '/customers';
        }
        this.router.navigate([this.authService.urlPath])
        this.authService.isAuthenticated = true;
        
      }
      
    })
  }

}

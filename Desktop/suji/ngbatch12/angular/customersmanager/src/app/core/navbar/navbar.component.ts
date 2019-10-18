import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private authService: AuthService, private router:Router) { }
  logText = 'Login';
  ngOnInit() { }
  ngDoCheck(){
    this.updateLoginLogoutText();
  }
  updateLoginLogoutText(){
    if(this.authService.isAuthenticated){
      this.logText = 'Logout';
    }else {
      this.logText = 'Login';
    }
  }
  loginToLogoutChange(){
    console.log('login to logout', this.authService.isAuthenticated);
    if(this.authService.isAuthenticated){
      this.logText = 'Logout';
      
      this.authService.logout().subscribe((data)=>{
        if(data){
          this.authService.isAuthenticated = false;
          this.logText = 'Login';
        }else{
          // failed to logout of the page 
          this.logText = 'Logout';
          console.log(data);
        }
      });
    }else{
      this.logText = 'Login';
      this.router.navigate(['/login']);
    }
    

    /*if(this.authService.isAuthenticated){
      
      this.authService.logout().subscribe((data)=>{
        if(data){
          this.authService.isAuthenticated = false;
          this.logText = 'Login';
        }else{
          console.log(data);
        }
      });
    }else{

      this.authService.login().subscribe((data)=>{
        if(data){
          this.authService.isAuthenticated = true;
          this.logText = 'Logout';
        }else{
          // this.authService.isAuthenticated= false;
          // error message for authentication fail
        }

      })
    }*/
  }


}

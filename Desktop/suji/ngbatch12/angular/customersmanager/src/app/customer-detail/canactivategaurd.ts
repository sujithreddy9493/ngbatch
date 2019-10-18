import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from '@angular/core';
import { AuthService } from '../core/services/auth.service';

@Injectable(
    
)
export class CanActivateGaurd implements CanActivate{
    constructor(private authService: AuthService,private router:Router){

    }
    canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
        if(this.authService.isAuthenticated){
        
            return true;
        }else{
            
            this.authService.urlPath = state.url;
            this.router.navigate(['/login'])
            return false;
        }
    }

}
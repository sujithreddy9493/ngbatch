import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable()
export class AuthService{
    isAuthenticated:Boolean = false;
    urlPath;
    constructor( private http:HttpClient){
        
    }
    login(data){
        return this.http.post('/api/auth/login',data);
    }
    logout(){
        return this.http.post('/api/auth/logout',{});
    }
}
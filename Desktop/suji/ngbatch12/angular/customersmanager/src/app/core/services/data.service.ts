import { HttpClient } from '@angular/common/http';
import { Observable }  from 'rxjs';
import { map } from "rxjs/operators";
import { ICustomer } from 'src/app/shared/interfaces';
import { Injectable } from '@angular/core';
 
@Injectable()
export class DataService{
    constructor(private http:HttpClient){

    }
    url = '/api/customers';

    getCustomersData():Observable<ICustomer[]>{

        return this.http.get<ICustomer[]>(this.url).pipe(

            map(data => data)

        )

    }
    getCustomerDataById(id):Observable<ICustomer>{
        console.log(this.url+'/'+id, typeof id);
        return this.http.get<ICustomer>(this.url+'/'+id).pipe(
            map(data => data)
        )
    }
}






















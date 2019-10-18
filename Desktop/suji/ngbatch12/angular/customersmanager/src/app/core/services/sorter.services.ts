import { Injectable } from '@angular/core';
import { PropertyResolverService } from "../services/property-resolver.service";
@Injectable({
  providedIn: 'root'
})
export class SorterService {
  property:string;
  direction = 1;
  constructor() { }
  sort(collection:any[], prop:any){
    this.property = prop;
    this.direction = (this.property === prop) ? this.direction * -1 : 1;

    collection.sort((a: any, b:any) => {
      let aVal: string;
      let bVal: string;
      aVal = a[prop]
      bVal = b[prop]
      if(aVal === bVal){
        return 0;
      }else if(aVal > bVal){
        return this.direction * -1;
      }else{
        return this.direction * 1;
      }
    });
  }
}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertyResolverService {

  constructor() { }
  static resolve(path:string, obj:any ){
    return path.split('.').reduce((prev,curr) => {
      return (prev  ?  prev[curr]: undefined);
    }, obj || self)

  }
}
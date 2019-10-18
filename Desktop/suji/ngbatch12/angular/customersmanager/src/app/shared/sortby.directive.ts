import { Directive, Input, HostListener, Output, EventEmitter } from '@angular/core';


@Directive({
  selector: '[appSortby]'
})
export class SortbyDirective {
  private sortProperty: string;
  @Output()
  sorted: EventEmitter<string> = new EventEmitter<string>();
  constructor() {
    console.log("sortby directive ");
   }

  @Input('appSortby') 
  set sortBy(value: string){
    this.sortProperty = value;
  }

  @HostListener('click')
  onClick(){
    event.preventDefault();
    this.sorted.emit(this.sortProperty);
  }

}

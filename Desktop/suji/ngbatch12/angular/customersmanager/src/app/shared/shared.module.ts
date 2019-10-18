import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortbyDirective } from './sortby.directive';
import { capitalizePipe } from './capitilize.pipe';




@NgModule({
  declarations: [SortbyDirective,capitalizePipe],
  exports: [SortbyDirective,capitalizePipe],

  imports: [
    CommonModule
  ]
})
export class SharedModule { }

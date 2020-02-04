import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FilterPipe } from './pipe/filter.pipe';
import { SortPipe } from './pipe/sort.pipe';


@NgModule({
  declarations: [FilterPipe, SortPipe],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [FilterPipe, SortPipe]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmpFormComponent } from './components/emp-form/emp-form.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [EmpFormComponent, EmpListComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [EmpFormComponent, EmpListComponent]
})
export class EmployeeModule { }

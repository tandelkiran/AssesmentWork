import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss'],
})
export class EmpListComponent implements OnInit {

  employees: any;
  key="name";
  constructor(private empService: EmployeeService) {
    this.getAllEmp();
  }

  ngOnInit() {
  }

  /**
   * fetch all employee data
   */
  getAllEmp() {
    this.empService.getAllEmployees().subscribe(
      data => {
        if (data) {
          this.employees = data;
        }
        return data
      }
    );
  }

  /**
   * remove employee with given id
   * @param id get employee id
   */
  removeEmp(id: number) {
    debugger
    let res = confirm('Are you sure want to Delete ?');
    if (res) {
      this.empService.removeEmployee(id).subscribe(
        data => {
          if (id) {
            alert("Record with Id:-" + id + " is Deleted");
            this.getAllEmp();
          }
        }
      );
    }
    else {
      return;
    }
  }
  sorting(key:any){
    debugger
    this.key=key;
    // this.empService.getAllEmployees().subscribe(
    //   data => {
    //     debugger
    //     this.employees = data;
    //     let e = this.employees.sort(function(a,b){
    //       debugger
    //       return a.TypeId > b.TypeId?1:a.TypeId <b.TypeId?-1:0
    //      });
    //      console.log('SORTED:-'+JSON.stringify(e));
    //   }
    // );
  }
}
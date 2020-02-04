import { Component, OnInit, AfterViewInit, OnChanges, AfterContentInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../../service/employee.service';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.scss']
})

export class EmpFormComponent implements OnInit {
  private id;
  empObj: Employee;
  employeeForm: FormGroup;
  Address:FormArray;
  submitted: boolean = false;
  departments = {};
  btnValue: string = "SUBMIT";

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpClient,
    private empService: EmployeeService
  ) {
    this.getAllDepts();
  }

  get f() { return this.employeeForm.controls; }

  // ngAfterViewInit(){
  //   this.getAllDepts();
  // }
  ngOnInit() {

    this.employeeForm = this.formBuilder.group({

      FirstName: ['', [Validators.required,Validators.maxLength(20)]],
      Email: ['', [Validators.required]],
      Mobile: ['', [Validators.required,Validators.maxLength(10)]],
      Address: this.formBuilder.array([this.createItem()]),
      Gender: ['', [Validators.required]],
      DeptName: ['', [Validators.required]],
      HireDate: ['', [Validators.required]],
      Permenent: ['', [Validators.required]]
    });

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.btnValue = "UPDATE";
    }
    if (this.id) {
      this.http.get(`http://localhost:3000/employees/${this.id}`).subscribe(
        data => {
          debugger
          if (data) {
            let empData: any = data;
            this.employeeForm.setValue({
              FirstName: empData.FirstName,
              Email: empData.Email,
              Mobile: empData.Mobile,
              Address: empData.Address,
              Gender: empData.Gender,
              DeptName: empData.DeptName,
              HireDate: empData.HireDate,
              Permenent: empData.Permenent
            });
          }
          return data;
        }
      );
    }
  }

  /**
   * Insert and Update based on Condition
   */
  onSubmit() {
    debugger
    this.submitted = true;

    this.empObj = new Employee();
    if (!this.id && this.btnValue === "SUBMIT" && !this.employeeForm.invalid) {
      this.empObj = this.employeeForm.value;
      this.empService.addEmployeeData(this.empObj).subscribe(data => {
        if (this.empObj) {
          alert("Employee Added...!!!");
        }
      }
      );
    }
    else {
      this.empObj = this.employeeForm.value;
      this.empService.updateEmployeeData(this.id, this.empObj).subscribe(data => {
        alert("Record Updated...!!!");
      });
    }
    if (this.employeeForm.invalid) {
      return;
    }
  }

  /**
   * get all departments
   */
  getAllDepts() {
    this.empService.getAllDepts().subscribe(
      data => {
        if (data) {
          this.departments = data;
        }
        return data;
      }
    );
  }
  /**
   * resets form
   */
  onReset() {
    this.submitted = false;
    this.employeeForm.reset();
  }
  
  createItem():FormGroup
  {
    return this.formBuilder.group({
      city:[''],
      state:[''],
      pincode:['']
    });
  }

  addAddress()
  {
    debugger
      this.Address=this.employeeForm.get('Address') as FormArray;
      this.Address.push(this.createItem());
  }
}




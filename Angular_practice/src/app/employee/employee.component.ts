import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  constructor(private employeeService : EmployeeService){}


  employeeLst:any=[]
  bDisplayEmployeeData:boolean=false
  ngOnInit(){
    this.employeeLst=this.employeeService.getEmployees()
  }

  enableEmployeeFlag(){
    this.bDisplayEmployeeData=true
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  //define the group of employee records..
  employees =[
    {"employee_id":101,"ename":"Satya","dept":"IT","designation":"Developer"},
    {"employee_id":102,"ename":"Sri","dept":"HR","designation":"Manager"},
    {"employee_id":103,"ename":"chen","dept":"Finance","designation":"Accountant"},
    {"employee_id":104,"ename":"lusi","dept":"IT","designation":"AI developer"},
    {"employee_id":105,"ename":"jack","dept":"Sales","designation":"Accountant"}
  ]

  //return the list of employees.
  getEmployees(){
    return this.employees;
  }
}

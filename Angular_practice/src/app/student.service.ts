import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  StudentList=[
    {"student_id":1,"name":"Satyasri","Stream":"IT","marks":89},
    {"student_id":2,"name":"Akshitha","Stream":"CS","marks":95},
    {"student_id":3,"name":"Abhinaya","Stream":"EC","marks":80},
    {"student_id":4,"name":"Siri","Stream":"IT","marks":78},
    {"student_id":5,"name":"Sruthi","Stream":"CS","marks":67}

  ]

  getStudentList(){
    return this.StudentList
  }
}

import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

  constructor(private studentService :StudentService){}

  studentLst:any=[]
  bDisplayStudentData:boolean=false

  ngOnInit(){
    this.studentLst=this.studentService.getStudentList()
  }

  enableStudentFlag(){
    this.bDisplayStudentData=true
  }

}

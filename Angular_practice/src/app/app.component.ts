import { Component, booleanAttribute } from '@angular/core';
import { EmployeeService } from './employee.service';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { CRUDService } from './crud.service';
import { Book } from './Book';
import { Observable } from 'rxjs';

@Component({ //@is decorator...providing extra information about the class
  selector: 'app-root', //name which is given to this class.
  templateUrl: './app.component.html', //associated with this html file
  styleUrl: './app.component.css' //associated with this css file.
})
export class AppComponent { //ts file
  title = 'myproject';

  myName : String ="Satya"//define the variable in app.component

  imgSrc : String = "s.jpg"
  
  


  buttonClicked(){
    alert("You clicked on a button..")
  }
  userID : String =""
  verifydata(){
    if(this.userID=="Satya")
      alert("Valid user...")
    else
      alert("Given ID is not Valid...")
  }
  bDisplayLoginForm : boolean =false
  UID :String=""
  pwd:String=""

 //enables teh flag bdisplayloginform so that login form is displayed,
  enableFlag(){
    this.bDisplayLoginForm=true
    this.bDisplayRegistrationForm=false
  }
  //validates the userid ewhich is entered in the login form
  validate(){
    if(this.UID=="Satya" && this.pwd=="Satya@123")
      alert("you are a valid user")
    else
      alert("Invalid user, pls check the credentials...")
  }
  bDisplayRegistrationForm : boolean =false
  UserID :String=""
  password:String=""
  confirmpwd: String=""
  emailid: String=""

 //enables teh flag bdisplayloginform so that login form is displayed,
  enableRegisterFlag(){
    this.bDisplayRegistrationForm=true
    this.bDisplayLoginForm=false
  }
  Register(){
    if(this.password==this.confirmpwd)
      alert(`Registration successful for user: ${this.UserID}`)
    else
      alert("passwords do not match..please try again...")
  }
  
  ProductList=[
    {"product_id":101,"product_name":"Tv","description":"LG","cost":35000},
    {"product_id":101,"product_name":"Mobile","description":"Realme","cost":14000},
    {"product_id":101,"product_name":"Laptop","description":"Lenovo","cost":65000},
    {"product_id":101,"product_name":"Speakers","description":"Dobly digital","cost":15000},
    {"product_id":101,"product_name":"Earpods","description":"Boat","cost":5000}

  ]
  bDisplayProductData :boolean=false
  enableProductDisplayFlag(){
    this.bDisplayProductData=true
  }
  Employeelist=[
    {"employee_id":101,"ename":"Satya","dept":"IT","designation":"Developer"},
    {"employee_id":102,"ename":"Sri","dept":"HR","designation":"Manager"},
    {"employee_id":103,"ename":"chen","dept":"Finance","designation":"Accountant"},
    {"employee_id":104,"ename":"lusi","dept":"IT","designation":"Support Engineer"},
    {"employee_id":105,"ename":"jack","dept":"Sales","designation":"Accountant"}

  ]
  bDisplayemployeeData :boolean=false
  enableemployeeDisplayFlag(){
      this.bDisplayemployeeData=true
  }

  strText ="I am learning Angular"

  nCurrency : number =1200

  todaysDate=new Date()

  n1:number=0
  n2:number= 0
  Add(){
    const sum = this.n1 + this.n2
    alert("Sum of two numbers is:"+sum)
  }

  //creating an object of employee serviece...
  //dependancy injection you are depending on a particular object. you are telling angular to create this
  //object at runtime and give it to you.
   //dependency injection of crud services object
  constructor (private empService : EmployeeService,private crudService:CRUDService){}
  bDisplayEmployeeData : boolean=false
  empLst:any =[]
  enableEmployeFlag(){
  this.bDisplayEmployeeData=true
//Get the list of employees from emp service and assign it to the local variable emplst
this.empLst=this.empService.getEmployees()
}
loginForm= new FormGroup({
  UID :new FormControl('satya'),
  PWD :new FormControl('satya@123')
});
bDisplayReactiveForm : boolean=false;
enableReactiveForm(){
  this.bDisplayReactiveForm=true
}
onSubmit(loginForm: NgForm ){

  let UID= loginForm.controls['username'].value
  let PWD= loginForm.controls['password'].value
  
  if (UID == "satya" && PWD =="satya@123")
  alert("you are valid user...")
  else
  alert("Invalid credentials..pls check your userid and password..")
  }

  onSubmission(registerForm: NgForm) {
    const username = registerForm.controls['username'].value;
    const password = registerForm.controls['password'].value;
    const confirmPassword = registerForm.controls['confirmpassword'].value;
    const address = registerForm.controls['address'].value;
    const emailid = registerForm.controls['emailid'].value;

    if (password === confirmPassword) {
      alert(`Registration successful for user: ${username}`);
    } else {
      alert("Passwords do not match. Please try again.");
    }
  }
    bookLst: any =[];
    getBookData(){
      this.crudService.getBooks().subscribe(
        (response)=>{this.bookLst=response;},
        (error)=>console.log(error)
      );
      
    }
    bDisplayAddData:boolean=false;
    bDisplayUpdateData:boolean=false;
    addOrUpdateDisplay:String="";
    book = new Book (0,"","",0);

    //this will display the add book frm to user and sets the title of the form
    addBookData(){
       this.bDisplayAddData=true;
       this.addOrUpdateDisplay="Add Book"
       this.book= new  Book (0,"","",0);
    }
    createOrUpdateData(){
      if(this.addOrUpdateDisplay=="Add Book"){
        this.bDisplayAddData=false;

        this.crudService.insertBook(this.book).subscribe(
          (response)=>{console.log("Record inserted successfully.."); this.getBookData();},
          (error)=>console.log(error)
        );
    }
    else if(this.addOrUpdateDisplay=="Update Book"){
      this.bDisplayUpdateData=false;

      this.crudService.updateBook(this.book).subscribe(
        (response) => {alert("Records updated succesffully"); this.getBookData();},
        (error) => console.log(error)

      );
    }
    }
    updateBook(book:Book){
      this.bDisplayUpdateData=true;
      this.bDisplayAddData=false;
      this.addOrUpdateDisplay="Update Book"
      this.book=book;
    }
    deleteBook(book_id:number){
      this.crudService.deleteBook(book_id).subscribe(
        (response) => {alert("Records deleted succesffully"); this.getBookData()},
        (error) => console.log(error)
 
      );
    }
   

   
  

}


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { StudentComponent } from './student/student.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({ //@ means a decorator... provide extra information.
  declarations: [ //what are the components created in this project.
    AppComponent, HomeComponent, ProductComponent, StudentComponent, EmployeeComponent
  ],
  imports: [ //which are imports for this module
    BrowserModule, //display your content in the browser.
    AppRoutingModule, //supporting navbar
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [], //This is for services....
  bootstrap: [AppComponent] //which is the first component which gets loaded in the project/memory.
})
export class AppModule { } //A class Appmodule is created..

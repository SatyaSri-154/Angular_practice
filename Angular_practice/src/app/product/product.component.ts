import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  //This is the constructor for Product component class..
  constructor(private productService : ProductService){}

  laptopLst : any = []
  bDisplayLaptopData: boolean=false

  //when this component is intialized or just created,ngONInit() is called by Angular
  //This is a constructor for the component.. component-->Ts file+HTML file-->
  //This function is called immediately after the component is created (app-product)..
  ngOnInit(){
    this.laptopLst=this.productService.getLaptopList()

  }

  enableLaptopFlag(){
    this.bDisplayLaptopData=true
  }

  }



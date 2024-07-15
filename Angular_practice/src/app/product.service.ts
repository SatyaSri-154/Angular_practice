import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  Laptoplist =[

    {"product_id":101,"name":"LG","description":"LG laptop","cost":55000},
    {"product_id":102,"name":"Samsung","description":"Samsung laptop","cost":55000},
    {"product_id":103,"name":"HP","description":"HP laptop","cost":50000},
    {"product_id":104,"name":"Dell","description":"Dell laptop","cost":53000},
    {"product_id":105,"name":"Acer","description":"Acer laptop","cost":55000}

  ]

  getLaptopList(){
    return this.Laptoplist
  }
}

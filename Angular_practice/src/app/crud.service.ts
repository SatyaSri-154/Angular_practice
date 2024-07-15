import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './Book';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {

  //base url to connect with the backend server
  //baseURL ="http://localhost:3000/Books";
  baseURL="http://localhost:5000/book"
  

  //Dependency injection of httpclient
  constructor(private httpClient: HttpClient) { }

  //get http method..contact the backend server with given url.
  getBooks():Observable<any>{
    return this.httpClient.get(this.baseURL);
  }
  //post method to insert tthe book object in database
  insertBook(book:Book):Observable<any>{
    //return(this.httpClient.post(this.baseURL,book));
    //this is for python server
    //http:localhost:5000/106, book object...
    return(this.httpClient.post(this.baseURL+"/"+book.id,book))
  }
  //put method
  updateBook(book:Book):Observable<any>{
    let updatedURL=this.baseURL+"/"+book.id;
    return(this.httpClient.put(this.baseURL+"/"+book.id,book));
  }
  deleteBook(book_id:number):Observable<any>{
    let deleteURL=this.baseURL + "/"+book_id;
    alert("Delete URL:"+deleteURL)
    return this.httpClient.delete(deleteURL);

  }
}

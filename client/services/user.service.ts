import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }

  


  addData(details){
  	 console.log("User Detais In Service" , details);
  	 return this.http.post("http://localhost:3000/user",details);
  }

  // addData(log)
  // {
  // 	console.log("LOG DATA", log);
  //  return this.http.post("http://localhost:3000/user",log);
  // }
}

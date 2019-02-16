import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(public http:HttpClient) { }

	signUp(detail)
	{
		console.log("signUp user",detail);
		return this.http.post("http://localhost:3000/user/signUp",detail);
	}
	logIn(log)
	{
		console.log("login user",log);
		return this.http.post("http://localhost:3000/user/logIn",log);
		
	}

	getWeather(data){
		return this.http.post("http://localhost:3000/city/get-weather",data);
	}

	getWeathers(data){

		console.log("data--=-",data);
		return this.http.post("http://localhost:3000/city/get-weathers",data);
	}
}




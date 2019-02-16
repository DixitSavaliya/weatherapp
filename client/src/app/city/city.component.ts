import { Component, OnInit } from '@angular/core';
import  {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
	selector: 'app-city',
	templateUrl: './city.component.html',
	styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

	city:any;
	detail=[];

	constructor(public _userService:UserService,private router:Router) { }

	ngOnInit() {

		// this.whethers();
	}

	whethers(){
    var data = {city:this.city};
    console.log("data_+_+_+",data);
   
    this._userService.getWeathers(data).subscribe((res:any)=>{
      console.log("whether=-=-=-=-",res);
      this.detail.push(res);
      console.log("detail===-=--",res);
     setTimeout(function(data){ alert(res.temp); }, 2000);
     // setTimeout(()=>{this.whether()}, 300000);

    },err=>{
      console.log("errr-=-=-=-",err);
    })
  }

}

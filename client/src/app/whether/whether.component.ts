import { Component, OnInit } from '@angular/core';
import  {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-whether',
  templateUrl: './whether.component.html',
  styleUrls: ['./whether.component.css']
})
export class WhetherComponent implements OnInit {

  city:any;
  detail=[];

  readonly VAPID_PUBLIC_KEY = "BLBx-hf2WrL2qEa0qKb-aCJbcxEvyn62GDTyyP9KTS5K7ZL0K7TfmOKSPqp8vQF0DaG8hpSBknz_x3qf5F4iEFo";

  constructor(public _userService:UserService,private router:Router,) { }

  ngOnInit() {

    this.whether();
     // setTimeout(()=>{this.getWeather(data)},500);
  }


  whether(){
    var data = {data: JSON.parse(localStorage.getItem('user')).city};
    console.log("data_+_+_+",data);
   
    this._userService.getWeather(data).subscribe((res:any)=>{
      console.log("whether=-=-=-=-",res);
      this.detail.push(res);
      console.log("detail===-=--",res);
     setTimeout(function(data){ alert(res.temp); }, 2000);
     setTimeout(()=>{this.whether()}, 300000);

    },err=>{
      console.log("errr-=-=-=-",err);
    })
  }

  

  
}

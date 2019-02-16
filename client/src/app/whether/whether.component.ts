import { Component, OnInit } from '@angular/core';
import  {UserService} from '../user.service';
import {Router} from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-whether',
  templateUrl: './whether.component.html' ,
  styleUrls: ['./whether.component.css']
})
export class WhetherComponent implements OnInit {

  city:any;
  detail=[];

  private readonly notifier: NotifierService;

  constructor(public _userService:UserService,private router:Router,public notifierService: NotifierService ) {
    this.notifier = notifierService;
    
  }

  ngOnInit() {

    this.whether();


  }



  // public showSpecificNotification( type: string, message: string, id: string ): void {
    //   this.notifier.show( {
      //     id,
      //     message,
      //     type
      //   } );
      // }


      whether(){
        var data = {data: JSON.parse(localStorage.getItem('user')).city};
        console.log("data_+_+_+",data);

        this._userService.getWeather(data).subscribe((res:any)=>{
          console.log("whether=-=-=-=-",res);
          this.detail.push(res);

          this.showNotification('success','Temprature '+res.temp);
          console.log("detail===-=--",res.temp);
          // setTimeout(function(data){ alert(res.temp); }, 2000);
          setTimeout(()=>{this.whether()}, 6000);

        },err=>{
          console.log("errr-=-=-=-",err);
        })
      }



      showNotification( type: string, data ): void {


        console.log("not--=-=-",data);
        this.notifier.notify( type, data);
      }


    }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/entity/appointment/Appointment';
import { AppointmentRequest } from 'src/app/entity/appointment/AppointmentRequest';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';

@Component({
  selector: 'app-search-appointmentbydatetime',
  templateUrl: './search-appointmentbydatetime.component.html',
  styleUrls: ['./search-appointmentbydatetime.component.less']
})
export class SearchAppointmentbydatetimeComponent implements OnInit {

  message;
  temp;
  appointmentDetails: AppointmentRequest=new AppointmentRequest();
  appointmentRecord;
  constructor(private service:AppointmentService,private router: Router) { }

  ngOnInit(): void {
  }
  unRegister():void{}
  closeForm():void{
    document.getElementById("myForm").style.display = "none";
    document.getElementById("myForms").style.display = "none";
    this.temp=JSON.parse(localStorage.getItem('User'));
    if(this.temp.role=="Admin"){
      this.router.navigate(['/admin']);}
    else if(this.temp.role=="User"){
      this.router.navigate(['/user']);
    }
    else{
      this.router.navigate(['/readuser']);
    }
  }
  searchAppointmentByDateTime():void{
    let resp=this.service.searchAppointmentByDateTime(this.appointmentDetails);
    //let resp=this.service.doLogins();
   // resp.subscribe((data)=>this.message=data=>{console.table(data)});
   resp.subscribe((data:Appointment)=>
   {
     console.table(this.appointmentDetails);
     console.table(data);
    // for(let i=0;i<data.length;i++)
    this.appointmentRecord=data;
    if(this.appointmentRecord==null){
    this.message="Record Not Found";
    alert(this.message);
   }
   
    // console.table(this.appointmentRecord);
   })
  }
}

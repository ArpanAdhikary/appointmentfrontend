import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/entity/appointment/Appointment';
import { AppointmentRequestUserId } from 'src/app/entity/appointment/AppointmentRequestUserId';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';

@Component({
  selector: 'app-search-appointment-by-id',
  templateUrl: './search-appointment-by-id.component.html',
  styleUrls: ['./search-appointment-by-id.component.less']
})
export class SearchAppointmentByIdComponent implements OnInit {

  message;
  temp;
  appointmentDetails: AppointmentRequestUserId=new AppointmentRequestUserId();
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
  searchAppointmentById():void{
    let resp=this.service.searchAppointmentById(this.appointmentDetails);
    //let resp=this.service.doLogins();
   // resp.subscribe((data)=>this.message=data=>{console.table(data)});
   resp.subscribe((data)=>
   {
     console.table(this.appointmentDetails);
    // console.table(data);
     //console.table(this.appointmentRecord);
     this.appointmentRecord=data;
     if(this.appointmentRecord==null){
       this.message="Record Not Found";
       alert(this.message);
     }
   })
  } 
}

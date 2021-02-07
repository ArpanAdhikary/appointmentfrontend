import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/entity/appointment/Appointment';
import { AppointmentUpdateRequest } from 'src/app/entity/appointment/AppointmentUpdateRequest';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';

@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrls: ['./update-appointment.component.less']
})
export class UpdateAppointmentComponent implements OnInit {
  appointmentDetails: AppointmentUpdateRequest=new AppointmentUpdateRequest();
  message;
  temp;
  constructor(private service:AppointmentService,private router: Router) { }

  ngOnInit(): void {
    this.temp=JSON.parse(localStorage.getItem('User'));
  }
  update():void{
    console.table(this.appointmentDetails);
    this.appointmentDetails.requestedcreatorId=this.temp.id;
    let resp=this.service.updateAppointment(this.appointmentDetails);
    if(confirm("If you want to update for the given record Press Ok"))
    {
    resp.subscribe((data)=>
   {
     console.table(data);
     if(data==true)
     {
      this.message="Update Successful";
      alert(this.message);
     }
     else
       this.message="Update Failed Please Enter valid details";
       alert(this.message);
    });
   
    }
  }
  closeForm():void{
    document.getElementById("myForm").style.display = "none";
    this.temp=JSON.parse(localStorage.getItem('User'));
    if(this.temp.role=="Admin"){
      this.router.navigate(['/admin']);}
    else {
      this.router.navigate(['/user']);
    }
  }
}

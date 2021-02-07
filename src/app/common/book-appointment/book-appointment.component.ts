import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/entity/appointment/Appointment';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.less']
})
export class BookAppointmentComponent implements OnInit {

  message;
  temp;
  appointmentDetails: Appointment=new Appointment();
  
  constructor(private service:AppointmentService,private router: Router) { }

  ngOnInit(): void {
    this.temp=JSON.parse(localStorage.getItem('User'));
  }

  
  closeForm():void{
    document.getElementById("myForm").style.display = "none";
    if(this.temp.role=="Admin"){
      this.router.navigate(['/admin']);}
    else {
      this.router.navigate(['/user']);
    }
  }
  public book(){
    this.appointmentDetails.creatorId=this.temp.id;
    let resp=this.service.bookAppointment(this.appointmentDetails);
    //let resp=this.service.doLogins();
   // resp.subscribe((data)=>this.message=data=>{console.table(data)});
   console.table(this.appointmentDetails);
   if(confirm("If you want to book for the given record Press Ok"))
   {
      resp.subscribe((data)=>
      {
        console.table(data);
        if(data==true)
        {
          this.message="Booking Successful";
          alert(this.message);
        }
        else
          this.message="Booking Failed Please Enter valid details";
          alert(this.message);
        });
      }
  }
}

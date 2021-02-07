import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentRequestUserId } from 'src/app/entity/appointment/AppointmentRequestUserId';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';

@Component({
  selector: 'app-delete-appointment',
  templateUrl: './delete-appointment.component.html',
  styleUrls: ['./delete-appointment.component.less']
})
export class DeleteAppointmentComponent implements OnInit {

  message;
  check;
  ele;
  temp;
  appointmentDetails: AppointmentRequestUserId=new AppointmentRequestUserId();
  
  constructor(private service:AppointmentService,private router: Router) { }

  ngOnInit(): void {
  }
  checker(){
    this.ele=document.getElementById("deletecheck");
    if(this.ele.checked==true)
      this.check="true";
    else
      this.check=null;
      this.appointmentDetails.requestedAppointedId=null;
  }
  delete():void{

    let resp=this.service.deleteAppointment(this.appointmentDetails);
  
    if(confirm("If you want to delete for the given record Press Ok"))
   {
    resp.subscribe((data)=>
   {
     console.table(data);
     if(data==true)
     {
      this.message="Deleting Successful";
      alert(this.message);
     }
     else
       this.message="Deleting Failed Please Enter valid details";
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserUnRegisterRequest } from 'src/app/entity/registration/UserUnRegisterRequest';
import { RegistrationService } from 'src/app/services/registraton/registration.service';

@Component({
  selector: 'app-unregister',
  templateUrl: './unregister.component.html',
  styleUrls: ['./unregister.component.less']
})
export class UnregisterComponent implements OnInit {

message;
userUnRegister: UserUnRegisterRequest = new UserUnRegisterRequest();
  constructor(private service:RegistrationService,private router: Router) { }

  ngOnInit(): void {
  }
  unRegister():void{
    let resp=this.service.userUnRegistration(this.userUnRegister);
    if(confirm("If you want to book for the given record Press Ok"))
    {
    resp.subscribe((data)=>
    {
      console.table(data);
      if(data==true)
      {
       this.message="UnRegistration Successful";
       alert(this.message);
      }
      else
        this.message="UnRegistration Failed Please Enter valid details";
        alert(this.message);
     });
    }
  }
  closeForm():void{
    document.getElementById("myForm").style.display = "none";
  }
}

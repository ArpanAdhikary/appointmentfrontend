import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegistration } from 'src/app/entity/registration/UserRegistration';
import { RegistrationService } from 'src/app/services/registraton/registration.service';

@Component({
  selector: 'app-book-registration',
  templateUrl: './book-registration.component.html',
  styleUrls: ['./book-registration.component.less']
})
export class BookRegistrationComponent implements OnInit {

  message;
  checker;
  userRegister:UserRegistration=new UserRegistration();
  constructor(private service:RegistrationService,private router: Router) { }

  ngOnInit(): void {
  }
  register():void{
    console.table(this.userRegister);
    let resp=this.service.userRegistration(this.userRegister);
    if(confirm("If you want to book for the given record Press Ok"))
    { 
    resp.subscribe((data)=>
    {
      console.table(data);
      if(data==true)
      {
       this.message="Registration Successful";
       alert(this.message);
      }
      else
        this.message="Registration Failed Please Enter valid details";
        alert(this.message);
     });
    }
  }

  roleInput(){
    this.checker=document.getElementById("admin");
    //console.log(this.checker.checked);
    if(this.checker.checked==true){
      this.userRegister.role="Admin";
    }
    this.checker=document.getElementById("user");
   // console.log(this.checker.checked);
    if(this.checker.checked==true){
      this.userRegister.role="User";
    }
    this.checker=document.getElementById("readOnlyUser");
   // console.log(this.checker.checked);
    if(this.checker.checked==true){
      this.userRegister.role="ReadOnly";
    }
   
    console.table(this.userRegister);
  }
  closeForm():void{
    document.getElementById("myForm").style.display = "none";
  }
}

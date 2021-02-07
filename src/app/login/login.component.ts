import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestedUser } from '../entity/user/RequestedUser';
import { Users } from '../entity/user/Users';
import { LoginsService } from '../services/logins/logins.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  user;
  message;
  loginDetails: RequestedUser=new RequestedUser();
  constructor(private service:LoginsService,private router: Router) { }

  ngOnInit(): void {
  }

  closeForm():void{
    document.getElementById("myForm").style.display = "none";
  }
  public register(){
    let resp=this.service.doLogin(this.loginDetails);
    //let resp=this.service.doLogins();
   // resp.subscribe((data)=>this.message=data=>{console.table(data)});
   resp.subscribe((data)=>
   {
     this.user=data;
     console.table(this.user);
     if(this.user!=undefined)
     {
       if(this.user.role=="Admin")
          this.router.navigate(['/admin']);
       else if(this.user.role=="User")
          this.router.navigate(['/user']);
       else if(this.user.role=="ReadOnly")
          this.router.navigate(['/readuser']);
      localStorage.setItem('User', JSON.stringify(this.user));
     }
     else
       this.message="Login failed,Please Check the username or password";
    });
   
  }
}

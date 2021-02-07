import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { RequestedUser } from 'src/app/entity/user/RequestedUser';

@Injectable({
  providedIn: 'root'
})
export class LoginsService {

  constructor(private http:HttpClient) { }

  public doLogin(loginDetails:RequestedUser){
    console.table(loginDetails)
    return this.http.post("http://localhost:8081/api/1.0/login",loginDetails);
  }
  /*public doLogins(){
    return this.http.get("http://localhost:8081/api/1.0/check");
  }*/

}

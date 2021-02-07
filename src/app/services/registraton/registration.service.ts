import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRegistration } from 'src/app/entity/registration/UserRegistration';
import { UserUnRegisterRequest } from 'src/app/entity/registration/UserUnRegisterRequest';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }
  public userRegistration(registerUser:UserRegistration){
    return this.http.post("http://localhost:8081/api/1.0/registration",registerUser);
  }

  public userUnRegistration(unRegisterUser:UserUnRegisterRequest){
    return this.http.post("http://localhost:8081/api/1.0/unregister",unRegisterUser);
  }

}

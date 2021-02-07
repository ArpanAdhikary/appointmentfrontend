import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from 'src/app/entity/appointment/Appointment';
import { AppointmentRequest } from 'src/app/entity/appointment/AppointmentRequest';
import { AppointmentRequestUserId } from 'src/app/entity/appointment/AppointmentRequestUserId';
import { AppointmentUpdateRequest } from 'src/app/entity/appointment/AppointmentUpdateRequest';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http:HttpClient) { }
  
 /* public bookAppointment(){
    console.table(loginDetails)
    return this.http.post("http://localhost:8081/api/1.0/login",loginDetails);
  }*/

  public searchAppointmentById(searchAppointment:AppointmentRequestUserId){
    return this.http.post("http://localhost:8081/api/1.0/appointment/search/userid",searchAppointment);
  }

  public searchAppointmentByDateTime(searchAppointment:AppointmentRequest){
    
    return this.http.post("http://localhost:8081/api/1.0/appointment/search/dateandtime",searchAppointment);
  }
  public bookAppointment(searchAppointment:Appointment){
    
    return this.http.post("http://localhost:8081/api/1.0/appointment/book",searchAppointment);
  }
  public updateAppointment(searchAppointment:AppointmentUpdateRequest){
    
    return this.http.post("http://localhost:8081/api/1.0/appointment/update",searchAppointment);
  }
  public deleteAppointment(searchAppointment:AppointmentRequestUserId){
    
    return this.http.post("http://localhost:8081/api/1.0/appointment/delete",searchAppointment);
  }
}

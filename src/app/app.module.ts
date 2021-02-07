import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginsService } from './services/logins/logins.service';
import { FormsModule } from '@angular/forms';
import { AdminHomepageComponent } from './admin/admin-homepage/admin-homepage.component';
import { RegisteredUserHomepageComponent } from './registered_user/registered-user-homepage/registered-user-homepage.component';
import { ReadonlyUserHomepageComponent } from './readonly_user/readonly-user-homepage/readonly-user-homepage.component';
import { BookAppointmentComponent } from './common/book-appointment/book-appointment.component';
import { DeleteAppointmentComponent } from './common/delete-appointment/delete-appointment.component';
import { UpdateAppointmentComponent } from './common/update-appointment/update-appointment.component';
import { BookRegistrationComponent } from './admin/book-registration/book-registration.component';
import { UnregisterComponent } from './admin/unregister/unregister.component';
import { SearchAppointmentByIdComponent } from './common/search-appointment-by-id/search-appointment-by-id.component';
import { SearchAppointmentbydatetimeComponent } from './common/search-appointmentbydatetime/search-appointmentbydatetime.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ContactComponent,
    AboutComponent,
    AdminHomepageComponent,
    RegisteredUserHomepageComponent,
    ReadonlyUserHomepageComponent,
    BookAppointmentComponent,
    DeleteAppointmentComponent,
    UpdateAppointmentComponent,
    BookRegistrationComponent,
    UnregisterComponent,
    SearchAppointmentByIdComponent,
    SearchAppointmentbydatetimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LoginsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

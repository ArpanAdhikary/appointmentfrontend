import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminHomepageComponent } from './admin/admin-homepage/admin-homepage.component';
import { BookRegistrationComponent } from './admin/book-registration/book-registration.component';
import { UnregisterComponent } from './admin/unregister/unregister.component';
import { BookAppointmentComponent } from './common/book-appointment/book-appointment.component';
import { DeleteAppointmentComponent } from './common/delete-appointment/delete-appointment.component';
import { SearchAppointmentByIdComponent } from './common/search-appointment-by-id/search-appointment-by-id.component';
import { SearchAppointmentbydatetimeComponent } from './common/search-appointmentbydatetime/search-appointmentbydatetime.component';
import { UpdateAppointmentComponent } from './common/update-appointment/update-appointment.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReadonlyUserHomepageComponent } from './readonly_user/readonly-user-homepage/readonly-user-homepage.component';
import { RegisteredUserHomepageComponent } from './registered_user/registered-user-homepage/registered-user-homepage.component';

const routes: Routes = [{path:'' , redirectTo:'/home',pathMatch:'full'},
  {
  path: 'home',
  component: HomeComponent,
  children:[{
    path:'login',
    component:LoginComponent
  },
{
  path:'contact',
component:ContactComponent
},
{
  path:'about',
component:AboutComponent
}],
},
{
  path:'admin',
  component:AdminHomepageComponent,
  children:[{
    path:'register',
    component:BookRegistrationComponent
  },
  {
    path:'unregister',
    component:UnregisterComponent
  },
  {
    path:'book',
    component:BookAppointmentComponent
  },
  {
    path:'update',
    component:UpdateAppointmentComponent
  },
 { path:'delete',
  component:DeleteAppointmentComponent
},
{ path:'search/id',
  component:SearchAppointmentByIdComponent
},
{ path:'search/date/time',
  component:SearchAppointmentbydatetimeComponent
}
]
},
{
  path:'user',
  component:RegisteredUserHomepageComponent,
  children:[{
    path:'book',
    component:BookAppointmentComponent
  },
  {
    path:'update',
    component:UpdateAppointmentComponent
  },
  { path:'delete',
  component:DeleteAppointmentComponent
  },
  { path:'search/id',
  component:SearchAppointmentByIdComponent
  },
  { path:'search/date/time',
  component:SearchAppointmentbydatetimeComponent
  }]
},
{
  path:'readuser',
  component:ReadonlyUserHomepageComponent,
  children:[{
    path:'search/id',
    component:SearchAppointmentByIdComponent
  },
  {
    path:'search/date/time',
    component:SearchAppointmentbydatetimeComponent
  }]
}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

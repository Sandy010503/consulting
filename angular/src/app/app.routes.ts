import { Routes } from '@angular/router';
import { RegisterComponent } from '../components/register/register.component';
import { AboutusComponent } from '../components/aboutus/aboutus.component';
import { HomeComponent } from '../components/home/home.component';
import { MainpageComponent } from '../components/mainpage/mainpage.component';
import { MainloginComponent } from '../components/mainlogin/mainlogin.component';
import { AdminloginComponent } from '../components/logins/adminlogin/adminlogin.component';
import { ClientloginComponent } from '../components/logins/clientlogin/clientlogin.component';
import { ConsultantloginComponent } from '../components/logins/consultantlogin/consultantlogin.component';
import { AdminComponent } from '../components/admin/admin.component';
import { ClientComponent } from '../components/client/client.component';

export const routes: Routes = [
    { path: 'mainlogin', component: MainloginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'aboutus', component: AboutusComponent },
  {path: 'mainpage', component:MainpageComponent},
  {path: 'adminlogin', component:AdminloginComponent},
  {path: 'clientlogin', component:ClientloginComponent},
  {path: 'consultantlogin', component:ConsultantloginComponent},
  {path:'admin', component:AdminComponent},
  {path:'client', component:ClientComponent},
  { path: 'mainpage', redirectTo: '/mainpage', pathMatch: 'full' }
];

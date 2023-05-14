import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component'; 
import { ContactComponent } from './components/home/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
 
    { path: '', redirectTo: '/home', pathMatch: 'full'}, 
    { path: 'home', component:  HomeComponent },
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'dashboard', component: DashboardComponent},
 
   
  ];
  
 


@NgModule({
   imports: [RouterModule.forRoot(routes,{
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

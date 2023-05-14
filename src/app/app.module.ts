import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/home/about-me/about-me.component';
import { ExperienceComponent } from './components/home/experience/experience.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './components/home/contact/contact.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditUserModalComponent } from './assets/components/edit-user-modal/edit-user-modal.component';
import { ProgressBarComponent } from './assets/components/progress-bar/progress-bar.component';
import { SkillsComponent } from './components/home/skills/skills.component';
import { HabilitiesComponent } from './components/home/habilities/habilities.component';
import { EditSkillModalComponent } from './assets/components/edit-skill-modal/edit-skill-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    AboutMeComponent,
    ExperienceComponent,
    SkillsComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    EditUserModalComponent,
    ProgressBarComponent,
    HabilitiesComponent,
    EditSkillModalComponent,
 
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

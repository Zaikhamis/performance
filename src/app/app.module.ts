import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginApp } from './login/login.component';
import { HomePage } from "./home/home.component";
import { NavBar } from "./navbar/navbar.component";
import { appRoutes } from './routes';
import { EvaluateEmployee } from './evaluate/evaluate.component';
import { Comments } from "./comment/comment.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginApp,
    HomePage,
    EvaluateEmployee,
    NavBar,
    Comments,
    DashboardComponent,
    ViewEmployeeComponent,
    ViewemployeeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,  
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

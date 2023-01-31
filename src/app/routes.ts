import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { LoginApp } from "./login/login.component";
import { HomePage } from "./home/home.component";
import { EvaluateEmployee } from "./evaluate/evaluate.component";
import { Employee } from "./employee/employee.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ViewEmployeeComponent } from "./view-employee/view-employee.component";

export const appRoutes = [
    { path: 'login', component: LoginApp },
    { path: 'home', component: HomePage },
    { path: 'evaluate', component: EvaluateEmployee },
    { path: 'employee', component: Employee },
    { path:'dashboard', component: DashboardComponent },
    { path: 'view', component: ViewEmployeeComponent },
    { path: 'comment', component: Comment},
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    // { path: '**' redirectTo: 'login' }
];
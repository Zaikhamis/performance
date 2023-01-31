import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employees';

// export class Employee {
//   constructor(
//     public emp_id: number,
//     public emp_firstname: string,
//     public emp_lastname: string,
//     public emp_phone: string,
//     public emp_email: string,
//     public emp_role: string,
//     public emp_password: string
//   ) {

//   }
// }

@Component({
  selector: 'epm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  employees!: Employee[];
  private httpClient!: HttpClient;

  constructor( 
    httpClient: HttpClient
    ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.httpClient.get<any>('http://localhost:9090/employees').subscribe(
      response => {
        console.log(response);
        this.employees = response;
      }
    );
  }

}

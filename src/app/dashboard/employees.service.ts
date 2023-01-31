import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
  
@Injectable({  
  providedIn: 'root'  
})  
  
export class EmployeeService {  
  
  private baseUrl = 'http://localhost:8080/api/';  
  
  constructor(private http:HttpClient) { }  
  
  getEmployeeList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'employees');  
  }  
  
  createStudent(employee: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'/employees', employee);  
  }  
  
  deleteStudent(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/employees/${id}`, { responseType: 'text' });  
  }  
  
  getStudent(id: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}/employees/${id}`);  
  }  
  
  updateStudent(id: number, value: any): Observable<Object> {  
    return this.http.post(`${this.baseUrl}/employees/${id}`, value);  
  }  
    
}  
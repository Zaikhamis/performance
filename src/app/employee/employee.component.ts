import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { EmployeeService } from "../dashboard/employees.service";

@Component({
    selector: "emp-app",
    templateUrl: "./employee.component.html",
    styles: [`
    
/* html,
body {
  height: 100%;
} */

:root {
  --wishBlue: #66f;
  --wishGreen: #6f6;
  --wishRed: #f66;
  --wishDark: #1a1a1a;
}

.field-error {
  border: 1px solid red !important;
}

.login-sec {
  min-height: 100%;
  margin-top: 6em;
  /* border: 10px solid red; */
}

.login-sec > .header-con {
  margin-top: 1em;
  text-align: center;
  color: #66f;
  text-transform: uppercase;
  text-decoration: overline ;
}

.header-con > .heading {
  text-transform: capitalize;
}

div.container-log {
  transition: .7s .5s linear;
  display: flex;
  flex-direction: column;
  max-width: 25%;
  width: 100%;
  justify-content: center;
  text-align: center;
  border: 1px solid #111;
  background-color: #111;
  box-shadow: 2px 2px 7px 5px #111;
  border-radius: 0.3em;
  /* border: 10px solid blue; */
  margin: 4em auto;
  padding: 1.57em;
  min-height: 100%;
}

.lightMode {
  transition: .7s .5s linear;
  /* display: flex;
  flex-direction: column !important;
  max-width: 25%;
  width: 100%;
  justify-content: center;
  text-align: center; */
  border: 1px solid #ddd;
  background-color: #d1e1f1;
  color: #66f;
  /* box-shadow: 7px 12px 10px #111;
  border-radius: 0.3em;
  margin: 6em auto;
  padding: 1.57em; */
}

input {
  color: #66f;
}

label,
input,
button#btn-submit {
  display: block;
  margin: 0.5em auto;
}


.container-log > form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.container-log > form > input,
button {
  height: 30px;
  width: 90%;
}

#btn-submit {
  transition: 0.3s ease-in-out;
  background-color: var(--wishBlue);
  color: var(--wishDark);
  font-size: medium;
  font-weight: 500;
  border: 1px solid var(--wishBlue);
  margin-top: 1.5em !important;
  height: 40px;
  border-radius: 0.267em;
  cursor: pointer;
  padding: 0.5em;
}

#btn-submit:hover {
  background-color: var(--wishBlue);
  box-shadow: 1px 1px 15px var(--wishBlue);
  color: #d1e1f1;
}

label {
  color: #d1e1f1;
}

#userId,
#passId {
  /* box-shadow: 1px 1px 5px #000; */
  font-size: large;
  font-weight: normal;
  border-radius: 0.267em;
  border-top: none !important;
  border-left: none !important;
  border-right: none !important;
  border: 1px solid #66f;
  background-color: transparent;
  color: var(--wishBlue);
  text-align: center;
  padding: 0.5em 0.8em;
}

div.container-log > a#resetPass {
  text-decoration: none;
  color: #66f;
}

a#resetPass:hover {
  color: #33f !important;
}

@media screen and (max-width: 1350px) {
  div.container-log {
    max-width: 30%;
  }
}

@media screen and (max-width: 950px) {
  div.container-log {
    max-width: 40%;
  }
}

@media screen and (max-width: 800px) {
  div.container-log {
    max-width: 50%;
  }
}

@media screen and (max-width: 500px) {
  div.container-log {
    max-width: 70%;
  }
}

    `]
})

export class Employee { 
  
  constructor (private employeeService:EmployeeService) {}

 }
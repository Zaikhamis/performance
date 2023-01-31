import { Component, Input } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomePage {
  
  constructor(private loginService: LoginService) {}

  contents: any[] = [
    {
    imageUrl: '../assets/',
    imageName: 'Evaluation chart'
    },
    {
      imageUrl: '../assets/',
      imageName: 'Employees'
    },
    {
      imageUrl: '../assets/',
      imageName: 'Result Computation'
    }
];
}

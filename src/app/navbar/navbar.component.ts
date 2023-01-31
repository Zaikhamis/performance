import { Component } from "@angular/core";
import { AppComponent } from "../app.component";

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavBar extends AppComponent {

  navMenu = {
    home: 'Home',
    services: 'Evaluate',
    report: 'Reports',
    about: 'About-us',
    comments: 'Leave a Message',
    tips: 'Help'
  }

  mode = {
    dark: '#1a1a1a',
    light: '#eee'
  }

}

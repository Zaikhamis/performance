import { Component, OnInit } from '@angular/core';
import { NavBar } from './navbar/navbar.component';
import { LoginApp } from './login/login.component';

@Component({
  selector: 'epm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'EPMS - Employee Performance Evaluation';
  // showNav: boolean = true;

  ngOnInit(): void {
    console.log('In OnInit');
  }

  // Show Hide Navigation Bar
  // toggleNavBar(): void {
  //   this.showNav = !this.showNav;
  // }
}

document.addEventListener('DOMContentLoaded', () => {
  let isActive = true;
  // let name = prompt("Enter a name: ");
  // console.log(name);
  let btnToggle = document.getElementById('toggle-menu');
  btnToggle?.addEventListener('click', () => {
    console.log('Toggle Button is Clicked');
    
    if (isActive) {
      toggle_menu();
      isActive = !isActive;
    }
    else {
      toggle_menuBack();
      isActive = true;
    }
    
  });
});

let toggle_menu = () => {
  let navBar = document.getElementById('nav-bar');
  navBar!.style.cssText = `
    transform: translate(-230px, 0);
  `;

  let main = document.getElementById('main');
  main!.style.cssText = `
    margin-left: 0;
  `;

  let header = document.getElementById('header');
  header!.style.cssText = `
    margin-left: 0;
  `;

  let footer = document.getElementById('footer');
  footer!.style.cssText = `
    margin-left: 0;
  `;
};

let toggle_menuBack = () => {
  let navBar = document.getElementById('nav-bar');
  navBar!.style.cssText = `
    transform: translate(0, 0);
  `;

  let main = document.getElementById('main');
  main!.style.cssText = `
    margin-left: 230px;
  `;

  let header = document.getElementById('header');
  header!.style.cssText = `
    margin-left: 230px;
  `;

  let footer = document.getElementById('footer');
  footer!.style.cssText = `
    margin-left: 230px;
  `;
};
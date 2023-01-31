import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginApp } from './login.component';

describe('LoginComponent', () => {
  let component: LoginApp;
  let fixture: ComponentFixture<LoginApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginApp ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

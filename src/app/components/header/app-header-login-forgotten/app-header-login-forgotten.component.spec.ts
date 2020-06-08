import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeaderLoginForgottenComponent } from './app-header-login-forgotten.component';

describe('AppHeaderLoginForgottenComponent', () => {
  let component: AppHeaderLoginForgottenComponent;
  let fixture: ComponentFixture<AppHeaderLoginForgottenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHeaderLoginForgottenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeaderLoginForgottenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

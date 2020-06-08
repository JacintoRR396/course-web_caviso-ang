import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeaderLoginDataComponent } from './app-header-login-data.component';

describe('AppHeaderLoginDataComponent', () => {
  let component: AppHeaderLoginDataComponent;
  let fixture: ComponentFixture<AppHeaderLoginDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHeaderLoginDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeaderLoginDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSectionHomeComponent } from './app-section-home.component';

describe('AppSectionHomeComponent', () => {
  let component: AppSectionHomeComponent;
  let fixture: ComponentFixture<AppSectionHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSectionHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSectionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

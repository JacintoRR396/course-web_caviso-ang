import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSectionMembersComponent } from './app-section-members.component';

describe('AppSectionMembersComponent', () => {
  let component: AppSectionMembersComponent;
  let fixture: ComponentFixture<AppSectionMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSectionMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSectionMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

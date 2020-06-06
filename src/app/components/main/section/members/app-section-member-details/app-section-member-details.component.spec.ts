import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSectionMemberDetailsComponent } from './app-section-member-details.component';

describe('AppSectionMemberDetailsComponent', () => {
  let component: AppSectionMemberDetailsComponent;
  let fixture: ComponentFixture<AppSectionMemberDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSectionMemberDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSectionMemberDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSectionMemberListComponent } from './app-section-member-list.component';

describe('AppSectionMembersComponent', () => {
  let component: AppSectionMemberListComponent;
  let fixture: ComponentFixture<AppSectionMemberListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSectionMemberListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSectionMemberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

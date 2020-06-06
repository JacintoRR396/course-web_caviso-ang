import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSectionMemberUpdateComponent } from './app-section-member-update.component';

describe('AppSectionMemberUpdateComponent', () => {
  let component: AppSectionMemberUpdateComponent;
  let fixture: ComponentFixture<AppSectionMemberUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSectionMemberUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSectionMemberUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

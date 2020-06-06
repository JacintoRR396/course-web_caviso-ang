import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSectionMemberAddComponent } from './app-section-member-add.component';

describe('AppSectionMemberAddComponent', () => {
  let component: AppSectionMemberAddComponent;
  let fixture: ComponentFixture<AppSectionMemberAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSectionMemberAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSectionMemberAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateUserRegistrationComponent } from './template-user-registration.component';

describe('TemplateUserRegistrationComponent', () => {
  let component: TemplateUserRegistrationComponent;
  let fixture: ComponentFixture<TemplateUserRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateUserRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateUserRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveUserRegistrationComponent } from './reactive-user-registration.component';

describe('ReactiveUserRegistrationComponent', () => {
  let component: ReactiveUserRegistrationComponent;
  let fixture: ComponentFixture<ReactiveUserRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveUserRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveUserRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveInfoComponent } from './reactive-info.component';

describe('ReactiveInfoComponent', () => {
  let component: ReactiveInfoComponent;
  let fixture: ComponentFixture<ReactiveInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

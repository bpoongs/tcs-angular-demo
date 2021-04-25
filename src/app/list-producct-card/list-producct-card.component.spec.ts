import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProducctCardComponent } from './list-producct-card.component';

describe('ListProducctCardComponent', () => {
  let component: ListProducctCardComponent;
  let fixture: ComponentFixture<ListProducctCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProducctCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProducctCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

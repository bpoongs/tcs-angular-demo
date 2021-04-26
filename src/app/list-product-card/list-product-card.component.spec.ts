import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductCardComponent } from './list-product-card.component';

describe('ListProductCardComponent', () => {
  let component: ListProductCardComponent;
  let fixture: ComponentFixture<ListProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

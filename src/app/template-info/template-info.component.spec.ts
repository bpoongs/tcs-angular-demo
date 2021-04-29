import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateInfoComponent } from './template-info.component';

describe('TemplateInfoComponent', () => {
  let component: TemplateInfoComponent;
  let fixture: ComponentFixture<TemplateInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

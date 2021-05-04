import { ElementRef } from '@angular/core';
import { ColorDirective } from './color.directive';

describe('ColorDirective', () => {
  it('should create an instance', () => {
    const directive = new ColorDirective(new ElementRef('h1'));
    expect(directive).toBeTruthy();
  });
});

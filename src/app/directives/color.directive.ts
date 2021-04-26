import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private element: ElementRef) { }

  @HostListener('mouseover')
  onMouseOver(){
    this.changeColor('#B2D732');
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.changeColor('');
  }

  private changeColor(color: string){
    this.element.nativeElement.style.backgroundColor = color;
  }

}

import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appFirst]'
})
export class FirstDirective {

  constructor(private element: ElementRef) {
    // this.element.nativeElement.classList.add('blue')
  }

  @Input() set backgroundColor(colorName: string){
    this.element.nativeElement.style.backgroundColor=colorName;
  }
}

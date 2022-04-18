import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMarkComplete]',
})
export class MarkCompleteDirective {
  @Input('appMarkComplete') options: any;
  constructor(private el: ElementRef) {
    if (this.options.apply) {
      this.el.nativeElement.style.backgroundColor = 'lightgreen';
    }
  }
}

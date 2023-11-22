import {
  Directive,
  ElementRef,
  EventEmitter,
  Output,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
})
export class ClickOutsideDirective {
  @Output() clickedOutside = new EventEmitter();
  constructor(private el: ElementRef) {}

  @HostListener('document:click', ['$event.target']) onClick(target: any) {
    const clickInSide = this.el.nativeElement.contains(target);
    if (!clickInSide) {
      this.clickedOutside.emit(target);
    }
  }
}

import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appColorChanger]',
})
export class ColorChangerDirective {
  @Input() backgroundColor: string = '';
  constructor(private elementRef: ElementRef) {}
  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = this.backgroundColor;
  }
}

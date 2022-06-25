import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appChangeInnerHTML]',
})
export class ChangeInnerHTMLDirective {
  @Input() innerText: string = '';
  constructor(private elementRef: ElementRef) {}
  ngOnInit() {
    this.elementRef.nativeElement.innerText = this.innerText;
  }
}

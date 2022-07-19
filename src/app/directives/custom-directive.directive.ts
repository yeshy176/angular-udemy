import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective implements OnInit{
  @Input() defaultColor: string = 'transparent'
  @Input() highlightColor: string = 'blue'
  @HostBinding('style.backgroundColor') backgroundColor: string;
  
  // the constructor takes an argument which is a reference to the element the directive was placed on
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }
  
  ngOnInit(): void {
    this.backgroundColor = this.defaultColor
  }
  
  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }
}

import {Directive, ElementRef, OnInit, Renderer2, HostListener,  HostBinding } from '@angular/core';

@Directive({
  selector: '[appTextHighlight]'
})
export class TextHighlightDirective {
  
  @HostBinding('style.backgroundColor') bgColor: string;
  @HostBinding('style.color') color: string;

  constructor(
    private elementRef: ElementRef, 
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
    this.renderer.setStyle(
    this.elementRef.nativeElement,
    'font-size',
    '24px' 
    )
  }
  @HostListener('mouseenter') mouseover(event: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'navy');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
    this.bgColor = '#1e1e1e';
    this.color = '#4EC9B0';
  }
  @HostListener('mouseleave') mouseleave(event: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
    this.bgColor = 'transparent';
    this.color = 'black';
  }
}

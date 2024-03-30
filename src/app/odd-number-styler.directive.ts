import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOddNumberStyler]'
})
export class OddNumberStylerDirective implements OnInit {

  @Input('defaultColor')defaultColor : string;
  @Input('highlightColor') highlightColor : string;

  @HostBinding('style.backgroundColor') backgroundColor : string;

  constructor(private renderer : Renderer2, private elementRef : ElementRef) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement,'font-style','italic');
    this.backgroundColor=this.defaultColor;
  }

  @HostListener('mouseenter')mouseover(event : Event) {
    this.renderer.setStyle(this.elementRef.nativeElement,'font-style','normal');
    this.backgroundColor=this.highlightColor;
    this.renderer.setStyle(this.elementRef.nativeElement,'color','black');
  }

  @HostListener('mouseleave')mouseleave(event : Event) {
    this.renderer.setStyle(this.elementRef.nativeElement,'font-style','italic');
    this.backgroundColor=this.defaultColor;
    this.renderer.setStyle(this.elementRef.nativeElement,'color','green');
  }

  @HostListener('click')mouseclick(event : Event) {

    this.renderer.setStyle(this.elementRef.nativeElement,'background-color','skyblue');

  }

}

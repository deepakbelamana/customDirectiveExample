import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appEvenNumberHighLighter]'
})
export class EvenNumberHighLighterDirective implements OnInit{

  constructor(private elementRef : ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'lightgreen';
  }

}

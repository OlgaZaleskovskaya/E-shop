import { Directive, ElementRef, HostListener } from '@angular/core';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }
  
    @HostListener('mouseenter') onmouseenter() {
      this.highlight('thin solid red');
    }
   
    @HostListener('mouseleave') onmouseleave() {
      this.highlight('thin solid white');
    }
   
    private highlight(border: string) {
      this.el.nativeElement.style.borderBottom = border;
    }
 }



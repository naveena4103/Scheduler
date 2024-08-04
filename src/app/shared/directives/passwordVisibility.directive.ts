import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[appTogglePassword]'
  })
  export class TogglePasswordDirective {
    constructor(private el: ElementRef) {}
  
    @HostListener('click')
    onClick() {
      const input: HTMLInputElement = this.el.nativeElement.previousElementSibling;
      if (input.type === 'password') {
        input.type = 'text';
      } else {
        input.type = 'password';
      }
    }
  }
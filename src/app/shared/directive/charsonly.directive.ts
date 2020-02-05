import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCharsonly]'
})
export class CharsonlyDirective {

  constructor() { }

  @HostListener('keydown', ['$event'])
  onKeyDown(e: KeyboardEvent) {
     if (
       [46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 || // Allow: Delete, Backspace, Tab, Escape, Enter
       (e.keyCode === 65 && e.ctrlKey === true) || // Allow: Ctrl+A
       (e.keyCode === 67 && e.ctrlKey === true) || // Allow: Ctrl+C
       (e.keyCode === 86 && e.ctrlKey === true) || // Allow: Ctrl+V
       (e.keyCode === 88 && e.ctrlKey === true) // Allow: Ctrl+X
    //   (e.keyCode === 65 && e.metaKey === true) || // Cmd+A (Mac)
    //   (e.keyCode === 67 && e.metaKey === true) || // Cmd+C (Mac)
    //   (e.keyCode === 86 && e.metaKey === true) || // Cmd+V (Mac)
    //   (e.keyCode === 88 && e.metaKey === true) || // Cmd+X (Mac)
    //   (e.keyCode >= 35 && e.keyCode <= 39) // Home, End, Left, Right
     ) {
       return;  
     }
    
    if (
      (e.keyCode==16 || (e.keyCode <= 65 || e.keyCode >= 90)) &&
      (e.keyCode <=122 || e.keyCode >= 97)
    ) {
      e.preventDefault();
    }
  }
}

import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appHighlight]",
})
export class HighlightDirective {
  constructor(private elref: ElementRef) {}

  @HostListener("click") mouseover() {
    this.elref.nativeElement.style.backgroundColor = "yellow";
  }
  @HostListener("mouseout") mouseOut() {
    this.elref.nativeElement.style.backgroundColor = "";
  }
}

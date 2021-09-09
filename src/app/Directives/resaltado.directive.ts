import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el: ElementRef) {

    console.log('Directiva llamada')
  }

  @Input("appResaltado") nuevoColor: string | undefined;

  @HostListener('mouseenter') mauseEntro() {
    this.resaltar(this.nuevoColor || 'yellow');
    // this.el.nativeElement.style.backgroundColor = "yellow";
  }

  @HostListener('mouseleave') mauseSalio() {
    // this.el.nativeElement.style.backgroundColor = null;
    this.resaltar('');

  }

  private resaltar(color:string){
    this.el.nativeElement.style.backgroundColor = color;
    
  }

}

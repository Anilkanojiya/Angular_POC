import { Directive, ElementRef ,Renderer2, HostListener, Input  } from '@angular/core';

@Directive({
  selector: '[AppDisplay]'
})
export class AppDisplayDirective {

  @Input() AppDisplay;
  constructor(private el: ElementRef, private renderer: Renderer2) {
    
   }

   @HostListener('dragstart',['$event'])
   performTask() {
     	 	   
     const element = this.renderer.selectRootElement('.root'); 
    
     if(this.AppDisplay.hidden) this.AppDisplay.hidden = false;

     this.renderer.appendChild(element,this.AppDisplay);
   }
}

import {
  Injectable,
  Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ApplicationRef
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateCompService {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  appendComponentToBody(component: any,parentEl:any, childEl:any) {
    // 1. Create a component reference from the component 
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector);
    
    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(componentRef.hostView);
    
    // 3. Get DOM element from component
    // const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
    //   .rootNodes[0] as HTMLElement;
    //   console.log(domElem);
    const childElem = childEl;
    childElem.hidden = false;
    // 4. Append DOM element to the body
    document.body.appendChild(parentEl);
    //console.log(document.body);
    //document.body.insertAdjacentHTML = domElem;
    document.body.appendChild(childElem);
    
    // 5. Wait some time and remove it from the component tree and from the DOM
    setTimeout(() => {
        this.appRef.detachView(componentRef.hostView);
        componentRef.destroy();
    }, 3000);
  }
}

import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructuralDirective]'
})
export class StructuralDirectiveDirective {
  // it is important to understand that unless is still a property. The 'set' keyword adds a method to the property
  // that executes when there is change in the property value from outside the directive.
  @Input('appStructuralDirective') set unless(condition: boolean) {
    if (!condition) {
      // creates a view of teh templateRef
      this.vsRef.createEmbeddedView(this.templateRef)
    } else {
      // else remove everything from this place in the DOM
      this.vsRef.clear()
    }
  }
  // just like how ElementRef gives us access to the element the directive was on, TemplateRef gives
  // us access to the template the directive is on.
  // the ViewContainerRef marks the place where we place the directive in the document. Angular marks
  // place, which can be seen from the developer tools
  constructor(private templateRef: TemplateRef<any>, private vsRef: ViewContainerRef) { }

}

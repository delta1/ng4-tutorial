import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[repeat]',
  inputs: ['repeat'],
})
export class RepeatDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input() set repeat(num: number) {
    if (num > 0) {
      for (let i = 0; i < num; i++) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    }
    else {
      this.viewContainer.clear();
    }
  }
} 

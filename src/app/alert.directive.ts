import { Directive } from '@angular/core';

@Directive({
  selector: '[alert]',
  host: {
    '(click)': 'onClick($event)',
  }
})
export class AlertDirective {

  constructor() { }

  onClick(e) {
    console.log('e', e);
    alert('click!');
  }

}

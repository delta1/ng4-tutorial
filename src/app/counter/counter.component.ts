import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  providers: [CounterService],
})
export class CounterComponent implements OnInit {

  constructor(private counterService: CounterService) { }

  ngOnInit() {
    this.counterValue = this.counterService.getInitialValue();
  }

  counterValue:number;

  incrementValue:number = 3;

  increment() {
    this.counterValue += this.incrementValue;
    this.counterService.saveValue(this.counterValue);
  }

  reset() {
    this.incrementValue = 1;
  }

}

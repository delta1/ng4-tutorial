import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';
import { RandomService } from '../random.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  providers: [
    CounterService,
    RandomService,
  ],
})
export class CounterComponent implements OnInit {

  constructor(
    private counterService: CounterService,
    private randomService: RandomService,
  ) { }

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

  random() {
    this.counterValue = this.randomService.getRandomNumber();
    this.counterService.saveValue(this.counterValue);
    this.incrementValue = this.randomService.getRandomNumber();
  }

}

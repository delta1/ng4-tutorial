import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { RandomService } from '../random.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor(
    private storage: LocalStorageService,
    private randomService: RandomService
  ) { }

  ngOnInit() {
    this.counterValue = this.storage.retrieve('counterValue') || 0;
  }

  counterValue:number;

  incrementValue:number = 3;

  increment() {
    this.counterValue += this.incrementValue;
    this.storage.store('counterValue', this.counterValue);
  }

  reset() {
    this.incrementValue = 1;
  }

  random() {
    this.counterValue = this.randomService.getRandom();
    this.storage.store('counterValue', this.counterValue);
    this.incrementValue = this.randomService.getRandom();
  }

}

import { Injectable, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable()
export class CounterService {

  constructor(private storage: LocalStorageService) { }

  counterValue:number;

  getInitialValue(): number {
    return this.storage.retrieve('counterValue');
  }

  saveValue(value: number) {
    this.storage.store('counterValue', value);
  }

}

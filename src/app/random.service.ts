import { Injectable } from '@angular/core';

@Injectable()
export class RandomService {

  constructor() { }

  getRandom(): number {
    return Math.floor(Math.random() * 100);
  }

}

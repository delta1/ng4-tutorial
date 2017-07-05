import { Injectable } from '@angular/core';

@Injectable()
export class RandomService {

  constructor() { }

  getRandomNumber(): number {
    return Math.floor(Math.random() * 10);
  }

}

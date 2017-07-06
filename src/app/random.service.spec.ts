import { TestBed, inject } from '@angular/core/testing';

import { RandomService } from './random.service';

describe('RandomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomService]
    });
  });

  it('should ...', inject([RandomService], (service: RandomService) => {
    expect(service).toBeTruthy();
  }));
});

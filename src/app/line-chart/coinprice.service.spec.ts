import { TestBed } from '@angular/core/testing';

import { CoinPriceService } from './coinprice.service';

describe('CoinPriceService', () => {
  let service: CoinPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoinPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Top50Service } from './top50.service';

describe('Top50Service', () => {
  let service: Top50Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Top50Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { UpdateCartCountService } from './update-cart-count.service';

describe('UpdateCartCountService', () => {
  let service: UpdateCartCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateCartCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

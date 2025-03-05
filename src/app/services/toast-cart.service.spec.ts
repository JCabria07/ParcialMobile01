import { TestBed } from '@angular/core/testing';

import { ToastCartService } from './toast-cart.service';

describe('ToastCartService', () => {
  let service: ToastCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

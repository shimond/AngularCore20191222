import { TestBed } from '@angular/core/testing';

import { MyInteceptorService } from './my-inteceptor.service';

describe('MyInteceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyInteceptorService = TestBed.get(MyInteceptorService);
    expect(service).toBeTruthy();
  });
});

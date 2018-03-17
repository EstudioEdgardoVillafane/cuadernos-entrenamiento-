import { TestBed, inject } from '@angular/core/testing';

import { UsuerService } from './usuer.service';

describe('UsuerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsuerService]
    });
  });

  it('should be created', inject([UsuerService], (service: UsuerService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { CuadernoTotoService } from './cuaderno-toto.service';

describe('CuadernoTotoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CuadernoTotoService]
    });
  });

  it('should be created', inject([CuadernoTotoService], (service: CuadernoTotoService) => {
    expect(service).toBeTruthy();
  }));
});

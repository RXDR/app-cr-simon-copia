/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdmisionPrgService } from './admisionPrg.service';

describe('Service: AdmisionPrg', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdmisionPrgService]
    });
  });

  it('should ...', inject([AdmisionPrgService], (service: AdmisionPrgService) => {
    expect(service).toBeTruthy();
  }));
});

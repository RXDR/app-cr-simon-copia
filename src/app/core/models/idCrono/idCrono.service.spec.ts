/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IdCronoService } from './idCrono.service';

describe('Service: IdCrono', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IdCronoService]
    });
  });

  it('should ...', inject([IdCronoService], (service: IdCronoService) => {
    expect(service).toBeTruthy();
  }));
});

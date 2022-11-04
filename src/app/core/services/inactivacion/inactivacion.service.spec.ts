/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InactivacionService } from './inactivacion.service';

describe('Service: Inactivacion', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InactivacionService]
    });
  });

  it('should ...', inject([InactivacionService], (service: InactivacionService) => {
    expect(service).toBeTruthy();
  }));
});

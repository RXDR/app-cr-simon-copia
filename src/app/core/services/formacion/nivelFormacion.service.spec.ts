/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NivelFormacionService } from './nivelFormacion.service';

describe('Service: NivelFormacion', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NivelFormacionService]
    });
  });

  it('should ...', inject([NivelFormacionService], (service: NivelFormacionService) => {
    expect(service).toBeTruthy();
  }));
});

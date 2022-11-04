/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NivelAcademicoPrgService } from './nivelAcademicoPrg.service';

describe('Service: NivelAcademicoPrg', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NivelAcademicoPrgService]
    });
  });

  it('should ...', inject([NivelAcademicoPrgService], (service: NivelAcademicoPrgService) => {
    expect(service).toBeTruthy();
  }));
});

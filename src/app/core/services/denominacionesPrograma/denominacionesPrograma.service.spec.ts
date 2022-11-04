/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DenominacionesProgramaService } from './denominacionesPrograma.service';

describe('Service: DenominacionesPrograma', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DenominacionesProgramaService]
    });
  });

  it('should ...', inject([DenominacionesProgramaService], (service: DenominacionesProgramaService) => {
    expect(service).toBeTruthy();
  }));
});

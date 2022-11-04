/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ModalidadService } from './modalidad.service';

describe('Service: Modalidad', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalidadService]
    });
  });

  it('should ...', inject([ModalidadService], (service: ModalidadService) => {
    expect(service).toBeTruthy();
  }));
});

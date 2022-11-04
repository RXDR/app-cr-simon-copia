/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CiudadesService } from './ciudad.service';

describe('Service: Ciudades', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CiudadesService]
    });
  });

  it('should ...', inject([CiudadesService], (service: CiudadesService) => {
    expect(service).toBeTruthy();
  }));
});

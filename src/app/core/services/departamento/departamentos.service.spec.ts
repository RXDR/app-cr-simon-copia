/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DepartamentosService } from './departamentos.service';

describe('Service: Departamentos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DepartamentosService]
    });
  });

  it('should ...', inject([DepartamentosService], (service: DepartamentosService) => {
    expect(service).toBeTruthy();
  }));
});

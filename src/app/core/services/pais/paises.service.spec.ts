/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PaisesService } from './paises.service';

describe('Service: Paises', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaisesService]
    });
  });

  it('should ...', inject([PaisesService], (service: PaisesService) => {
    expect(service).toBeTruthy();
  }));
});

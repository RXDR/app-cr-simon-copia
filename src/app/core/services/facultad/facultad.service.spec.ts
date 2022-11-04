/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FacultadService } from './facultad.service';

describe('Service: Facultad', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacultadService]
    });
  });

  it('should ...', inject([FacultadService], (service: FacultadService) => {
    expect(service).toBeTruthy();
  }));
});

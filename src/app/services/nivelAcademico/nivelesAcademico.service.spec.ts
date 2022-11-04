/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NivelesAcademicoService } from './nivelesAcademico.service';

describe('Service: NivelesAcademico', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NivelesAcademicoService]
    });
  });

  it('should ...', inject([NivelesAcademicoService], (service: NivelesAcademicoService) => {
    expect(service).toBeTruthy();
  }));
});

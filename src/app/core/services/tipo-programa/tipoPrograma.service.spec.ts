/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TipoProgramaService } from './tipoPrograma.service';

describe('Service: TipoPrograma', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoProgramaService]
    });
  });

  it('should ...', inject([TipoProgramaService], (service: TipoProgramaService) => {
    expect(service).toBeTruthy();
  }));
});

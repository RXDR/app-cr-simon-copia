import { TestBed } from '@angular/core/testing';

import { InicioProgramaService } from './inicio-programa.service';

describe('InicioProgramaService', () => {
  let service: InicioProgramaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InicioProgramaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

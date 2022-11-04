/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JornadaOfreService } from './jornadaOfre.service';

describe('Service: JornadaOfre', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JornadaOfreService]
    });
  });

  it('should ...', inject([JornadaOfreService], (service: JornadaOfreService) => {
    expect(service).toBeTruthy();
  }));
});

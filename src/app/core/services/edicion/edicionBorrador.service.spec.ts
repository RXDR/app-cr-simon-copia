/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EdicionBorradorService } from './edicionBorrador.service';

describe('Service: EdicionBorrador', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EdicionBorradorService]
    });
  });

  it('should ...', inject([EdicionBorradorService], (service: EdicionBorradorService) => {
    expect(service).toBeTruthy();
  }));
});

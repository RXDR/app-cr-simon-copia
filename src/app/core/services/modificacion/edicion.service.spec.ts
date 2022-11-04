/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EdicionService } from './edicion.service';

describe('Service: Edicion', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EdicionService]
    });
  });

  it('should ...', inject([EdicionService], (service: EdicionService) => {
    expect(service).toBeTruthy();
  }));
});

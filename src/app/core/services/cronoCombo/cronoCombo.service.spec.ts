/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CronoComboService } from './cronoCombo.service';

describe('Service: CronoCombo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CronoComboService]
    });
  });

  it('should ...', inject([CronoComboService], (service: CronoComboService) => {
    expect(service).toBeTruthy();
  }));
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CronoProgramaSrvService } from './cronoProgramaSrv.service';

describe('Service: CronoProgramaSrv', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CronoProgramaSrvService]
    });
  });

  it('should ...', inject([CronoProgramaSrvService], (service: CronoProgramaSrvService) => {
    expect(service).toBeTruthy();
  }));
});

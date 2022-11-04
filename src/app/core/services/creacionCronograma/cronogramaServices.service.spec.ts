/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CronogramaServicesService } from './cronogramaServices.service';

describe('Service: CronogramaServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CronogramaServicesService]
    });
  });

  it('should ...', inject([CronogramaServicesService], (service: CronogramaServicesService) => {
    expect(service).toBeTruthy();
  }));
});

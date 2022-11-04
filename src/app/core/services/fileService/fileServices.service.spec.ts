/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FileServicesService } from './fileServices.service';

describe('Service: FileServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileServicesService]
    });
  });

  it('should ...', inject([FileServicesService], (service: FileServicesService) => {
    expect(service).toBeTruthy();
  }));
});

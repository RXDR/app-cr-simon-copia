/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FuncionarioSvcService } from './funcionarioSvc.service';

describe('Service: FuncionarioSvc', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FuncionarioSvcService]
    });
  });

  it('should ...', inject([FuncionarioSvcService], (service: FuncionarioSvcService) => {
    expect(service).toBeTruthy();
  }));
});

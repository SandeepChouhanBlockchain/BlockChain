import { TestBed } from '@angular/core/testing';

import { BloodserviceService } from './bloodservice.service';

describe('BloodserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BloodserviceService = TestBed.get(BloodserviceService);
    expect(service).toBeTruthy();
  });
});
